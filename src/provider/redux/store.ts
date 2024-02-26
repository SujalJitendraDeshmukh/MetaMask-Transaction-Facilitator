import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { SetUsername } from "@/provider/redux/SetUsername";
import {SetFirstName} from "@/provider/redux/SetFirstName";
import {SetLastName} from "@/provider/redux/SetLastName";
import { SetAddress } from "@/provider/redux/SetAccount";
export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    SetUsername: SetUsername.reducer,
    SetFirstName: SetFirstName.reducer,
    SetLastName: SetLastName.reducer,
    SetAddress: SetAddress.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
});