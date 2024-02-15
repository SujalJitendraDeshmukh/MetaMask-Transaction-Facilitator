"use client";

import toTransfer from "@/hooks/toTransfer";
import {useEffect, useState} from "react";
import {formatEther} from "ethers/lib/utils";
import {Button} from "@mui/material";

export default function soundCloud(){
    const [ data, setData] = useState(null);
    const [address, setAddress] = useState("0xd8A6BFc168C67c56173E6EbA194fD0eB9E0e5D39");
    const [filteredData, setFilteredData] = useState("This is the filtered Data");

    const { getContract } = toTransfer();
    const TransferTokenContract = getContract();
    const filter = TransferTokenContract.filters.Transfer(null, address);

    TransferTokenContract.on("Transfer", (_from,_to,_amount,Event)=>{
        setData(`${_from} sent ${formatEther(_amount)} to ${_to}`);
    })

    TransferTokenContract.on(filter, (_from,_to,_amount,Event)=>{
        setFilteredData(`${_from} sent ${formatEther(_amount)} to ${_to}`);
    })

    useEffect(() => {
        if (data) {
            speak(data);
        }
    }, [data]);

    function speak(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        const voices = speechSynthesis.getVoices();
        utterance.voice = voices[0];
        speechSynthesis.speak(utterance);
    }

    return(
        <div>
            <h1>All the Events are captured</h1>
            <p>{data}</p>
            <h1>Only those events are captured whose address is there</h1>
            <p>{filteredData}</p>
        </div>
    )
}