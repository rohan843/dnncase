import { createSlice } from "@reduxjs/toolkit";

const mainScreenSlice = createSlice({
  name: "mainScreen",
  initialState: {
    leftPane: null,
    terminal: null,
    isTerminalMaximized: false,
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
      state.isTerminalMaximized = true;
    },
    deMaximizeTerminal(state) {
      state.isTerminalMaximized = false;
    }
  },
});

export const { removeLeftPane, removeTerminal, setLeftPane, setTerminal, maximizeTerminal, deMaximizeTerminal } =
  mainScreenSlice.actions;
export const mainScreenReducer = mainScreenSlice.reducer;
