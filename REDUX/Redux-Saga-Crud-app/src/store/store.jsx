import { configureStore } from "@reduxjs/toolkit";
import countersliceReducer from "../Counter/counterslice";
import textsliceReducer from "../Counter/textslice";
import showsliceReducer from "../Counter/showslice";
import textslice1Reducer from "../Counter/textslice1";
import fetchReducer from "../Counter/fetchSlice";
import createSagaMiddleware from "redux-saga";

import sagaSliceReducer from "../Counter/dataSlice";

import getUserData from "../dataSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    count: countersliceReducer,
    textvalue: textsliceReducer,
    myname: showsliceReducer,
    newText: textslice1Reducer,
    myData: fetchReducer,
    sagaData: sagaSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(getUserData);
export { store };
