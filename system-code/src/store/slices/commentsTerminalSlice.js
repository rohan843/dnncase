import { createSlice } from "@reduxjs/toolkit";

const commentsTerminalSlice = createSlice({
  name: "commentsTerminal",
  initialState: {
    filterString: "",
    onlyActiveFileComments: false,
  },
  reducers: {
    setCommentsFilterString(state, action) {
      state.filterString = action.payload;
    },
    toggleOnlyActiveFileComments(state) {
      state.onlyActiveFileComments = !state.onlyActiveFileComments;
    },
  },
});

export const { setCommentsFilterString, toggleOnlyActiveFileComments } = commentsTerminalSlice.actions;
export const commentsTerminalReducer = commentsTerminalSlice.reducer;
