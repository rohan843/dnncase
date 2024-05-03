import { createSlice } from "@reduxjs/toolkit";

const artefactsSlice = createSlice({
  name: "artefacts",
  initialState: {
    functions: {
      InputNode: {
        displayName: "Input Node",
        subcategorization: "I/O",
        defaultHyperparams: [],
        defaultInputHandles: ["inSignal"],
        defaultOutputHandles: ["outSignal"],
      },
      OutputNode: {
        displayName: "Output Node",
        subcategorization: "I/O",
        defaultHyperparams: [],
        defaultInputHandles: ["inSignal"],
        defaultOutputHandles: ["outSignal"],
      },
    },
  },
  reducers: {},
});

export const artefactsReducer = artefactsSlice.reducer;
