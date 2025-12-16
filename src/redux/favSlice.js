import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "fav",
  initialState: [],
  reducers: {
    toggleFav: (state, action) => {
      const exists = state.find(i => i.id === action.payload.id);
      if (exists) {
        return state.filter(i => i.id !== action.payload.id);
      }
      state.push(action.payload);
    },
  },
});

export const { toggleFav } = favSlice.actions;
export default favSlice.reducer;
