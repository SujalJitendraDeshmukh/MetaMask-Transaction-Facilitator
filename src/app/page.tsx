'use client'

import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { useSelector } from 'react-redux'
import {RootState} from "@/provider/redux/store";

export default function Home() {

    const state = useSelector((state: RootState) => state.SetUsername.username);

  return (
    <div>
      <h1>State Check</h1>
        {state}
    </div>
  );
}
