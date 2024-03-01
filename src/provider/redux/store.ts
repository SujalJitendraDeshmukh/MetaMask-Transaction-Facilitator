import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { SetUsername } from "@/provider/redux/SetUsername";
import {SetFirstName} from "@/provider/redux/SetFirstName";
import {SetLastName} from "@/provider/redux/SetLastName";
import {SetAccount} from "@/provider/redux/SetAccount";
import {SetTxHash} from "@/provider/redux/SetTxHash";
import {SetUnit} from "@/provider/redux/setUnit";
import {SetBlockchain} from "@/provider/redux/SetBlockchain";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    SetUsername: SetUsername.reducer,
    SetFirstName: SetFirstName.reducer,
    SetAccount: SetAccount.reducer,
    SetLastName: SetLastName.reducer,
    SetTxHash: SetTxHash.reducer,
    SetUnit: SetUnit.reducer,
    SetBlockchain: SetBlockchain.reducer
});

export const store = configureStore({
    reducer: rootReducer,
});