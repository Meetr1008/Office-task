import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: ""
}

const textSlice = createSlice({
    name:"text",
    initialState,
    reducers:{
        textname : (state,action) =>{
            state.value =  initialState.value+  action.payload
        }
    }
})

export const {textname} = textSlice.actions

export default textSlice.reducer 
