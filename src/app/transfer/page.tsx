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

export default function Transfer() {
    const { isLoaded, isSignedIn, user } = useUser();
    const userName = useSelector((state: RootState) => state.SetUsername.name);
    const accountName = useSelector((state: RootState) => state.SetAccount.name);
    const firstName = useSelector((state: RootState) => state.SetFirstName.name);
    const lastName = useSelector((state: RootState) => state.SetLastName.name);
    const txHash = useSelector((state: RootState) => state.SetTxHash.name);
    const unit = useSelector((state: RootState) => state.SetUnit.name);
    const blockchain = useSelector((state: RootState) => state.SetUnit.name);

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

    return (
        <div>
            <h1>This will be the transfer Page</h1>
            <Link href="/dashboard">Dashbaord</Link>
            <div style={{ marginBottom: '20px' }}>
                <TextField id="standard-basic" label="Transfer To" variant="standard" />
            </div>
            <div style={{ marginBottom: '20px' }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
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
                    <InputLabel id="demo-simple-select-label">Unit</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={unit}
                        label="Blockchain"
                        onChange={handleUint}
                    >
                        <MenuItem value={"AVL"}>Avalanche</MenuItem>
                        <MenuItem value={"BSC"}>BNB Smart Chain</MenuItem>
                        <MenuItem value={"ETH"}>Ethereum</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    );
}
