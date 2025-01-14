import { BigNumber, ethers } from "ethers";
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { connectedContracts, Contracts } from "../../contracts";
import { UbiquityAlgorithmicDollarManager } from "../../contracts/dollar/artifacts/types";
import { accountBalances, Balances } from "../common/contracts-shortcuts";
import { EthAccount, Transaction } from "../common/types";

export interface ConnectedContext {
  manager: UbiquityAlgorithmicDollarManager | null;
  setManager: Dispatch<SetStateAction<UbiquityAlgorithmicDollarManager | null>>;
  provider: ethers.providers.Web3Provider | null;
  setProvider: Dispatch<SetStateAction<ethers.providers.Web3Provider | null>>;
  account: EthAccount | null;
  setAccount: Dispatch<SetStateAction<EthAccount | null>>;
  signer: ethers.providers.JsonRpcSigner | null;
  setSigner: Dispatch<SetStateAction<ethers.providers.JsonRpcSigner | null>>;
  balances: Balances | null;
  setBalances: Dispatch<SetStateAction<Balances | null>>;
  twapPrice: BigNumber | null;
  setTwapPrice: Dispatch<SetStateAction<BigNumber | null>>;
  contracts: Contracts | null;
  setContracts: Dispatch<SetStateAction<Contracts | null>>;
  activeTransactions: Transaction[];
  updateActiveTransaction: (transaction: Transaction) => void;
  refreshBalances: () => Promise<void>;
}

const ConnectedContext = createContext<ConnectedContext>({} as ConnectedContext);

interface Props {
  children: React.ReactNode;
}

export const ConnectedNetwork = (props: Props): JSX.Element => {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
  const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner | null>(null);
  const [manager, setManager] = useState<UbiquityAlgorithmicDollarManager | null>(null);
  const [account, setAccount] = useState<EthAccount | null>(null);
  const [balances, setBalances] = useState<Balances | null>(null);
  const [twapPrice, setTwapPrice] = useState<BigNumber | null>(null);
  const [contracts, setContracts] = useState<Contracts | null>(null);
  const [activeTransactions, setActiveTransactions] = useState<Transaction[]>([]);

  async function refreshBalances() {
    if (account && contracts) {
      setBalances(await accountBalances(account, contracts));
    }
  }

  function updateActiveTransaction(transaction: Transaction): void {
    let updated = false;
    updated = activeTransactions.some((existingTransaction, index) => {
      if (existingTransaction.id === transaction.id) {
        activeTransactions[index] = { ...activeTransactions[index], ...transaction };
        return true;
      }
    });

    const newActiveTransactions = updated ? [...activeTransactions] : [...activeTransactions, transaction];

    setActiveTransactions(newActiveTransactions);
  }

  const value: ConnectedContext = {
    provider,
    setProvider,
    signer,
    setSigner,
    manager,
    setManager,
    account,
    setAccount,
    balances,
    setBalances,
    twapPrice,
    setTwapPrice,
    contracts,
    setContracts,
    activeTransactions,
    updateActiveTransaction,
    refreshBalances,
  };

  useEffect(() => {
    (async function () {
      console.time("Connecting contracts");
      const { provider, contracts } = await connectedContracts();
      const signer = provider.getSigner();
      console.timeEnd("Connecting contracts");
      // logBondingUbqInfo(contracts);
      setSigner(signer);
      setProvider(provider);
      setContracts(contracts);
      setManager(contracts.manager);
      setTwapPrice(await contracts.twapOracle.consult(contracts.uad.address));
    })().catch((e) => {
      console.error({ e });
      // TODO: specific error handling
      alert("Dapp failed to load, make sure that you are connected to mainnet");
    });
  }, []);

  useEffect(() => {
    refreshBalances();
  }, [account, contracts]);

  return <ConnectedContext.Provider value={value}>{props.children}</ConnectedContext.Provider>;
};

export const useConnectedContext = (): ConnectedContext => useContext(ConnectedContext);

export type AnonContext = {
  contracts: Contracts;
  provider: ethers.providers.Web3Provider;
};

export type UserContext = {
  contracts: Contracts;
  provider: ethers.providers.Web3Provider;
  account: EthAccount;
  signer: ethers.providers.JsonRpcSigner;
};

export function useUserContractsContext(): UserContext | null {
  const { provider, account, signer, contracts } = useConnectedContext();
  if (provider && account && signer && contracts) {
    return { provider, account, signer, contracts };
  } else {
    return null;
  }
}

export function useAnonContractsContext(): AnonContext | null {
  const { provider, contracts } = useConnectedContext();
  if (provider && contracts) {
    return { provider, contracts };
  } else {
    return null;
  }
}

export function connectedWithUserContext<T>(El: (params: UserContext & T) => JSX.Element) {
  return (otherParams: T) => {
    const context = useUserContractsContext();
    return context ? <El {...context} {...otherParams} /> : null;
  };
}
