import { createSlice } from "@reduxjs/toolkit";


export const sagaSlice = createSlice({
  name: "Data",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {
    getFetchData: (state) => { 
      state.isLoading = true;
    },
    getDataSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    getAddData: (state, action) => {
      state.isLoading = true;
    },
    addDataSuccess: (state, action) => {
      state.isLoading = false;
     
      state.data.push(action.payload);
    },

    getDeleteData:(state,action)  =>{
      state.isLoading = true
    },
    getDeleteSuccess:(state,action) =>{
      state.isLoading = false;
    
     state.data= state.data.filter(e=>e.id!==action.payload.id)
    },
    getEditData:(state,action)=>{
      state.isLoading = true;

      
    },
    getEditSuccess:(state,action)=>{
      state.isLoading = false;
     
      state.data = state.data.map((e) => e.id === action.payload.id?action.payload:e);
    }
  },
});

export const {
  getFetchData,
  getDataFailure,
  getDataSuccess,
  addDataSuccess,
  getAddData,
  getDeleteData,
  getDeleteSuccess,
  getEditData,
  getEditSuccess
} = sagaSlice.actions;

export default sagaSlice.reducer;
