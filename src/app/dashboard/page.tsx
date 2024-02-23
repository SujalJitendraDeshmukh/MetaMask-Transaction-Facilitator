'use client'

import Image from "next/image";
import {SignUpButton, UserButton, SignInButton, useUser} from "@clerk/nextjs";
import { useSelector, useDispatch } from 'react-redux'
import {RootState} from "@/provider/redux/store";
import {SetName} from "@/provider/redux/SetUsername";
import {useEffect} from "react";
import {ChangeFirstName} from "@/provider/redux/SetFirstName";
import {ChangeLastName} from "@/provider/redux/SetLastName";
import {ChangeAccount} from "@/provider/redux/SetAccount";
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function Dashboard() {

    const { isLoaded, isSignedIn, user } = useUser();
    const Username = useSelector((state: RootState) => state.SetUsername.name);
    const FirstName = useSelector((state: RootState) => state.SetFirstName.name);
    const LastName = useSelector((state: RootState) => state.SetLastName.name);
    const AccountName = useSelector((state: RootState) => state.SetAccount.name);

    const dispatch = useDispatch();

    const connectMetaMask = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                dispatch(ChangeAccount(accounts[0]))
            } catch (error) {
                console.error(error);
            }
        } else {
            alert("MetaMask extension not detected!");
        }
    };

    useEffect(() => {
        if (isLoaded && isSignedIn) {
            dispatch(SetName(user?.username));
            dispatch(ChangeFirstName(user?.firstName));
            dispatch(ChangeLastName(user?.lastName));
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
            <h2>Account</h2>
            <p>{AccountName}</p>
            {/*<div>*/}
            {/*    <h1> Sign up </h1>*/}
            {/*    <SignUpButton/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <h1> Sign In </h1>*/}
            {/*    <SignInButton/>*/}
            {/*</div>*/}
            <UserButton></UserButton>
            <Button onClick={connectMetaMask}>Connect Metamask</Button>
            <Link href="/transfer">Transfer</Link>
        </div>
    );
}
