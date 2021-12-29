import Header from "../Header";
import CustomHeader from "./Header";
import Whitelist, { WhitelistStatus } from "./Whitelist";
import UbiquiStick from "./UbiquiStick";
import FundingPools from "./FundingPools";
import MultiplicationPool from "./MultiplicationPool";
import YourBonds from "./YourBonds";
import Liquidate from "./Liquidate";

import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";

const App = () => {
  return (
    <div>
      <Header section="Launch Party" href="/launch-party" />
      <CustomHeader />
      <Whitelist status={"not-whitelisted"} />
      <UbiquiStick />
      <FundingPools />
      <MultiplicationPool />
      <YourBonds />
      <Liquidate accumulated={3500} />
    </div>
  );
};

export default App;