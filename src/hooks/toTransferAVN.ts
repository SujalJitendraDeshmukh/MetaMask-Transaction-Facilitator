import {ethers} from "ethers";
import {TokenTransferContactAddressAVN} from "@/assets/web3/Address";
import TransferTokensAbi from "@/assets/web3/Abis/TransferTokensAbi.json";
import { provider } from "@/assets/web3/Provider";

export default function toTransferAVN(){
    const getContractAVN = () => {
        const contractAVN = new ethers.Contract(
            TokenTransferContactAddressAVN,
            TransferTokensAbi,
            provider
        )
        return contractAVN;
    }

    return {
        getContractAVN
    }
}