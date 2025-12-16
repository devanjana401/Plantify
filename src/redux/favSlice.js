import { createSlice } from "@reduxjs/toolkit";

// Load initial wishlist from localStorage or start with empty array
const initialState = JSON.parse(localStorage.getItem("fav")) || [];

const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    toggleFav: (state, action) => {
      const exists = state.find(i => i.id === action.payload.id);
      if (exists) {
        // Remove item if it already exists
        const updated = state.filter(i => i.id !== action.payload.id);
        localStorage.setItem("fav", JSON.stringify(updated));
        return updated; // return filtered state
      } else {
        // Add new item
        state.push(action.payload);
        localStorage.setItem("fav", JSON.stringify(state));
      }
    },
    clearFav: (state) => {
      state.length = 0;
      localStorage.removeItem("fav");
    },
  },
});

export const { toggleFav, clearFav } = favSlice.actions;
export default favSlice.reducer;
