'use client';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { formatEther } from "ethers/lib/utils";
import { Button } from "@mui/material";
import toTransferPolygon from "@/hooks/toTransferPolygon";
import { RootState } from "@/provider/redux/store";
import toTransferETH from "@/hooks/toTransferETH";
import toTransferBSC from "@/hooks/toTransferBSC";
import toTransferAVN from "@/hooks/toTransferAVN";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function SoundBox() {
    const type = useSelector((state: RootState) => state.SetBlockchain.name);
    const address = useSelector((state: RootState) => state.SetAccount.name);

    const [filteredData, setFilteredData] = useState("");

    useEffect(() => {
        if (type === 'ETH') {
            const { getContractETH } = toTransferETH();
            const TransferTokenContract = getContractETH();
            const filter = TransferTokenContract.filters.Transfer(null, address);
            TransferTokenContract.on(filter, (_from,_to,_amount,Event)=>{
                setFilteredData(`${_from} sent ${formatEther(_amount)} to ${_to}`);
            })
        } else if (type === 'BSC') {
            const { getContractBSC } = toTransferBSC();
            const TransferTokenContract = getContractBSC();
            const filter = TransferTokenContract.filters.Transfer(null, address);
            TransferTokenContract.on(filter, (_from,_to,_amount,Event)=>{
                setFilteredData(`${_from} sent ${formatEther(_amount)} to ${_to}`);
            })
        } else if (type === 'AVL') {
            const { getContractAVN } = toTransferAVN();
            const TransferTokenContract = getContractAVN();
            const filter = TransferTokenContract.filters.Transfer(null, address);
            TransferTokenContract.on(filter, (_from,_to,_amount,Event)=>{
                setFilteredData(`${_from} sent ${formatEther(_amount)} to ${_to}`);
            })
        } else if (type === 'PLG') {
            const { getContractPolygon } = toTransferPolygon();
            const TransferTokenContract = getContractPolygon();
            const filter = TransferTokenContract.filters.Transfer(null, address);
            TransferTokenContract.on(filter, (_from,_to,_amount,Event)=>{
                setFilteredData(`${_from} sent ${formatEther(_amount)} to ${_to}`);
            })
        }
    }, [type, address]);

    useEffect(() => {
        if (filteredData) {
            speak(filteredData);
        }
    }, [filteredData]);

    function speak(text : string) {
        const utterance = new SpeechSynthesisUtterance(text);
        const voices = speechSynthesis.getVoices();
        utterance.voice = voices[0];
        speechSynthesis.speak(utterance);
    }

    return(
        <div>
            <h1>Only those events are captured whose address is there</h1>
            <p>{filteredData}</p>
        </div>
    )
}
