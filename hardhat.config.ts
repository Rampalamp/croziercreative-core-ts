import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";

const LOCALHOST_RPC_URL =
    process.env.LOCALHOST_RPC_URL || "http://127.0.0.1:8545/";

const config: HardhatUserConfig = {
    networks: {
        hardhat: {
            chainId: 31337,
            allowUnlimitedContractSize: true,
            // mining: {
            //     auto: false,
            //     interval: 20000,
            // },
        },
        localhost: {
            chainId: 31337,
            url: LOCALHOST_RPC_URL,
            allowUnlimitedContractSize: true,
            // mining: {
            //     auto: false,
            //     interval: 20000,
            // },
        },
    },
    solidity: "0.8.17",
};

export default config;
