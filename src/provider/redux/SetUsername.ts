import { createSlice } from '@reduxjs/toolkit'

export const SetUsername = createSlice({
    name: 'SetUsername',
    initialState:{
        name: "Snehal bhai ka brain tanish bhai ka game"
    },
    reducers:{
        SetName (state, action){
            state.name = action.payload;
        }
    }
})

export const { SetName } = SetUsername.actions