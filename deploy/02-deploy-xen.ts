import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { ethers } from "hardhat";

const deployXENContract: DeployFunction = async function (
    hre: HardhatRuntimeEnvironment
) {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Math = await ethers.getContractFactory("Math");
    const math = await Math.deploy();
    console.log("*******************************************");
    console.log(`Deployed math to ${math.address}`);
    console.log(`Owner address ${owner.address}`);
    console.log(`otherAccount address ${otherAccount.address}`);

    const Xen = await ethers.getContractFactory("XENCrypto", {
        libraries: {
            Math: math.address,
        },
    });

    const xen = await Xen.deploy();
    console.log("*******************************************");
    console.log(`Deployed XEN to ${xen.address}`);
    console.log(`Owner address ${owner.address}`);
    console.log(`otherAccount address ${otherAccount.address}`);
};

export default deployXENContract;

deployXENContract.tags = ["all", "xen"];
