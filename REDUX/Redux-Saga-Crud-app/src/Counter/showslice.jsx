import { createSlice } from "@reduxjs/toolkit";
import {  useSelector } from "react-redux";
import { textname } from "./textslice";


const initialState = {
  value: "",
};

const showSlice = createSlice({ name: "ShowSLice", initialState,
reducers:{

    showStateValue :(state,action)=>{
        state.value = action.payload
    }

}


});

export const {showStateValue} = showSlice.actions

export default showSlice.reducer

