import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counterSlice1";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
