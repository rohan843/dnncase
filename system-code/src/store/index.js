import { configureStore } from "@reduxjs/toolkit";
import { filesystemReducer, changeTitle } from "./slices/filesystemSlice";
import {
  mainScreenReducer,
  removeLeftPane,
  removeTerminal,
  setLeftPane,
  setTerminal,
} from "./slices/mainScreenSlice";

const store = configureStore({
  reducer: {
    filesystem: filesystemReducer,
    mainScreen: mainScreenReducer,
  },
});

export {
  store,
  changeTitle,
  removeLeftPane,
  removeTerminal,
  setLeftPane,
  setTerminal,
};
