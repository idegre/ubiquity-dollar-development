import { task, types } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import pressAnyKey from "../utils/flow";
import EthDater from "ethereum-block-by-date"
import moment from "moment";
import { fetchEtherscanApi } from "../utils/etherscan";
import { UbiquityAlgorithmicDollarManager } from "../artifacts/types/UbiquityAlgorithmicDollarManager";
import { UbiquityAlgorithmicDollar } from "../artifacts/types/UbiquityAlgorithmicDollar";
import { BigNumber } from "ethers";

const CONSTANTS = {
    MAX_REWARD: 1.5,
    MAX_MONTHS: 24,
    TIME_PERIOD: 1
}

interface PartnersFile {
    partners: {
        addr: string,
        referencePercentage: number;
        // contractStart: string;
    }[]
    supply: { blockNumber: number, supply: BigNumber }[]
}

const amountToDistribute = (refPercentage: number, outstandingTokens: number): number => (refPercentage * CONSTANTS.TIME_PERIOD * outstandingTokens) / CONSTANTS.MAX_MONTHS

task("distribute", "Distributes governance tokens with capital partners")
    // .addParam<string>('partners', 'json containing partners information', undefined, types.inputFile, false)
    .setAction(async ({ partners }, { ethers, getNamedAccounts }) => {
        const currentBlockNumber = await ethers.provider.getBlockNumber();
        const dater = new EthDater(ethers.provider)
        // const { ubq } = await getNamedAccounts();
        const manager = (await ethers.getContractAt(
            "UbiquityAlgorithmicDollarManager",
            "0x4DA97a8b831C345dBe6d16FF7432DF2b7b776d98" // this probably doesnt work on rickerby
        )) as UbiquityAlgorithmicDollarManager;
        const uADAdr = await manager.dollarTokenAddress();

        const uAD = (await ethers.getContractAt(
            "UbiquityAlgorithmicDollar",
            uADAdr
        )) as UbiquityAlgorithmicDollar;
        const { block: previousBlockNumber } = await dater.getDate(moment().startOf('month').format('YYYY-MM-DD hh:mm')) // this can eventually be generalized beyond a month
        const blocksPassed = currentBlockNumber - previousBlockNumber;
        const currentSupply = await uAD.totalSupply()
        const outstandingTokens = currentSupply.sub(currentBlockNumber * CONSTANTS.MAX_REWARD)
        console.log(currentSupply.toString(), outstandingTokens.toString())
        if (partners === undefined) throw ('A partner JSON is required')
        const { partners: partnersArr } = require(partners) as PartnersFile;

        await pressAnyKey("Press any key if you are sure you want to continue ...");
    });
