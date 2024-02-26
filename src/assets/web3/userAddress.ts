import { provider } from "./Provider";

export const userAddress = async () => {
    const accounts = await provider.listAccounts();
    return accounts[0];
}