// To this snippet from src/provider/redux/SetAccount.ts:
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export const SetAddress = createSlice({
    name: 'SetAddress',
    initialState:{
        address: ""
    },
    reducers: {
        setAddress: (state, action) => {
            state.address = action.payload;
        },
    },
});

export const { setAddress } = SetAddress.actions;



