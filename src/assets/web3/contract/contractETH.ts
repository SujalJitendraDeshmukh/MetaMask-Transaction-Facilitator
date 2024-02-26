import { provider } from "@/assets/web3/Provider";
import toTransfer from "../../../hooks/toTransferETH";

const { getContractETH } = toTransfer();
const TransferTokenContract = getContractETH();

export const transferEther = async (to : string, amountInWei : string, account: string) => {
    try {
        const signer = provider.getSigner(account);
        console.log("Signer:", signer);
        const ttiwthSigner = TransferTokenContract.connect(signer);
        const tx = await ttiwthSigner.transferEther(to, {
            gasLimit: 300000,
            // gasPrice: ethers.utils.parseUnits("10", "wei"),
            value: amountInWei,
        });
        return tx.hash;
    } catch (error) {
        console.error("Error transferring ether:", error);
    }
};

