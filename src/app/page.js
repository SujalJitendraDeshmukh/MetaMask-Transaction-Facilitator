import {Button} from "@mui/material";
import { ethers } from "ethers";
import fs from "fs";
import path from "path";
require("dotenv").config();

export default function Home() {
    const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
    const compiledContract = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./Abi/contracts_TransferTokens_sol_TransferTokens.abi"), "utf8"));
    const contractABI = compiledContract;
    const contractAddress = "0x3072e8A9eB5fa30ac52BF12e8C2eBF5f09178649";
    const provider = new ethers.providers.JsonRpcProvider(SEPOLIA_RPC_URL);
    const signer = provider.getSigner("0xfB43419929FA1DeDF67B51252Eb734844c3f52D0")

  return (
      <div>
          <h1>Hey this is the heading</h1>
          <form>
            <input type={"text"} placeholder={"Enter Sender's Address"}/>
            <input type={"text"} placeholder={"Enter Reciever's Address"}/>
            <input type={"number"} placeholder={"Enter the Amount"}/>
              <Button variant="text">Transfer</Button>
          </form>
      </div>
  );
}
