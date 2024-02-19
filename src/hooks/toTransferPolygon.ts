import {ethers} from "ethers";
import { TokenTransferContactAddressPolygon } from "@/assets/web3/Address";
import TransferTokensAbi from "@/assets/web3/Abis/TransferTokensAbi.json";
import { provider } from "@/assets/web3/Provider";

export default function toTransferPolygon(){
    const getContractPolygon = () => {
        const contractPolygon = new ethers.Contract(
            TokenTransferContactAddressPolygon,
            TransferTokensAbi,
            provider
        )
        return contractPolygon;
    }

    return {
        getContractPolygon
    }
}