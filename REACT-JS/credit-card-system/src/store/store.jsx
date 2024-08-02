import { configureStore } from "@reduxjs/toolkit";
import  modelSliceReducer from "../slice/model";
import replaceCardReducer from '../slice/ReplaceForm'
import datesliceReducer from "../slice/dateslice";
import fetchDataReducer from '../slice/fetchDataSlice'
import transactionSliceReducer from "../slice/TransactionSlice";
export const store = configureStore({
    reducer:{
        models:modelSliceReducer,
        replacemodel:replaceCardReducer,
        date:datesliceReducer,
        userData:fetchDataReducer,
        filterData:transactionSliceReducer
    }
})