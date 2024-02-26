'use client'

import Image from "next/image";
import {SignUpButton, UserButton, SignInButton, useUser} from "@clerk/nextjs";
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from "@/provider/redux/store";
import {SetName} from "@/provider/redux/SetUsername";
import {FC, use, useEffect,useMemo,useState} from "react";
import {ChangeFirstName} from "@/provider/redux/SetFirstName";
import {ChangeLastName} from "@/provider/redux/SetLastName";
import { Piechart } from "./Components/Piechart";
import { provider } from "@/assets/web3/Provider";
import dotenv from "dotenv";
import { userAddress } from "@/assets/web3/userAddress";
// import { EthereumChart } from "./Components/Chart";



export default function Dashboard() {
dotenv.config();
    //Get eth to usd price

        //call this function to get the price of eth in usd



    const { isLoaded, isSignedIn, user } = useUser();
    const Username = useSelector((state: RootState) => state.SetUsername.name);
    const FirstName = useSelector((state: RootState) => state.SetFirstName.name);
    const LastName = useSelector((state: RootState) => state.SetLastName.name);
    const [ETHinUSD,setETHinUSD] = useState(0);
    const dispatch = useDispatch();
    const [address,setAddress] = useState("");
    useMemo(() => {
        if (isLoaded && isSignedIn) {
            userAddress().then((address) => {
                setAddress(address);
            });
            dispatch(SetName(user?.username));
            dispatch(ChangeFirstName(user?.firstName));
            dispatch(ChangeLastName(user?.lastName));
            fetch('https://api.coinbase.com/v2/prices/ETH-USD/spot').then(response => response.json()).then(data =>setETHinUSD(data.data.amount));
        }   
    }, [isLoaded, isSignedIn, user, dispatch]);

    if (!isLoaded || !isSignedIn) {
        return null;
    }

    return (
        <div>
            <h1>State Check</h1>
            <h2>Username</h2>
            <p>{Username}</p>
            <h2>First Name</h2>
            <p>{FirstName}</p>
            <h2>Last Name</h2>
            <p>{LastName}</p>
            {/*<div>*/}
            {/*    <h1> Sign up </h1>*/}
            {/*    <SignUpButton/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <h1> Sign In </h1>*/}
            {/*    <SignInButton/>*/}
            {/*</div>*/}
            <UserButton></UserButton>
            {address}
            <Piechart/>
            {ETHinUSD}
            <div>
            <button
                onClick={() => {fetch(`https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=100&sort=asc&apikey=${process.env.ETHER_URL}`).
                then(response => response.json())
                .then(data => console.log(data))}}>
                    Get Transactions
            </button>
            {/* <EthereumChart></EthereumChart> */}
            

            </div>

        </div>
    );
}
