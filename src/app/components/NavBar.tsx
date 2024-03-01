'use client'

import { RootState } from "@/provider/redux/store";
import { useDispatch, useSelector } from 'react-redux';
import {SignInButton, SignUpButton, UserButton} from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
    const username = useSelector((state: RootState) => state.SetUsername.name);

    return (
        <div className="flex items-center justify-between bg-gray-800 text-white py-4 px-6">
            <div className="text-xl font-bold">Basic NavBar Structure</div>
            <div className="flex space-x-4">
                {username === "" ? (
                    <>
                        <SignInButton redirectUrl={"/dashboard"}></SignInButton>
                        <SignUpButton redirectUrl={"/dashboard"}></SignUpButton>
                    </>
                ) : (
                    <>
                        <Link href="/dashboard">Dashbaord</Link>
                        <Link href="/">LandingPage</Link>
                        <Link href="/soundBox">SoundBox</Link>
                        <Link href="/transfer">Transfer</Link>
                        <UserButton></UserButton>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
