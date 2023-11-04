import { createSlice } from "@reduxjs/toolkit";

const validationTerminalSlice = createSlice({
  name: "validationTerminal",
  initialState: {
    filterString: "",
  },
  reducers: {
    setValidationFilterString(state, action) {
      state.filterString = action.payload;
    },
  },
});

export const { setValidationFilterString } = validationTerminalSlice.actions;
export const validationTerminalReducer = validationTerminalSlice.reducer;
