import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice2";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
