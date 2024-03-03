import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { SetUsername } from "@/provider/redux/SetUsername";
import {SetFirstName} from "@/provider/redux/SetFirstName";
import {SetLastName} from "@/provider/redux/SetLastName";
import {SetAccount} from "@/provider/redux/SetAccount";
import {SetTxHash} from "@/provider/redux/SetTxHash";
import {SetUnit} from "@/provider/redux/setUnit";
import {SetBlockchain} from "@/provider/redux/SetBlockchain";
import {SetRecipient} from "@/provider/redux/SetRecipient";
import {SetAmount} from "@/provider/redux/SetAmount";
import { SetChartData } from './SetChartData';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    SetChartData: SetChartData.reducer,
    SetUsername: SetUsername.reducer,
    SetFirstName: SetFirstName.reducer,
    SetAccount: SetAccount.reducer,
    SetLastName: SetLastName.reducer,
    SetTxHash: SetTxHash.reducer,
    SetUnit: SetUnit.reducer,
    SetBlockchain: SetBlockchain.reducer,
    SetRecipient: SetRecipient.reducer,
    SetAmount: SetAmount.reducer
});

export const store = configureStore({
    reducer: rootReducer,
});