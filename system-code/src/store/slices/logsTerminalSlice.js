import { createSlice } from "@reduxjs/toolkit";

const logsTerminalSlice = createSlice({
  name: "logsTerminal",
  initialState: {
    filterString: "",
  },
  reducers: {
    setFilterString(state, action) {
      state.filterString = action.payload;
    },
  },
});

export const { setFilterString } = logsTerminalSlice.actions;
export const logsTerminalReducer = logsTerminalSlice.reducer;
