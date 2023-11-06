import { createSlice } from "@reduxjs/toolkit";

const activeElementSlice = createSlice({
  name: "activeElement",
  initialState: {
    id: null,
  },
  reducers: {
    setActiveElementTo(state, action) {
      state.id = action.payload;
    },
  },
});

export const { setActiveElementTo } = activeElementSlice.actions;

export const activeElementReducer = activeElementSlice.reducer;
