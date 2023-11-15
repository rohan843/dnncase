import { createSlice } from "@reduxjs/toolkit";
import { findIndex, set } from "lodash";

const filesystemSlice = createSlice({
  name: "filesystem",
  initialState: {
    root: "Project1", // Name of the entry in fsState with the index as rootIndex.
    rootIndex: "/Project1",
    // For an algo to get this, refer -> https://colab.research.google.com/drive/15wcb00OYHopah1twNGtBIeydOMb6ydic?usp=sharing
    fsState: {
      "/Project1": {
        index: "/Project1",
        data: { name: "Project1", folder: true, artefact: false },
        isFolder: true,
        children: ["/Project1/bin", "/Project1/home1", "/Project1/home"],
      },
      "/Project1/bin": {
        index: "/Project1/bin",
        data: { name: "bin", folder: true, artefact: true },
        isFolder: true,
        children: ["/Project1/bin/ls", "/Project1/bin/mkdir"],
      },
      "/Project1/bin/ls": {
        index: "/Project1/bin/ls",
        data: { name: "ls", folder: true, artefact: false },
        isFolder: true,
        children: [],
      },
      "/Project1/bin/mkdir": {
        index: "/Project1/bin/mkdir",
        data: { name: "mkdir", folder: true, artefact: false },
        isFolder: true,
        children: [],
      },
      "/Project1/home1": {
        index: "/Project1/home1",
        data: { name: "home1", folder: true, artefact: false },
        isFolder: true,
        children: ["/Project1/home1/user1", "/Project1/home1/user2"],
      },
      "/Project1/home1/user1": {
        index: "/Project1/home1/user1",
        data: { name: "user1", folder: true, artefact: false },
        isFolder: true,
        children: ["/Project1/home1/user1/file1.txt"],
      },
      "/Project1/home1/user1/file1.txt": {
        index: "/Project1/home1/user1/file1.txt",
        data: {
          name: "file1.txt",
          folder: false,
          artefact: false,
          unsaved: true,
          filetype: "dc",
          nodes: [
            {
              id: "1",
              position: { x: 100, y: 100 },
              data: {
                name: "Conv2D Layer",
                activation: "relu",
                trained: false,
                usingPrevWeights: false,
                numInputNodes: 1,
                numOutputNodes: 1,
              },
              type: "LayerNode",
            },
            {
              id: "2",
              position: { x: 200, y: 200 },
              data: {
                name: "Conv2D Layer",
                activation: "relu",
                trained: false,
                usingPrevWeights: false,
                numInputNodes: 1,
                numOutputNodes: 1,
              },
              type: "LayerNode",
            },
            {
              id: "3",
              position: { x: 0, y: 0 },
              data: {
                inputShape: "[26, 26]",
              },
              type: "InputNode",
            },
            {
              id: "4",
              position: { x: 300, y: 100 },
              data: {
                outputShape: "[1]",
              },
              type: "OutputNode",
            },
            {
              id: "5",
              position: { x: 0, y: 0 },
              data: {
                commentText:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptates enim dolore eligendi cum aperiam iste fugit impedit qui cupiditate eius reprehenderit iusto ratione delectus, quam mollitia assumenda obcaecati rerum.",
              },
              type: "CommentNode",
            },
          ],
          edges: [
            {
              id: "e1",
              source: "3",
              target: "1",
              targetHandle: "i0",
              animated: true,
              style: { stroke: "#fff", strokeWidth: 1.5 },
            },
            {
              id: "e2",
              source: "2",
              target: "4",
              sourceHandle: "o0",
              animated: true,
              style: { stroke: "#fff", strokeWidth: 1.5 },
            },
            {
              id: "e3",
              source: "1",
              target: "2",
              sourceHandle: "o0",
              targetHandle: "i0",
              animated: true,
              style: { stroke: "#fff", strokeWidth: 1.5 },
            },
          ],
        },
        isFolder: false,
        children: [],
      },
      "/Project1/home1/user2": {
        index: "/Project1/home1/user2",
        data: { name: "user2", folder: true, artefact: false },
        isFolder: true,
        children: [],
      },
      "/Project1/home": {
        index: "/Project1/home",
        data: { name: "home", folder: true, artefact: false },
        isFolder: true,
        children: ["/Project1/home/user1", "/Project1/home/user2"],
      },
      "/Project1/home/user1": {
        index: "/Project1/home/user1",
        data: { name: "user1", folder: true, artefact: false },
        isFolder: true,
        children: [
          "/Project1/home/user1/file1.txt",
          "/Project1/home/user1/file2.txt",
          "/Project1/home/user1/file3.txt",
        ],
      },
      "/Project1/home/user1/file1.txt": {
        index: "/Project1/home/user1/file1.txt",
        data: { name: "file1.txt", folder: false, artefact: true },
        isFolder: false,
        children: [],
      },
      "/Project1/home/user1/file2.txt": {
        index: "/Project1/home/user1/file2.txt",
        data: { name: "file2.txt", folder: false, artefact: false },
        isFolder: false,
        children: [],
      },
      "/Project1/home/user1/file3.txt": {
        index: "/Project1/home/user1/file3.txt",
        data: { name: "file3.txt", folder: false, artefact: false },
        isFolder: false,
        children: [],
      },
      "/Project1/home/user2": {
        index: "/Project1/home/user2",
        data: { name: "user2", folder: true, artefact: false },
        isFolder: true,
        children: [],
      },
    },
    focusedItem: null,
    selectedItems: [],
    expandedItems: [],
    onlyShowArtefacts: false,
    artefactFilterButtonState: {
      justDeactivatedButMouseStillOnElementFlag: false,
    },
    /**
     * This is a list that contains what files are currently open. The first element of this list is
     * to be treated as the currently active file. Each element of this list is an object containing
     * a `fileIndex` property, that is the index of the file (its full path from project root), and
     * a `firstOpenedAt` property that is to serve as the position of this file in the list of tabs
     * that will be displayed on the workspace area.
     */
    openFiles: [
      { fileIndex: "/Project1/home1/user1/file1.txt", firstOpenedAt: 0 },
      { fileIndex: "/Project1/home/user1/file3.txt", firstOpenedAt: 1 },
    ],
  },
  reducers: {
    setFsState(state, action) {
      state.fsState = action.payload;
    },
    setFocusedItem(state, action) {
      state.focusedItem = action.payload;
    },
    setSelectedItems(state, action) {
      state.selectedItems = action.payload;
    },
    addExpandedItem(state, action) {
      state.expandedItems.push(action.payload);
    },
    removeExpandedItem(state, action) {
      state.expandedItems = state.expandedItems.filter(
        (expandedItemIndex) => expandedItemIndex !== action.payload
      );
    },
    clearExpandedItems(state) {
      state.expandedItems = [];
    },
    activateArtefactsOnlyFilter(state) {
      state.onlyShowArtefacts = true;
      state.artefactFilterButtonState.justDeactivatedButMouseStillOnElementFlag = false;
    },
    deactivateArtefactsOnlyFilter(state) {
      state.onlyShowArtefacts = false;
      state.artefactFilterButtonState.justDeactivatedButMouseStillOnElementFlag = false;
    },
    setJustDeactivatedButMouseStillOnElementFlag(state) {
      state.artefactFilterButtonState.justDeactivatedButMouseStillOnElementFlag = true;
    },
    unsetJustDeactivatedButMouseStillOnElementFlag(state) {
      state.artefactFilterButtonState.justDeactivatedButMouseStillOnElementFlag = false;
    },
    handleArtefactFilterButtonCaseA(state) {
      state.onlyShowArtefacts = false;
      state.artefactFilterButtonState.justDeactivatedButMouseStillOnElementFlag = false;
    },
    handleArtefactFilterButtonCaseB(state) {
      state.onlyShowArtefacts = true;
      state.artefactFilterButtonState.justDeactivatedButMouseStillOnElementFlag = false;
    },
    handleArtefactFilterButtonCaseC(state) {
      state.onlyShowArtefacts = false;
      state.artefactFilterButtonState.justDeactivatedButMouseStillOnElementFlag = true;
    },
    handleArtefactFilterButtonCaseD(state) {
      state.onlyShowArtefacts = true;
    },
    /**
     * Adds a new file to the `openFiles` array but does not set it as active.
     */
    addOpenFile(state, action) {
      const idx = findIndex(state.openFiles, (element) => {
        return element.fileIndex === action.payload;
      });
      if (idx === -1) {
        state.openFiles.push({
          fileIndex: action.payload,
          firstOpenedAt: state.openFiles.length,
        });
      }
    },
    /**
     * Removes the file whose `fileIndex` is provided in the payload.
     */
    removeOpenFile(state, action) {
      const idx = findIndex(state.openFiles, (element) => {
        return element.fileIndex === action.payload;
      });
      if (idx !== -1) {
        const firstOpenedTime = state.openFiles.splice(idx, 1)[0].firstOpenedAt;
        state.openFiles.forEach((openFile) => {
          if (openFile.firstOpenedAt > firstOpenedTime) {
            openFile.firstOpenedAt--;
          }
        });
      }
    },
    /**
     * Takes the file whose `fileIndex` is provided in the payload, and sets it as active, i.e.,
     * brings it to the front of openFiles array.
     */
    setActiveFile(state, action) {
      const idx = findIndex(state.openFiles, (element) => {
        return element.fileIndex === action.payload;
      });
      const activeFileElement = {
        fileIndex: action.payload,
        firstOpenedAt: state.openFiles.length,
      };
      if (idx !== -1) {
        activeFileElement.firstOpenedAt = state.openFiles.splice(
          idx,
          1
        )[0].firstOpenedAt;
      }
      state.openFiles.unshift(activeFileElement);
    },
    /**
     * Removes the active file (the file at the first index of `openFiles`).
     */
    removeActiveFile(state) {
      if (state.openFiles.length > 0) {
        const firstOpenedTime = state.openFiles.splice(0, 1)[0].firstOpenedAt;
        state.openFiles.forEach((openFile) => {
          if (openFile.firstOpenedAt > firstOpenedTime) {
            openFile.firstOpenedAt--;
          }
        });
      }
    },
    setFileValue(state, action) {
      set(
        state.fsState[action.payload.fileIndex],
        action.payload.path,
        action.payload.value
      );
    },
  },
});

export const {
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
} = filesystemSlice.actions;
export const filesystemReducer = filesystemSlice.reducer;
