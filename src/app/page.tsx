'use client'

import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { useSelector, useDispatch } from 'react-redux'
import {RootState} from "@/provider/redux/store";
import {SetName} from "@/provider/redux/SetUsername";

export default function Home() {

    const state = useSelector((state: RootState) => state.SetUsername.name);

  return (
    <div>
      <h1>State Check</h1>
            <p>{state}</p>
    </div>
  );
}
