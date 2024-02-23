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
    return(
        <div>
            <h1>
                This is the landing Page
            </h1>
            <h2>SignIn</h2>
            <SignInButton redirectUrl={"/dashboard"}></SignInButton>
            <h2>SignUp</h2>
            <SignUpButton redirectUrl={"/dashboard"}></SignUpButton>
        </div>
    )
}
