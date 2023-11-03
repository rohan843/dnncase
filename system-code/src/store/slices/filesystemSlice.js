import { createSlice } from "@reduxjs/toolkit";

const filesystemSlice = createSlice({
  name: "filesystem",
  initialState: {
    rootTitle: "Project1",
  },
  reducers: {
    changeTitle(state, action) {
      state.rootTitle = action.payload;
    },
  },
});

export const { changeTitle } = filesystemSlice.actions;
export const filesystemReducer = filesystemSlice.reducer;
