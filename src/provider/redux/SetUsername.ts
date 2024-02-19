import { createSlice } from '@reduxjs/toolkit'

export const SetUsername = createSlice({
    name: 'SetUsername',
    initialState:{
        username: "My name is Shashwat"
    },
    reducers:{
        ChangeUsername(state, action){
            state.username = "hey";
        }
    }
})

export const { ChangeUsername } = SetUsername.actions