import {Button} from "@mui/material";
import { ethers } from "ethers";
import fs from "fs";
import path from "path";

export default function Home() {
    const contractABI = [
        "function transferEther(address payable _to, uint256 _amount) external payable"
    ];
    const contractAddress = "YOUR_CONTRACT_ADDRESS";
    const provider = new ethers.Provider.JsonRpcProvider("YOUR_JSON_RPC_PROVIDER_URL");

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
