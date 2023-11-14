import { createSlice } from "@reduxjs/toolkit";
import { set } from "lodash";

const viewConfigSlice = createSlice({
  name: "viewConfig",
  initialState: {
    "/Project1/home1/user1/file1.txt": {
      leftPaneOpen: false,
      rightPaneOpen: false,
      leftPane: {
        layerSelector: {
          show: true,
        },
      },
    },
  },
  reducers: {
    /**
     * Takes an action with a payload containing a fileIndex, a path in its config object (from the
     * config object's root, _not_ the slice's root) as per the format given 
     * [here](https://lodash.com/docs/4.17.15#set) and a value. The value is assigned at the
     * specified path.
     */
    setValueAtPath(state, action) {
      state[action.payload.fileIndex] && set(
        state[action.payload.fileIndex],
        action.payload.path,
        action.payload.value
      );
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
export const { setConfig, setValueAtPath } = viewConfigSlice.actions;
