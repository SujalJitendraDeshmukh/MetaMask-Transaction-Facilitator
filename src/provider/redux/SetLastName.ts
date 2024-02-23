import { createSlice } from '@reduxjs/toolkit'

export const SetLastName = createSlice({
    name: 'SetLastName',
    initialState:{
        name: ""
    },
    reducers:{
        ChangeLastName (state, action){
            state.name = action.payload;
        }
    }
})

export const { ChangeLastName } = SetLastName.actions