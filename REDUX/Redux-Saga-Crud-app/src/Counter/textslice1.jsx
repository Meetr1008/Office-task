import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 value:{
    name:"",
    email:""
 }
};

const textSlice1= createSlice({
  name: "text",
  initialState,
  reducers: {
    textName1: (state, action) => {
      state.value.name   = initialState.value.name + action.payload;
    
    },

    updateEmail :(state,action)=>{
          state.value.email = initialState.value.email +action.payload
    }
  },
});

export const { textName1,updateEmail } = textSlice1.actions;

export default textSlice1.reducer; 