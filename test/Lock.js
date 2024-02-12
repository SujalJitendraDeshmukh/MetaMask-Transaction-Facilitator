const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("TransferTokens", () => {
  let transferTokens, transferTokensFactory;

  before(async () => {
    transferTokensFactory = await ethers.getContractFactory("TransferTokens");
    transferTokens = await transferTokensFactory.deploy();
    await transferTokens.waitForDeployment();
  });

  it("Checking the value of num variable", async () => {
    const currentValue = await transferTokens.checknum();
    expect(currentValue).to.equal(56);
  });

  it("Changing the value of num variable and then checking", async()=>{
    const val = 90;
    const transaction = await transferTokens.changeValue(val);
    await transaction.wait();
    const currentValue = await transferTokens.checknum();
    expect(currentValue).to.equal(90)
  })
});