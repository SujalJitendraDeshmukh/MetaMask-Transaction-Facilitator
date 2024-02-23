import { createSlice } from '@reduxjs/toolkit'

export const SetFirstName = createSlice({
    name: 'SetFirstName',
    initialState:{
        name: ""
    },
    reducers:{
        ChangeFirstName (state, action){
            state.name = action.payload;
        }
    }
})

export const { ChangeFirstName } = SetFirstName.actions