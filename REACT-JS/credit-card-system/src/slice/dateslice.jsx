import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value:{
        startDate:new Date(),
        endDate:new Date()
    },
}

export const dateSlice = createSlice({
  name: "Date",
  initialState,
  reducers: {
    startDate: (state, action) => {
      state.value.startDate = action.payload;
    },
    endDate: (state, action) => {
      state.value.endDate = action.payload;
    },
  },
});

export const {startDate,endDate} = dateSlice.actions

export default dateSlice.reducer