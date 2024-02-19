'use client'

import { useDispatch } from 'react-redux';
import { UserButton, useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { ChangeUsername } from "@/provider/redux/SetUsername";

export default function Transfer() {
    const { isLoaded, isSignedIn, user } = useUser();
    const dispatch = useDispatch();

    const changeUsernameHandler = () => {
        if (isLoaded && isSignedIn && user) {
            console.log(user.username);
            dispatch(ChangeUsername());
        }
    };

    useEffect(() => {
        changeUsernameHandler();
    }, [isLoaded, isSignedIn, user, dispatch]);

    if (!isLoaded || !isSignedIn) {
        return null;
    }

    return (
        <div>
            <h1>This page will be used for transferring</h1>
            {user?.username}
            <UserButton />
        </div>
    );
}
