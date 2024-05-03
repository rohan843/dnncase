import { configureStore } from "@reduxjs/toolkit";
import {
  addOpenFile,
  removeOpenFile,
  setActiveFile,
  removeActiveFile,
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
  setFileValue,
  setActiveFileConfigValue,
  setActiveFileConfigValues,
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
  addExpandedValidationItem,
  removeExpandedValidationItem,
} from "./slices/validationTerminalSlice";
import {
  setCommentsFilterString,
  commentsTerminalReducer,
  toggleOnlyActiveFileComments,
  addExpandedCommentItem,
  removeExpandedCommentItem,
} from "./slices/commentsTerminalSlice";
import {
  activeElementReducer,
  setActiveElementTo,
} from "./slices/activeElementSlice";
// import {
//   viewConfigReducer,
//   setConfig,
//   setValueAtPath,
//   setValuesAtPaths,
//   setDCFileConfig,
//   deleteConfig,
// } from "./slices/viewConfigsSlice";
import { artefactsReducer } from "./slices/artefactsSlice";

const store = configureStore({
  reducer: {
    filesystem: filesystemReducer,
    mainScreen: mainScreenReducer,
    logsTerminal: logsTerminalReducer,
    validationTerminal: validationTerminalReducer,
    commentsTerminal: commentsTerminalReducer,
    activeElement: activeElementReducer,
    // viewConfig: viewConfigReducer,
    artefacts: artefactsReducer,
  },
});

export {
  store,

  // filesystemSlice
  addOpenFile,
  removeOpenFile,
  setActiveFile,
  removeActiveFile,
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
  setFileValue,
  setActiveFileConfigValue,
  setActiveFileConfigValues,

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
  addExpandedValidationItem,
  removeExpandedValidationItem,

  // commentsTerminalSlice
  setCommentsFilterString,
  toggleOnlyActiveFileComments,
  addExpandedCommentItem,
  removeExpandedCommentItem,

  // activeElementSlice
  setActiveElementTo,

  // viewConfigSlice
  // setConfig,
  // setValueAtPath,
  // setValuesAtPaths,
  // setDCFileConfig,
  // deleteConfig,

  // artefactsSlice
  artefactsReducer,
};
