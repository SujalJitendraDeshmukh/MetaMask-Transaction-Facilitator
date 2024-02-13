"use client"

import { Button } from "@mui/material";
import { useState } from "react";
import TransferTokensAbi from '@/assets/web3/Abis/TransferTokensAbi.json';
import { AlchemySepoliaProvider } from "@/assets/web3/Provider";
import { TokenTransferContractAddress } from "@/assets/web3/Address";
import { ethers } from "ethers";

export default function Home() {
    const [blockNumber, setBlockNumber] = useState(null);
    const [name, setName] = useState(null);
    const [txHash, setTxHash] = useState(null);

    const provider = new ethers.providers.JsonRpcProvider(AlchemySepoliaProvider);
    const signer = provider.getSigner("0xfB43419929FA1DeDF67B51252Eb734844c3f52D0")
    console.log(signer);

    const TransferTokenContract = new ethers.Contract(TokenTransferContractAddress, TransferTokensAbi, provider);

    const fetchBlockNumber = async () => {
        try {
            const num = await provider.getBlockNumber();
            setBlockNumber(num);
        } catch (error) {
            console.error('Error fetching block number:', error);
        }
    }

    const setMyName = async () => {
        try {
            const myName = await TransferTokenContract.check();
            setName(myName);
        } catch (error) {
            console.error('Error fetching name:', error);
        }
    }

    const transferEther = async (to, amount) => {
        try {
            const ttiwthSigner = TransferTokenContract.connect(signer);
            const Wei = ethers.utils.parseUnits("1.0", 18);
            const tx = ttiwthSigner.transferEther(to,amount);
            setTxHash(tx);
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
                <Button variant="text" onClick={() => transferEther("0xd8A6BFc168C67c56173E6EbA194fD0eB9E0e5D39", 1)}>Transfer</Button>
                {txHash}
            </div>
        </div>
    );
}
