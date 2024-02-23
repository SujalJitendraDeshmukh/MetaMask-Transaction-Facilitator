'use client'

import { useDispatch, useSelector } from 'react-redux';
import { UserButton, useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import {SetName, SetUsername} from "@/provider/redux/SetUsername";
import {RootState} from "@/provider/redux/store";
import Link from 'next/link';

export default function Transfer() {
    const { isLoaded, isSignedIn, user } = useUser();
    const state = useSelector((state: RootState) => state.SetUsername.name);
    const dispatch = useDispatch();

    if (!isLoaded || !isSignedIn) {
        return null;
    }

    return (
        <div>
            <h1>This page will be used for transferring</h1>
            {user?.username}
            {/*<UserButton />*/}
            <div>
                <button onClick={()=>dispatch(SetName(user?.username))}>Change Name</button>
            </div>
            <div>
                {state}
            </div>
            <Link href="/">Dashboard</Link>
        </div>
    );
}
