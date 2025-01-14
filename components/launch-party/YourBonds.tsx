import { round, format, formatFixed } from "./lib/utils";
import * as widget from "../ui/widget";

export type BondData = {
  tokenName: string;
  claimed: number;
  rewards: number;
  claimable: number;
  depositAmount: number;
  endsAtBlock: number;
  endsAtDate: Date;
  rewardPrice: number;
};

const toTimeInWords = (time: number): string => {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  return `${days}d ${hours}h ${minutes}m`;
};

const YourBonds = ({
  enabled,
  bonds,
  onClaim,
  uarUsdPrice,
}: {
  enabled: boolean;
  bonds: BondData[] | null;
  onClaim: () => void;
  uarUsdPrice: number | null;
}) => {
  if (!bonds || bonds.length === 0) return null;

  const accumulated = bonds.reduce((acc, bond) => acc + bond.claimable, 0);
  const accumulatedInUsd = uarUsdPrice ? accumulated * uarUsdPrice : null;

  return (
    <widget.Container>
      <widget.Title text="Your Bonds" />
      <widget.SubTitle text="Claim the accumulated flow" />

      <div className="mb-6 inline-block rounded border border-solid border-white border-opacity-10">
        <table className="m-0 table border-collapse">
          <thead className="border-0 border-b border-solid border-white border-opacity-10">
            <tr>
              <th>Bond</th>
              <th className="text-left">Progress</th>
              <th>Claimable</th>
            </tr>
          </thead>
          {bonds.length > 0 ? (
            <tbody>
              {bonds.map((bond, i) => (
                <tr key={i}>
                  <td className="whitespace-nowrap border-0 border-r border-solid border-white border-opacity-10 py-2 px-2">{bond.tokenName}</td>
                  <td className="w-full border-0 border-r border-solid border-white border-opacity-10 py-2 px-2 text-left">
                    <div className="flex">
                      <div className="flex-grow">
                        {formatFixed(round(bond.claimable + bond.claimed))}
                        {" / "}
                        {formatFixed(round(bond.rewards))} uAR{" "}
                      </div>
                      <div className="text-sm text-white text-opacity-50" title={`Ends at block: ${bond.endsAtBlock}`}>
                        {toTimeInWords(+bond.endsAtDate - +new Date())} left
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-2">{formatFixed(round(bond.claimable))} uAR</td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan={3} className="py-2 text-white text-opacity-50">
                  You've got no bonds yet
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
      <div className="mb-2 text-lg">Accumulated claimable</div>
      <div className="mb-6 text-3xl text-accent drop-shadow-light">
        {format(round(accumulated))} uAR{" "}
        {accumulatedInUsd !== null ? <span className="ml-2 text-2xl text-white opacity-50">(${format(round(accumulatedInUsd))})</span> : null}
      </div>
      <button className="btn-primary" disabled={!enabled || bonds.length === 0 || accumulated === 0} onClick={onClaim}>
        Claim all
      </button>
    </widget.Container>
  );
};

export default YourBonds;
