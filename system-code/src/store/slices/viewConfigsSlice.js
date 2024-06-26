// this file is marked for deletion

// /**
//  * @deprecated
//  */

// import { createSlice } from "@reduxjs/toolkit";
// import { set } from "lodash";

// const viewConfigSlice = createSlice({
//   name: "viewConfig",
//   initialState: {
//     "/Demo Project/custom/main.dc": {
//       leftPaneOpen: false,
//       rightPaneOpen: false,
//       activeNodeID: null,
//       leftPane: {
//         layerSelector: {
//           show: true,
//         },
//       },
//       rightPane: {
//         hyperparamKeyValueInput: {
//           enableNewKeyValueInput: false,
//         },
//       },
//       graphCanvas: {
//         viewport: { x: 0, y: 0, zoom: 1 },
//       },
//     },
//   },
//   reducers: {
//     /**
//      * Takes an action with a payload containing a fileIndex, a path in its config object (from the
//      * config object's root, _not_ the slice's root) as per the format given
//      * [here](https://lodash.com/docs/4.17.15#set) and a value. The value is assigned at the
//      * specified path.
//      */
//     setValueAtPath(state, action) {
//       state[action.payload.fileIndex] &&
//         set(
//           state[action.payload.fileIndex],
//           action.payload.path,
//           action.payload.value
//         );
//     },
//     /**
//      * Takes an action with a payload containing a fileIndex and a list called `editPoints`
//      * of objects containing a path in its config object (from the config object's root, _not_ the
//      * slice's root) as per the format given [here](https://lodash.com/docs/4.17.15#set) and a
//      * value. The value is assigned at the specified path for each object.
//      */
//     setValuesAtPaths(state, action) {
//       if (!state[action.payload.fileIndex]) return;
//       for (let editPoint of action.payload.editPoints) {
//         set(state[action.payload.fileIndex], editPoint.path, editPoint.value);
//       }
//     },
//     /**
//      * Writes a fileIndex's config to the state. This will typically be called when initializing the
//      * config of some file.
//      */
//     setConfig(state, action) {
//       state[action.payload.fileIndex] = state.config;
//     },
//     /**
//      * Same as `setConfig`, but automatically initializes a blank DC file config.
//      */
//     setDCFileConfig(state, action) {
//       state[action.payload.fileIndex] = {
//         leftPaneOpen: false,
//         rightPaneOpen: false,
//         activeNodeID: null,
//         leftPane: {
//           layerSelector: {
//             show: true,
//           },
//         },
//         rightPane: {
//           hyperparamKeyValueInput: {
//             enableNewKeyValueInput: false,
//           },
//         },
//         graphCanvas: {
//           viewport: { x: 0, y: 0, zoom: 1 },
//         },
//       };
//     },
//     /**
//      * Deletes a file's config object. Typically invoked when the file is closed.
//      */
//     deleteConfig(state, action) {
//       delete state[action.payload.fileIndex];
//     },
//   },
// });

// // export const viewConfigReducer = viewConfigSlice.reducer;
// // export const {
// //   deleteConfig,
// //   setDCFileConfig,
// //   setConfig,
// //   setValueAtPath,
// //   setValuesAtPaths,
// // } = viewConfigSlice.actions;
