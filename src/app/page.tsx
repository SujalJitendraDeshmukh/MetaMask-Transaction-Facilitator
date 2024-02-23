'use client'

import Image from "next/image";
import {SignUpButton, UserButton, SignInButton, useUser} from "@clerk/nextjs";
import { useSelector, useDispatch } from 'react-redux'
import {RootState} from "@/provider/redux/store";
import {SetName} from "@/provider/redux/SetUsername";
import {useEffect} from "react";
import {ChangeFirstName} from "@/provider/redux/SetFirstName";
import {ChangeLastName} from "@/provider/redux/SetLastName";

export default function Home() {

    const { isLoaded, isSignedIn, user } = useUser();
    const Username = useSelector((state: RootState) => state.SetUsername.name);
    const FirstName = useSelector((state: RootState) => state.SetFirstName.name);
    const LastName = useSelector((state: RootState) => state.SetLastName.name);
    const dispatch = useDispatch();

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
        <div>
            <h1> Sign up </h1>
            <SignUpButton/>
        </div>
        <div>
            <h1> Sign In </h1>
            <SignInButton/>
        </div>
    </div>
  );
}
