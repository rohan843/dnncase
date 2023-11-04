import { createSlice } from "@reduxjs/toolkit";

const logsTerminalSlice = createSlice({
  name: "logsTerminal",
  initialState: {
    filterString: "",
  },
  reducers: {
    setLogsFilterString(state, action) {
      state.filterString = action.payload;
    },
  },
});

export const { setLogsFilterString } = logsTerminalSlice.actions;
export const logsTerminalReducer = logsTerminalSlice.reducer;
