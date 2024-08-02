// src/counterSlice.js in dep1
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice1 = createSlice({
  name: "counter",
  initialState: {
    value: 5,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice1.actions;
export default counterSlice1.reducer;
