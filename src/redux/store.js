import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import favReducer from "./favSlice";
import profileReducer from "./profileSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    fav: favReducer,
    profile: profileReducer,
  },
});
