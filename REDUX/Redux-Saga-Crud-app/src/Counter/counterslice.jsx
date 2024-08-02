import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0
}

const counterSlice = createSlice({
    name:"Meet",
    initialState,
    reducers:{
        incNum:(state)=>{
            state.value+=1
        }
    }
})

export const {incNum} = counterSlice.actions

export  default counterSlice.reducer