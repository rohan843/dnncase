import { createSlice } from "@reduxjs/toolkit";

const validationTerminalSlice = createSlice({
  name: "validationTerminal",
  initialState: {
    filterString: "",
    onlyActiveFileMessages: false,
  },
  reducers: {
    setValidationFilterString(state, action) {
      state.filterString = action.payload;
    },
    toggleOnlyActiveFileMessages(state) {
      state.onlyActiveFileMessages = !state.onlyActiveFileMessages;
    },
  },
});

export const { setValidationFilterString, toggleOnlyActiveFileMessages } = validationTerminalSlice.actions;
export const validationTerminalReducer = validationTerminalSlice.reducer;
