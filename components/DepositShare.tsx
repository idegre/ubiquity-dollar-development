import { ChangeEvent, useState, useEffect } from "react";
import { BigNumber, ethers } from "ethers";
import { connectedWithUserContext, UserContext } from "./context/connected";
import { Contracts } from "../contracts";
import { constrainNumber } from "./common/utils";

const toEtherNum = (n: BigNumber) => +n.toString() / 1e18;
const toNum = (n: BigNumber) => +n.toString();

const MIN_WEEKS = 1;
const MAX_WEEKS = 208;

type PrefetchedConstants = { totalShares: number; usdPerWeek: number; bondingDiscountMultiplier: BigNumber };
async function prefetchConstants(contracts: Contracts): Promise<PrefetchedConstants> {
  const reserves = await contracts.ugovUadPair.getReserves();
  const ubqPrice = +reserves.reserve0.toString() / +reserves.reserve1.toString();
  const ubqPerBlock = await contracts.masterChef.uGOVPerBlock();
  const ubqMultiplier = await contracts.masterChef.uGOVmultiplier();
  const actualUbqPerBlock = toEtherNum(ubqPerBlock.mul(ubqMultiplier).div(`${1e18}`));
  const blockCountInAWeek = toNum(await contracts.bonding.blockCountInAWeek());
  const ubqPerWeek = actualUbqPerBlock * blockCountInAWeek;
  const totalShares = toEtherNum(await contracts.masterChef.totalShares());
  const usdPerWeek = ubqPerWeek * ubqPrice;
  const bondingDiscountMultiplier = await contracts.bonding.bondingDiscountMultiplier();
  return { totalShares, usdPerWeek, bondingDiscountMultiplier };
}

async function calculateApyForWeeks(contracts: Contracts, prefetch: PrefetchedConstants, weeksNum: number): Promise<number> {
  const { totalShares, usdPerWeek, bondingDiscountMultiplier } = prefetch;
  const DAYS_IN_A_YEAR = 365.2422;
  const usdAsLp = 0.7562534324; // TODO: Get this number from the Curve contract
  const bigNumberOneUsdAsLp = ethers.utils.parseEther(usdAsLp.toString());
  const weeks = BigNumber.from(weeksNum.toString());
  const shares = toEtherNum(await contracts.ubiquityFormulas.durationMultiply(bigNumberOneUsdAsLp, weeks, bondingDiscountMultiplier));
  const rewardsPerWeek = (shares / totalShares) * usdPerWeek;
  const yearlyYield = (rewardsPerWeek / 7) * DAYS_IN_A_YEAR * 100;
  return Math.round(yearlyYield * 100) / 100;
}

// async function calculateExpectedShares(contracts: Contracts, prefetch: PrefetchedConstants, amount: string, weeks: string): Promise<number> {
//   const { bondingDiscountMultiplier } = prefetch;
//   const weeksBig = BigNumber.from(weeks);
//   const amountBig = ethers.utils.parseEther(amount);
//   const expectedShares = await contracts.ubiquityFormulas.durationMultiply(amountBig, weeksBig, bondingDiscountMultiplier);
//   const expectedSharesNum = +ethers.utils.formatEther(expectedShares);
//   return Math.round(expectedSharesNum * 10000) / 10000;
// }

type DepositShareProps = {
  onStake: ({ amount, weeks }: { amount: BigNumber; weeks: BigNumber }) => void;
  disabled: boolean;
  maxLp: BigNumber;
} & UserContext;

const DepositShare = ({ onStake, disabled, maxLp, contracts }: DepositShareProps) => {
  const [amount, setAmount] = useState("");
  const [weeks, setWeeks] = useState("");
  const [currentApy, setCurrentApy] = useState<number | null>(null);
  const [prefetched, setPrefetched] = useState<PrefetchedConstants | null>(null);
  const [apyBounds, setApyBounds] = useState<[number, number] | null>(null);

  function validateAmount(): string | null {
    if (amount) {
      const amountBig = ethers.utils.parseEther(amount);
      if (amountBig.gt(maxLp)) return `You don't have enough uAD-3CRV tokens`;
    }
    return null;
  }

  const error = validateAmount();
  const hasErrors = !!error;

  const onWeeksChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setWeeks(ev.target.value && constrainNumber(parseInt(ev.target.value), MIN_WEEKS, MAX_WEEKS).toString());
  };

  const onAmountChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setAmount(ev.target.value && constrainNumber(parseFloat(ev.target.value), 1, Infinity).toString());
  };

  const onClickStake = () => {
    onStake({ amount: ethers.utils.parseEther(amount), weeks: BigNumber.from(weeks) });
  };

  const onClickMax = () => {
    setAmount(ethers.utils.formatEther(maxLp));
    setWeeks(MAX_WEEKS.toString());
  };

  useEffect(() => {
    (async function () {
      const prefetched = await prefetchConstants(contracts);
      setPrefetched(prefetched);
      const [minApy, maxApy] = await Promise.all([
        calculateApyForWeeks(contracts, prefetched, MIN_WEEKS),
        calculateApyForWeeks(contracts, prefetched, MAX_WEEKS),
      ]);
      setApyBounds([minApy, maxApy]);
    })();
  }, []);

  useEffect(() => {
    (async function () {
      if (prefetched && weeks) {
        setCurrentApy(await calculateApyForWeeks(contracts, prefetched, parseInt(weeks)));
      } else {
        setCurrentApy(null);
      }
    })();
  }, [prefetched, weeks]);

  const noInputYet = !amount || !weeks;

  return (
    <div>
      <div className="text-3xl text-accent mb-4 opacity-75">
        APY {currentApy ? `${currentApy}%` : apyBounds ? `${apyBounds[0]}% - ${apyBounds[1]}%` : "..."}
      </div>
      <div className="mb-4 flex justify-center">
        <input type="number" lang="en" value={amount} onChange={onAmountChange} disabled={disabled} placeholder="uAD-3CRV LP Tokens" />

        <input
          type="number"
          value={weeks}
          onChange={onWeeksChange}
          disabled={disabled}
          placeholder={`Weeks (${MIN_WEEKS}-${MAX_WEEKS})`}
          min={MIN_WEEKS}
          max={MAX_WEEKS}
        />
        <button className="min-w-0" disabled={disabled} onClick={onClickMax}>
          MAX
        </button>
        <button disabled={disabled || hasErrors || noInputYet} onClick={onClickStake}>
          Stake LP Tokens
        </button>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default connectedWithUserContext(DepositShare);
