import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shippingData: {
    MailTo: "",
    Address1: "",
    Address2: "",
    Country: "",
    State: "",
    City: "",
    Zip: "",
    reason: "",
  },
};

const replaceCard = createSlice({
  name: "replaceCard",
  initialState,
  reducers: {
    mail: (state, action) => {
      state.shippingData.MailTo =
        initialState.shippingData.MailTo + action.payload;  
    },
    address1: (state, action) => {
      state.shippingData.Address1 =
        initialState.shippingData.Address1 + action.payload;
    },
    address2: (state, action) => {
      state.shippingData.Address2 =
        initialState.shippingData.Address2 + action.payload;
    },
    country: (state, action) => {
      state.shippingData.Country =
        initialState.shippingData.Country + action.payload;
    },
    state: (state, action) => {
      state.shippingData.State =
        initialState.shippingData.State + action.payload;
    },
    city: (state, action) => {
      state.shippingData.City = initialState.shippingData.City + action.payload;
    },
    zip: (state, action) => {
      state.shippingData.Zip =
        initialState.shippingData.Zip + action.payload;
    },
    reason: (state, action) => {
      state.shippingData.reason =
        initialState.shippingData.reason + action.payload;
    },
  },
});

export const { mail,address1,address2,city,country,state,zip,reason } = replaceCard.actions;

export default replaceCard.reducer;
