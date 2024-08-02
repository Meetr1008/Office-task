import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profileModelValue:false,
    declineModelValue:false,
    replaceModelValue:false,
}

export const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    openProfileModel: (state) => {
      state.profileModelValue = true;
    },
    closeProfileModel: (state) => {
      state.profileModelValue = false;
    },
    openDeclineModel: (state) => {
      state.declineModelValue = true;
    },
    closeDeclineModel: (state) => {
      state.declineModelValue = false;
    },
    openReplaceModel: (state) => {
      state.replaceModelValue = true;
    },
    closeReplaceModel: (state) => {
      state.replaceModelValue = false;
    },
  },
});


export const {openProfileModel,closeProfileModel,openDeclineModel,closeDeclineModel,openReplaceModel,closeReplaceModel } = modelSlice.actions

export  default modelSlice.reducer