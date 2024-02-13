"use client"

import {Button} from "@mui/material";
import { ethers } from "ethers";
import dotenv from "dotenv";
import {useEffect, useState} from "react";

dotenv.config();

export default function Home() {
    const [blockNumber, setBlockNumber] = useState(null);

    console.log(__dirname);
    // const compiledContract = JSON.parse(fs.readFileSync(filePath, "utf8"));
    // const contractABI = compiledContract.abi;
    const contractAddress = "0x3072e8A9eB5fa30ac52BF12e8C2eBF5f09178649";
    const provider = new ethers.providers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/WBdGDtGfarFaZsi7KwpVLBJWSICKBol4");
    const signer = provider.getSigner("0xfB43419929FA1DeDF67B51252Eb734844c3f52D0")

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
