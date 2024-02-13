const { ethers } = require("hardhat");

async function main() {
  try {
    const TransferTokensFactory = await ethers.getContractFactory("TransferTokens");
    console.log("Deploying Contract ...");
    const TransferToken = await TransferTokensFactory.deploy();
    await TransferToken.waitForDeployment();
    const address = await TransferToken.getAddress();
    console.log(`Deployed Contract to: ${address}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main().then(() => process.exit(0));