// src/counterSlice.js in dep1
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice2 = createSlice({
  name: "counter",
  initialState: {
    value: 5,
  },
  reducers: {
    increment: (state) => {
      state.value += 5;
    },
    decrement: (state) => {
      state.value -= 5;
    },
  },
});

export const { increment, decrement } = counterSlice2.actions;
export default counterSlice2.reducer;
