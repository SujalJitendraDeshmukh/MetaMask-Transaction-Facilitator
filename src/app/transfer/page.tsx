'use client'

import { useDispatch, useSelector } from 'react-redux';
import { UserButton, useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import {SetName, SetUsername} from "@/provider/redux/SetUsername";
import {RootState} from "@/provider/redux/store";
import Link from 'next/link';
import Button from "@mui/material/Button"
import { provider } from "@/assets/web3/Provider";
import {ChangeTxHash} from "@/provider/redux/SetTxHash";
import { transferEther } from '@/assets/web3/contract/contractETH';
import { transferBinance } from '@/assets/web3/contract/contractBSC';
import {transferAvalanche} from "@/assets/web3/contract/contractAVL";
import {transferPolygon} from "@/assets/web3/contract/contractPLG";
import TextField from '@mui/material/TextField';
import convertToUnits from "@/assets/web3/unitConverter";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {ChangeUnit} from "@/provider/redux/setUnit";
import {ChangeBlockchain} from "@/provider/redux/SetBlockchain";
import {ChangeRecipient, SetRecipient} from "@/provider/redux/SetRecipient";
import {ChangeAmount} from "@/provider/redux/SetAmount";

export default function Transfer() {
    const { isLoaded, isSignedIn, user } = useUser();
    const userName = useSelector((state: RootState) => state.SetUsername.name);
    const accountName = useSelector((state: RootState) => state.SetAccount.name);
    const firstName = useSelector((state: RootState) => state.SetFirstName.name);
    const lastName = useSelector((state: RootState) => state.SetLastName.name);
    const txHash = useSelector((state: RootState) => state.SetTxHash.name);
    const unit = useSelector((state: RootState) => state.SetUnit.name);
    const blockchain = useSelector((state: RootState) => state.SetBlockchain.name);
    const recipient = useSelector((state: RootState) => state.SetRecipient.name);
    const amount = useSelector((state: RootState) => state.SetAmount.amount);

    const dispatch = useDispatch();
    async function callContract(type: string, to: string, account: string, amount: number, unit: string) {
        try {
            let Hash : string;
            const convertedAmounts = convertToUnits(amount, unit);
            if (type==='ETH'){
                Hash = await transferEther(to, convertedAmounts, account);
                dispatch(ChangeTxHash(Hash));
            } else if (type==='BSC'){
                Hash = await transferBinance(to, convertedAmounts, account);
                dispatch(ChangeTxHash(Hash));
            } else if (type==='AVL'){
                Hash = await transferAvalanche(to, convertedAmounts, account);
                dispatch(ChangeTxHash(Hash));
            } else if (type === 'PLG'){
                Hash = await transferPolygon(to, convertedAmounts, account);
                dispatch(ChangeTxHash(Hash));
            }
        } catch (error) {
            console.error('Error transferring ether:', error);
        }
    }
    const handleUint = (event) => {
        dispatch(ChangeUnit(event.target.value));
    };
    const handleBlockChain = (event) => {
        dispatch(ChangeBlockchain(event.target.value));
    };

    const handleRecipient = (event) => {
        dispatch(ChangeRecipient(event.target.value));
    };

    const handleAmount = (event) => {
        dispatch(ChangeAmount(event.target.value));
    };

    const handleTransfer = async () => {
        try {
            await callContract(blockchain, recipient,accountName, amount, unit);
        } catch (error) {
            console.error('Error calling contract:', error);
        }
    }

    return (
        <div>
            <h1>This will be the transfer Page</h1>
            <Link href="/dashboard">Dashbaord</Link>
            <div style={{ marginBottom: '20px' }}>
                <TextField id="RepicientAddress" label="Transfer To" variant="standard" onChange={handleRecipient}/>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <TextField id="AmountToTransfer" label="Amount" variant="standard" onChange={handleAmount} value={amount}/>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <FormControl fullWidth>
                    <InputLabel id="Blockchain">Blockchain</InputLabel>
                    <Select
                        labelId="Select Blockchain"
                        id="SelectBlockchain"
                        value={blockchain}
                        label="Blockchain"
                        onChange={handleBlockChain}
                    >
                        <MenuItem value={"AVL"}>Avalanche</MenuItem>
                        <MenuItem value={"BSC"}>BNB Smart Chain</MenuItem>
                        <MenuItem value={"ETH"}>Ethereum</MenuItem>
                        <MenuItem value={"PLG"}>Polygon</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <FormControl fullWidth>
                    <InputLabel id="Unit">Unit</InputLabel>
                    <Select
                        labelId="Select Unit"
                        id="UnitSelection"
                        value={unit}
                        label="Blockchain"
                        onChange={handleUint}
                    >
                        <MenuItem value={"wei"}>Wei</MenuItem>
                        <MenuItem value={"gwei"}>Gwei</MenuItem>
                        <MenuItem value={"shannon"}>Shannon</MenuItem>
                        <MenuItem value={"ether"}>Ether</MenuItem>
                        <MenuItem value={"finney"}>Finney</MenuItem>
                        <MenuItem value={"szabo"}>Szabo</MenuItem>
                        <MenuItem value={"kwei"}>Kwei</MenuItem>
                        <MenuItem value={"ada"}>Ada</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <Button onClick={handleTransfer}>Transfer</Button>
            </div>
            <div>
                <p>{unit}</p>
                <p>{blockchain}</p>
                <p>{recipient}</p>
                <p>{amount}</p>
                <p>{txHash}</p>
            </div>
        </div>
    );
}
