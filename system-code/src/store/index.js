import { configureStore } from "@reduxjs/toolkit";
import {
  handleArtefactFilterButtonCaseA,
  handleArtefactFilterButtonCaseB,
  handleArtefactFilterButtonCaseC,
  handleArtefactFilterButtonCaseD,
  unsetJustDeactivatedButMouseStillOnElementFlag,
  setJustDeactivatedButMouseStillOnElementFlag,
  filesystemReducer,
  deactivateArtefactsOnlyFilter,
  activateArtefactsOnlyFilter,
  clearExpandedItems,
  removeExpandedItem,
  addExpandedItem,
  setSelectedItems,
  setFocusedItem,
  setFsState,
} from "./slices/filesystemSlice";
import {
  mainScreenReducer,
  removeLeftPane,
  removeTerminal,
  setLeftPane,
  setTerminal,
  maximizeTerminal,
  deMaximizeTerminal,
} from "./slices/mainScreenSlice";
import {
  logsTerminalReducer,
  setFilterString,
} from "./slices/logsTerminalSlice";

const store = configureStore({
  reducer: {
    filesystem: filesystemReducer,
    mainScreen: mainScreenReducer,
    logsTerminal: logsTerminalReducer,
  },
});

export {
  store,

  // filesystemSlice
  handleArtefactFilterButtonCaseA,
  handleArtefactFilterButtonCaseB,
  handleArtefactFilterButtonCaseC,
  handleArtefactFilterButtonCaseD,
  unsetJustDeactivatedButMouseStillOnElementFlag,
  setJustDeactivatedButMouseStillOnElementFlag,
  deactivateArtefactsOnlyFilter,
  activateArtefactsOnlyFilter,
  clearExpandedItems,
  removeExpandedItem,
  addExpandedItem,
  setSelectedItems,
  setFocusedItem,
  setFsState,

  // mainScreenSlice
  removeLeftPane,
  removeTerminal,
  setLeftPane,
  setTerminal,
  maximizeTerminal,
  deMaximizeTerminal,

  // logsTerminalSlice
  setFilterString,
};
