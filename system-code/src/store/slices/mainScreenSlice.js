import { createSlice } from "@reduxjs/toolkit";

const mainScreenSlice = createSlice({
  name: "mainScreen",
  initialState: {
    leftPane: null,
    terminal: true,
  },
  reducers: {
    removeLeftPane(state) {
      state.leftPane = null;
    },
    removeTerminal(state) {
      state.terminal = null;
    },
    setLeftPane(state, action) {
      state.leftPane = action.payload;
    },
    setTerminal(state, action) {
      state.terminal = action.payload;
    },
  },
});

export const { removeLeftPane, removeTerminal, setLeftPane, setTerminal } =
  mainScreenSlice.actions;
export const mainScreenReducer = mainScreenSlice.reducer;
