"use client";

import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { provider } from "@/assets/web3/Provider";
import { ethers } from "ethers";
import toTransfer from "@/hooks/toTransfer";
import toTransferAVN from "@/hooks/toTransferAVN";
import toTransferPolygon from "@/hooks/toTransferPolygon";
import toTransferBSC from "@/hooks/toTransferBSC";
export default function Home() {
  const [blockNumber, setBlockNumber] = useState(null);
  const [name, setName] = useState(null);
  const [txHash, setTxHash] = useState(null);
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const { getContract } = toTransfer();
  const { getContractAVN } = toTransferAVN();
  const { getContractPolygon } = toTransferPolygon();
  const { getContractBSC } = toTransferBSC();

  const amountInWei = ethers.utils.parseUnits("1.0", "wei"); //This is to set amount in wei
  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        setIsConnected(true);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("MetaMask extension not detected!");
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", () => {
        window.location.reload();
      });
    }
  }, []);

  // const TransferTokenContract = getContract();
  // const TransferTokenContract = getContractAVN();
  // const TransferTokenContract = getContractPolygon();
  const TransferTokenContract = getContractBSC();

  const fetchBlockNumber = async () => {
    try {
      const num = await provider.getBlockNumber();
      setBlockNumber(num);
    } catch (error) {
      console.error("Error fetching block number:", error);
    }
  };

  const setMyName = async () => {
    try {
      const myName = await TransferTokenContract.check();
      setName(myName);
    } catch (error) {
      console.error("Error fetching name:", error);
    }
  };
  const transferEther = async (to, amountInWei) => {
    try {
      const signer = provider.getSigner(account);
      console.log("Signer:", signer);
      const ttiwthSigner = TransferTokenContract.connect(signer);
      const tx = await ttiwthSigner.transferEther(to, {
        gasLimit: 300000,
        // gasPrice: ethers.utils.parseUnits("10", "wei"),
        value: amountInWei,
      });
      setTxHash(tx.hash);
    } catch (error) {
      console.error("Error transferring ether:", error);
    }
  };

  return (
    <div>
      <h1>Hey this is the heading</h1>
      <form>
        <input type={"text"} placeholder={"Enter Recipient's Address"} />
        <input type={"number"} placeholder={"Enter the Amount"} />
      </form>
      <div>
        <h1>This is gonna be the block number</h1>
        <Button onClick={fetchBlockNumber}>Set Block Number</Button>
        {blockNumber}
        <h1>This is gonna be my name</h1>
        <Button onClick={setMyName}>Fetch Name</Button>
        {name}
        <h1>Send Transaction</h1>
        <Button
          variant="text"
          onClick={() =>
            transferEther("0xd8A6BFc168C67c56173E6EbA194fD0eB9E0e5D39",amountInWei)
          }
        >
          Transfer
        </Button>
        {txHash}
        {!isConnected ? (
          <button onClick={connectMetaMask}>Connect MetaMask</button>
        ) : (
          <div>
            <p>Connected with MetaMask</p>
            <p>Account: {account}</p>
          </div>
        )}
      </div>
    </div>
  );
}
