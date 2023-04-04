import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { ethers } from "hardhat";

const deployXENFlexContract: DeployFunction = async function (
    hre: HardhatRuntimeEnvironment
) {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const XenFlex = await ethers.getContractFactory("XenFlex");

    const xenflex = await XenFlex.deploy();
    console.log("*******************************************");
    console.log(`Deployed XENFlex to ${xenflex.address}`);
    console.log(`Owner address ${owner.address}`);
    console.log(`otherAccount address ${otherAccount.address}`);
};

export default deployXENFlexContract;

deployXENFlexContract.tags = ["all", "xenflex"];
