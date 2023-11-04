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
  setLogsFilterString,
} from "./slices/logsTerminalSlice";
import {
  setValidationFilterString,
  validationTerminalReducer,
  toggleOnlyActiveFileMessages,
} from "./slices/validationTerminalSlice";
import {
  setCommentsFilterString,
  commentsTerminalReducer,
} from "./slices/commentsTerminalSlice";

const store = configureStore({
  reducer: {
    filesystem: filesystemReducer,
    mainScreen: mainScreenReducer,
    logsTerminal: logsTerminalReducer,
    validationTerminal: validationTerminalReducer,
    commentsTerminal: commentsTerminalReducer,
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
  setLogsFilterString,

  // validationTerminalSlice
  setValidationFilterString,
  toggleOnlyActiveFileMessages,

  // commentsTerminalSlice
  setCommentsFilterString,
};
