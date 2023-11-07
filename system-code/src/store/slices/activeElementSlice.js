import { createSlice } from "@reduxjs/toolkit";
import { MajorEntityIDs } from "../../constants";

const activeElementSlice = createSlice({
  name: "activeElement",
  initialState: {
    id: MajorEntityIDs.base,
  },
  reducers: {
    setActiveElementTo(state, action) {
      state.id = action.payload;
    },
  },
});

export const { setActiveElementTo } = activeElementSlice.actions;

export const activeElementReducer = activeElementSlice.reducer;
