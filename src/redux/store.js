import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import favReducer from "./favSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    fav: favReducer,
  },
});
