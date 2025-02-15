import { FC } from "react";
import { BigNumber, ethers } from "ethers";
import { useConnectedContext } from "../components/context/connected";
import BondingMigrate from "../components/bonding.migrate";
import DollarPrice from "../components/DollarPrice";
import UarRedeem from "../components/uar.redeem";
import DebtCouponDeposit from "../components/debtCoupon.deposit";
import DebtCouponRedeem from "../components/debtCoupon.redeem";
import * as widget from "../components/ui/widget";

const PriceStabilization: FC = (): JSX.Element => {
  const context = useConnectedContext();
  const { account, balances, twapPrice } = context;

  return account ? (
    <widget.Container>
      <widget.Title text="Price Stabilization" />
      <DollarPrice />
      <BondingMigrate />
      {balances?.uar.gt(BigNumber.from(0)) && twapPrice?.gte(ethers.utils.parseEther("1")) ? <UarRedeem /> : ""}
      {twapPrice?.lte(ethers.utils.parseEther("1")) ? <DebtCouponDeposit /> : ""}
      {balances?.debtCoupon.gt(BigNumber.from(0)) ? <DebtCouponRedeem /> : ""}
    </widget.Container>
  ) : (
    widget.WalletNotConnected
  );
};

export default PriceStabilization;
