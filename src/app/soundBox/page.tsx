"use client";

import { useDispatch, useSelector } from 'react-redux';
import {useEffect, useState} from "react";
import {formatEther} from "ethers/lib/utils";
import {Button} from "@mui/material";
import toTransferPolygon from "@/hooks/toTransferPolygon";
import {RootState} from "@/provider/redux/store";
import toTransferETH from "@/hooks/toTransferETH";
import toTransferBSC from "@/hooks/toTransferBSC";
import toTransferAVN from "@/hooks/toTransferAVN";
import Link from "next/link";
import {UserButton} from "@clerk/nextjs";
export default function soundBox(){

    const type = useSelector((state: RootState) => state.SetBlockchain.name);
    const address = useSelector((state: RootState) => state.SetAccount.name);

    const { getContractETH } = toTransferETH();
    const { getContractBSC } = toTransferBSC();
    const { getContractPolygon } = toTransferPolygon();
    const { getContractAVN } = toTransferAVN();


    let TransferTokenContract;
    const [filteredData, setFilteredData] = useState("");

    useEffect(()=>{
        if(type === 'ETH'){
            TransferTokenContract = getContractETH();
        } else if( type === 'BSC' ){
            TransferTokenContract = getContractBSC();
        } else if( type === 'AVL'){
            TransferTokenContract = getContractAVN();
        } else if( type === 'PLG'){
            TransferTokenContract = getContractPolygon()
        }
    },[type])
    // const { getContractPolygon } = toTransferPolygon();
    // const TransferTokenContract = getContract();
    // TransferTokenContract = getContractPolygon();
    const filter = TransferTokenContract.filters.Transfer(null, address);

    // TransferTokenContract.on("Transfer", (_from,_to,_amount,Event)=>{
    //     setData(`${_from} sent ${formatEther(_amount)} to ${_to}`);
    // })

    TransferTokenContract.on(filter, (_from,_to,_amount,Event)=>{
        setFilteredData(`${_from} sent ${formatEther(_amount)} to ${_to}`);
    })

    useEffect(() => {
        if (filteredData) {
            speak(filteredData);
        }
    }, [filteredData]);

    function speak(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        const voices = speechSynthesis.getVoices();
        utterance.voice = voices[0];
        speechSynthesis.speak(utterance);
    }

    return(
        <div>
            <Link href="/dashboard">Dashbaord</Link>
            <Link href="/">LandingPage</Link>
            <Link href="/soundBox">SoundBox</Link>
            <Link href="/transfer">Transfer</Link>
            <UserButton></UserButton>
            <h1>Only those events are captured whose address is there</h1>
            <p>{filteredData}</p>
        </div>
    )
}