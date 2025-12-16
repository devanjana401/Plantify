// src/redux/profileSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Load from localStorage if available
const savedAddress = localStorage.getItem("deliveryAddress")
  ? JSON.parse(localStorage.getItem("deliveryAddress"))
  : {
      name: "",
      street: "",
      city: "",
      state: "",
      pinCode: "",
      phone: "",
    };

const initialState = {
  address: savedAddress,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
      // Save to localStorage
      localStorage.setItem("deliveryAddress", JSON.stringify(state.address));
    },
    clearAddress: (state) => {
      state.address = {
        name: "",
        street: "",
        city: "",
        state: "",
        pinCode: "",
        phone: "",
      };
      localStorage.removeItem("deliveryAddress");
    },
  },
});

export const { setAddress, clearAddress } = profileSlice.actions;
export default profileSlice.reducer;
