import { createSlice } from "@reduxjs/toolkit";

const viewConfigSlice = createSlice({
  name: "viewConfig",
  initialState: {
    "/Project1/home1/user1/file1.txt": {
      leftPaneOpen: false,
      rightPaneOpen: false,
    },
  },
  reducers: {
    /**
     * Takes in an action that contains in its payload a modifier function and a file index. The
     * modifier is run with the config of the fileIndex specified as the only input. It must mutably
     * change the config state passed to it. Its return value is discarded.
     *
     * **NOTE**: Ensure that the config exists _before_ dispatching an action for this reducer.
     */
    applyConfigModifier(state, action) {
      action.payload.modifier(state[action.payload.fileIndex]);
    },
    /**
     * Writes a fileIndex's config to the state. This will typically be called when initializing the
     * config of some file.
     */
    setConfig(state, action) {
      state[action.fileIndex] = state.config;
    },
  },
});

export const viewConfigReducer = viewConfigSlice.reducer;
export const { setConfig, applyConfigModifier } = viewConfigSlice.actions;
