import {ethers} from "ethers";
import { TransferTokenContractAddressArbitrum } from "@/assets/web3/Address";
import TransferTokensAbi from "@/assets/web3/Abis/TransferTokensAbi.json";
import { provider } from "@/assets/web3/Provider";

export default function toTransferArbitrum(){
    const getContractArbitrum = () => {
        const contractArbitrum = new ethers.Contract(
            TransferTokenContractAddressArbitrum,
            TransferTokensAbi,
            provider
        )
        return contractArbitrum;
    }

    return {
        getContractArbitrum
    }
}