import { createSlice } from "@reduxjs/toolkit";

const mainScreenSlice = createSlice({
  name: "mainScreen",
  initialState: {
    leftPane: null,
    terminal: true,
    maximizeTerminal: false,
    terminalHeightInPercent: 40,
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
    maximizeTerminal(state) {
      state.maximizeTerminal = true;
    },
    deMaximizeTerminal(state) {
      state.maximizeTerminal = false;
    }
  },
});

export const { removeLeftPane, removeTerminal, setLeftPane, setTerminal, maximizeTerminal, deMaximizeTerminal } =
  mainScreenSlice.actions;
export const mainScreenReducer = mainScreenSlice.reducer;
