import {ethers} from "ethers";
import { TokenTransferContactAddressBSC } from "@/assets/web3/Address";
import TransferTokensAbi from "@/assets/web3/Abis/TransferTokensAbi.json";
import { provider } from "@/assets/web3/Provider";

export default function toTransferBSC(){
    const getContractBSC = () => {
        const contractBSC = new ethers.Contract(
            TokenTransferContactAddressBSC,
            TransferTokensAbi,
            provider
        )
        return contractBSC;
    }

    return {
        getContractBSC
    }
}