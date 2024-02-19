import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { SetUsername } from "@/provider/redux/SetUsername";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    SetUsername: SetUsername.reducer,
    // Add other reducers here if needed
});

export const store = configureStore({
    reducer: rootReducer,
});