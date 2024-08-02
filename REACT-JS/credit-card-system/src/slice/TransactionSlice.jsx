import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:""
}

export const transactionSlice = createSlice({
    name:"filterData",
    initialState,
    reducers:{
        addFilterData:(state,action)=>{
            state.value =  action.payload

        }
    }
})

export const {addFilterData} = transactionSlice.actions

export default transactionSlice.reducer