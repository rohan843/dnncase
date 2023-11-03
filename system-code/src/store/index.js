import { configureStore } from "@reduxjs/toolkit";
import { filesystemReducer, changeTitle } from "./slices/filesystemSlice";

const store = configureStore({
  reducer: {
    filesystem: filesystemReducer,
  },
});

export { store, changeTitle };
