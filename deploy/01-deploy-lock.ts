import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { ethers } from "hardhat";
import { time } from "@nomicfoundation/hardhat-network-helpers";

const deployLockContract: DeployFunction = async function (
    hre: HardhatRuntimeEnvironment
) {
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    const ONE_GWEI = 1_000_000_000;

    const lockedAmount = ONE_GWEI;
    const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Lock = await ethers.getContractFactory("Lock");
    const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

    console.log(`Deployed lock to ${lock.address}`);
    console.log(`Owner address ${owner.address}`);
    console.log(`otherAccount address ${otherAccount.address}`);
};

export default deployLockContract;

deployLockContract.tags = ["all", "lock"];
