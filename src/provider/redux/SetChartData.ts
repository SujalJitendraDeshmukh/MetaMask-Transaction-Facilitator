import { createSlice } from '@reduxjs/toolkit'

export const SetChartData = createSlice({
    name: 'SetChartData',
    initialState:{
        chart: {}
    },
    reducers:{
        Changechart (state, action){
            state.chart = action.payload;
        }
    }
})

export const { Changechart } = SetChartData.actions