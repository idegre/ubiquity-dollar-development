import { ethers, ContractTransaction, BigNumber } from "ethers";
import { ERC1155Ubiquity } from "../../contracts/dollar/artifacts/types";
import { useEffect } from "react";
import { EthAccount } from "./types";

export function logGas(txDone: ethers.ContractReceipt) {
  console.log(`Gas used with 100 gwei / gas:${ethers.utils.formatEther(txDone.gasUsed.mul(ethers.utils.parseUnits("100", "gwei")))}`);
}

export function useAsyncInit(cb: () => Promise<unknown>) {
  useEffect(() => {
    (async () => {
      await cb();
    })();
  }, []);
}

export async function performTransaction(transaction: Promise<ContractTransaction>) {
  try {
    const tx = await transaction;
    const txR = await tx.wait();
    logGas(txR);
    return true;
  } catch (e) {
    console.error("Transaction error", e);
  }
  return false;
}

export async function erc1155BalanceOf(addr: string, erc1155UbiquityCtr: ERC1155Ubiquity): Promise<BigNumber> {
  const treasuryIds = await erc1155UbiquityCtr.holderTokens(addr);

  const balanceOfs = treasuryIds.map((id) => {
    return erc1155UbiquityCtr.balanceOf(addr, id);
  });
  const balances = await Promise.all(balanceOfs);
  let fullBalance = BigNumber.from(0);
  if (balances.length > 0) {
    fullBalance = balances.reduce((prev, cur) => {
      return prev.add(cur);
    });
  }
  return fullBalance;
}

export const constrainNumber = (num: number, min: number, max: number): number => {
  if (num < min) return min;
  else if (num > max) return max;
  else return num;
};

export const getNetworkName = (provider: ethers.providers.Web3Provider): string => {
  let networkName = "";
  switch (provider.network.chainId) {
    case 1:
      networkName = "Mainnet";
      break;
    case 3:
      networkName = "Ropsten Test Network";
      break;
    case 4:
      networkName = "Rinkeby Test Network";
      break;
    case 5:
      networkName = "Goerli Test Network";
      break;
    case 42:
      networkName = "Kovan Test Network";
      break;
    default:
      networkName = "Unknown Network";
      break;
  }
  return networkName;
};

export const formatTimeDiff = (diff: number) => {
  const day = 24 * 60 * 60 * 1000;
  const hour = 60 * 60 * 1000;
  const minute = 60 * 1000;
  const second = 1000;
  const days = Math.ceil(diff / day);
  if (days > 1) {
    return `${days} days`;
  }
  const hours = Math.ceil(diff / hour);
  if (hours > 1) {
    return `${hours} hours`;
  }
  const minutes = Math.ceil(diff / minute);
  if (minutes > 1) {
    return `${minutes} minutes`;
  }
  const seconds = Math.ceil(diff / second);
  return `${seconds} seconds`;
};

export async function fetchAccount(): Promise<EthAccount | null> {
  const ethereum = (window as any).ethereum;
  if (ethereum?.request) {
    return {
      address: ((await ethereum.request({
        method: "eth_requestAccounts",
      })) as string[])[0],
      balance: 0,
    };
  } else {
    alert("MetaMask is not installed!");
    console.error("MetaMask is not installed, cannot connect wallet");
    return null;
  }
}
