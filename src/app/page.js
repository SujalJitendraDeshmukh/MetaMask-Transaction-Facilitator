"use client"

import {Button} from "@mui/material";
import { ethers } from "ethers";
import {useEffect, useState} from "react";
import TransferTokensAbi from '@/assets/web3/Abis/TransferTokensAbi.json';
import {AlchemySepoliaProvider} from "@/assets/web3/Provider";
import {TokenTransferContractAddress} from "@/assets/web3/Address";
export default function Home() {
    const [blockNumber, setBlockNumber] = useState(null);

    console.log(__dirname);
    const provider = new ethers.providers.JsonRpcProvider(AlchemySepoliaProvider);
    const signer = provider.getSigner("0xfB43419929FA1DeDF67B51252Eb734844c3f52D0")

    const TransferTokenContract = new ethers.Contract(TokenTransferContractAddress, TransferTokensAbi, provider);

        const fetchBlockNumber = async () => {
            try {
                const num = await provider.getBlockNumber();
                setBlockNumber(num);
            } catch (error) {
                console.error('Error fetching block number:', error);
            }
    }



  return (
      <div>
          <h1>Hey this is the heading</h1>
          <form>
            <input type={"text"} placeholder={"Enter Sender's Address"}/>
            <input type={"text"} placeholder={"Enter Reciever's Address"}/>
            <input type={"number"} placeholder={"Enter the Amount"}/>
              <Button variant="text">Transfer</Button>
          </form>
          <div>
              <h1>This is gonna be the block number</h1>
              <Button onClick={fetchBlockNumber}>Set Block Number</Button>
              {blockNumber}
          </div>
      </div>
  );
}
