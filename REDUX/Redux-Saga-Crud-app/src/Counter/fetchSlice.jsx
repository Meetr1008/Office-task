import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const STATUS = Object.freeze({
    IDEL:"idel",
    ERROR:"error",
    LOADING:"loading"
})

 const fetchData = createSlice({
    name:"Product",
    initialState :{
        data:[],
        status:STATUS.IDEL
    }

 ,   extraReducers:(builder)=>{
    builder
      .addCase(getYourData.pending, (state) => {
        state.status = STATUS.LOADING;
      })
      .addCase(getYourData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUS.IDEL;
      })
      .addCase(getYourData.rejected, (state) => {
        state.status = STATUS.ERROR;
      });
 }
 })



export  const getYourData =  createAsyncThunk('your/fetchData',async()=>{

    const res = await axios.get("http://localhost:3033/users");

  

    return res.data

}) 

export default fetchData.reducer