import { createSlice } from "@reduxjs/toolkit";

const commentsTerminalSlice = createSlice({
  name: "commentsTerminal",
  initialState: {
    filterString: "",
  },
  reducers: {
    setCommentsFilterString(state, action) {
      state.filterString = action.payload;
    },
  },
});

export const { setCommentsFilterString } = commentsTerminalSlice.actions;
export const commentsTerminalReducer = commentsTerminalSlice.reducer;
