import { createSlice } from "@reduxjs/toolkit";
import { findIndex, set } from "lodash";

function getDefaultFileConfigForType(filetype) {
  if (filetype === "dc") {
    return {
      leftPaneOpen: false,
      rightPaneOpen: false,
      activeNodeID: null,
      leftPane: {
        layerSelector: {
          show: true,
        },
      },
      rightPane: {
        hyperparamKeyValueInput: {
          enableNewKeyValueInput: false,
        },
      },
      graphCanvas: {
        viewport: { x: 0, y: 0, zoom: 1 },
      },
    };
  } else {
    return {};
  }
}

const filesystemSlice = createSlice({
  name: "filesystem",
  initialState: {
    root: "Demo Project", // Name of the entry in fsState with the index as rootIndex.
    rootIndex: "/Demo Project",
    // For an algo to get this, refer -> https://colab.research.google.com/drive/15wcb00OYHopah1twNGtBIeydOMb6ydic?usp=sharing
    fsState: {
      "/Demo Project": {
        index: "/Demo Project",
        data: { name: "Demo Project", folder: true, artefact: false },
        isFolder: true,
        children: [
          "/Demo Project/custom",
          "/Demo Project/gan",
          "/Demo Project/tuner",
        ],
      },
      "/Demo Project/gan": {
        index: "/Demo Project/gan",
        data: { name: "gan", folder: true, artefact: true },
        isFolder: true,
        children: [
          "/Demo Project/gan/Constants.dc",
          "/Demo Project/gan/DiscriminatorLoss.dc",
          "/Demo Project/gan/DiscriminatorModel.dc",
          "/Demo Project/gan/GeneratorLoss.dc",
          "/Demo Project/gan/GeneratorModel.dc",
          "/Demo Project/gan/LoadedData.dc",
          "/Demo Project/gan/MNISTDataLoader.dc",
          "/Demo Project/gan/TrainStep.dc",
          "/Demo Project/gan/TrainingLoop.dc",
          "/Demo Project/gan/tmp1.dc",
          "/Demo Project/gan/tmp2.dc",
        ],
      },
      "/Demo Project/gan/Constants.dc": {
        index: "/Demo Project/gan/Constants.dc",
        data: {
          name: "Constants.dc",
          folder: false,
          artefact: false,
          unsaved: true,
          filetype: "dc",
          artefacttype: "ArtefactType",
          nodes: [],
          edges: [],
        },
        isFolder: false,
        children: [],
      },
      "/Demo Project/gan/MNISTDataLoader.dc": {
        index: "/Demo Project/gan/MNISTDataLoader.dc",
        data: {
          name: "MNISTDataLoader.dc",
          folder: false,
          artefact: false,
          unsaved: true,
          filetype: "dc",
          artefacttype: "DataLoaderType",
          nodes: [],
          edges: [],
        },
        isFolder: false,
        children: [],
      },
      "/Demo Project/gan/GeneratorModel.dc": {
        index: "/Demo Project/gan/GeneratorModel.dc",
        data: {
          name: "GeneratorModel.dc",
          folder: false,
          artefact: false,
          unsaved: true,
          filetype: "dc",
          artefacttype: "ModelArchitectureType",
          nodes: [],
          edges: [],
        },
        isFolder: false,
        children: [],
      },
      "/Demo Project/gan/DiscriminatorModel.dc": {
        index: "/Demo Project/gan/DiscriminatorModel.dc",
        data: {
          name: "DiscriminatorModel.dc",
          folder: false,
          artefact: false,
          unsaved: true,
          filetype: "dc",
          artefacttype: "ModelArchitectureType",
          nodes: [],
          edges: [],
        },
        isFolder: false,
        children: [],
      },
      "/Demo Project/gan/DiscriminatorLoss.dc": {
        index: "/Demo Project/gan/DiscriminatorLoss.dc",
        data: {
          name: "DiscriminatorLoss.dc",
          folder: false,
          artefact: false,
          unsaved: true,
          filetype: "dc",
          artefacttype: "LossFunctionArtefact",
          nodes: [],
          edges: [],
        },
        isFolder: false,
        children: [],
      },
      "/Demo Project/gan/GeneratorLoss.dc": {
        index: "/Demo Project/gan/GeneratorLoss.dc",
        data: {
          name: "GeneratorLoss.dc",
          folder: false,
          artefact: false,
          unsaved: true,
          filetype: "dc",
          artefacttype: "LossFunctionArtefact",
          nodes: [],
          edges: [],
        },
        isFolder: false,
        children: [],
      },
      "/Demo Project/gan/TrainStep.dc": {
        index: "/Demo Project/gan/TrainStep.dc",
        data: {
          name: "TrainStep.dc",
          folder: false,
          artefact: false,
          unsaved: true,
          filetype: "dc",
          artefacttype: "TrainStepArtefact",
          nodes: [],
          edges: [],
        },
        isFolder: false,
        children: [],
      },
      "/Demo Project/gan/TrainingLoop.dc": {
        index: "/Demo Project/gan/TrainingLoop.dc",
        data: {
          name: "TrainingLoop.dc",
          folder: false,
          artefact: false,
          unsaved: true,
          filetype: "dc",
          artefacttype: "TrainLoopArtefact",
          nodes: [],
          edges: [],
        },
        isFolder: false,
        children: [],
      },
      "/Demo Project/gan/LoadedData.dc": {
        index: "/Demo Project/gan/LoadedData.dc",
        data: {
          name: "LoadedData.dc",
          folder: false,
          artefact: false,
          unsaved: true,
          filetype: "dc",
          artefacttype: "ArtefactType",
          nodes: [],
          edges: [],
        },
        isFolder: false,
        children: [],
      },
      "/Demo Project/gan/tmp1.dc": {
        index: "/Demo Project/gan/tmp1.dc",
        data: {
          name: "tmp1.dc",
          folder: false,
          artefact: false,
          unsaved: true,
          filetype: "dc",
          artefacttype: "ArtefactType",
          nodes: [],
          edges: [],
        },
        isFolder: false,
        children: [],
      },
      "/Demo Project/gan/tmp2.dc": {
        index: "/Demo Project/gan/tmp2.dc",
        data: {
          name: "tmp2.dc",
          folder: false,
          artefact: false,
          unsaved: true,
          filetype: "dc",
          artefacttype: "ArtefactType",
          nodes: [],
          edges: [],
        },
        isFolder: false,
        children: [],
      },
      "/Demo Project/tuner": {
        index: "/Demo Project/tuner",
        data: { name: "tuner", folder: true, artefact: true },
        isFolder: true,
        children: [
          "/Demo Project/tuner/ClassifierModel.dc",
          "/Demo Project/tuner/CompiledClassifierModel.dc",
          "/Demo Project/tuner/MNISTDataLoader.dc",
          "/Demo Project/tuner/ModelEvaluator.dc",
          "/Demo Project/tuner/ModelTuner.dc",
          "/Demo Project/tuner/tmp1.dc",
        ],
      },
      "/Demo Project/tuner/ClassifierModel.dc": {
        index: "/Demo Project/tuner/ClassifierModel.dc",
        data: {
          name: "ClassifierModel.dc",
          folder: false,
          artefact: false,
          unsaved: true,
          filetype: "dc",
          artefacttype: "ModelArchitectureType",
          nodes: [],
          edges: [],
        },
        isFolder: false,
        children: [],
      },
      "/Demo Project/tuner/tmp1.dc": {
        index: "/Demo Project/tuner/tmp1.dc",
        data: {
          name: "tmp1.dc",
          folder: false,
          artefact: false,
          unsaved: true,
          filetype: "dc",
          artefacttype: "ArtefactType",
          nodes: [],
          edges: [],
        },
        isFolder: false,
        children: [],
      },
      "/Demo Project/tuner/CompiledClassifierModel.dc": {
        index: "/Demo Project/tuner/CompiledClassifierModel.dc",
        data: {
          name: "CompiledClassifierModel.dc",
          folder: false,
          artefact: false,
          unsaved: true,
          filetype: "dc",
          artefacttype: "ModelCompilerType",
          nodes: [],
          edges: [],
        },
        isFolder: false,
        children: [],
      },
      "/Demo Project/tuner/MNISTDataLoader.dc": {
        index: "/Demo Project/tuner/MNISTDataLoader.dc",
        data: {
          name: "MNISTDataLoader.dc",
          folder: false,
          artefact: false,
          unsaved: true,
          filetype: "dc",
          artefacttype: "DataLoaderType",
          nodes: [],
          edges: [],
        },
        isFolder: false,
        children: [],
      },
      "/Demo Project/tuner/ModelTuner.dc": {
        index: "/Demo Project/tuner/ModelTuner.dc",
        data: {
          name: "ModelTuner.dc",
          folder: false,
          artefact: false,
          unsaved: true,
          filetype: "dc",
          artefacttype: "ModelTunerArtefact",
          nodes: [],
          edges: [],
        },
        isFolder: false,
        children: [],
      },
      "/Demo Project/tuner/ModelEvaluator.dc": {
        index: "/Demo Project/tuner/ModelEvaluator.dc",
        data: {
          name: "ModelEvaluator.dc",
          folder: false,
          artefact: false,
          unsaved: true,
          filetype: "dc",
          artefacttype: "ModelEvaluatorArtefact",
          nodes: [],
          edges: [],
        },
        isFolder: false,
        children: [],
      },
      "/Demo Project/custom": {
        index: "/Demo Project/custom",
        data: { name: "custom", folder: true, artefact: true },
        isFolder: true,
        children: [
          "/Demo Project/custom/ClassifierModel.dc",
          "/Demo Project/custom/CompiledModel.dc",
          "/Demo Project/custom/main.dc",
        ],
      },
      "/Demo Project/custom/main.dc": {
        index: "/Demo Project/custom/main.dc",
        data: {
          name: "main.dc",
          folder: false,
          artefact: false,
          unsaved: true,
          filetype: "dc",
          artefacttype: "ArtefactType",
          nodes: [
            {
              id: "1",
              position: {
                x: 100,
                y: 100,
                zoom: 1,
              },
              type: "NamedUnpackerNode",
              data: {},
            },
            {
              id: "3",
              position: {
                x: 100,
                y: 100,
                zoom: 1,
              },
              type: "NamedPackerNode",
              data: {},
            },
            {
              id: "2",
              position: {
                x: 200,
                y: 100,
                zoom: 1,
              },
              type: "NamedUnpackerNode",
              data: {},
            },
          ],
          edges: [],
        },
        isFolder: false,
        children: [],
      },
      "/Demo Project/custom/CompiledModel.dc": {
        index: "/Demo Project/custom/CompiledModel.dc",
        data: {
          name: "CompiledModel.dc",
          folder: false,
          artefact: false,
          unsaved: true,
          filetype: "dc",
          artefacttype: "ModelCompilerType",
          nodes: [
            {
              id: "1",
              position: {
                x: 100,
                y: 100,
                zoom: 1,
              },
              type: "NamedUnpackerNode",
              data: {},
            },
          ],
          edges: [],
        },
        isFolder: false,
        children: [],
      },
      "/Demo Project/custom/ClassifierModel.dc": {
        index: "/Demo Project/custom/ClassifierModel.dc",
        data: {
          name: "ClassifierModel.dc",
          folder: false,
          artefact: false,
          unsaved: true,
          filetype: "dc",
          artefacttype: "ModelArchitectureType",
          nodes: [],
          edges: [],
        },
        isFolder: false,
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
      {
        fileIndex: "/Demo Project/custom/main.dc",
        firstOpenedAt: 0,
        config: {
          leftPaneOpen: false,
          rightPaneOpen: false,
          activeNodeID: null,
          leftPane: {
            layerSelector: {
              show: true,
            },
          },
          rightPane: {
            hyperparamKeyValueInput: {
              enableNewKeyValueInput: false,
            },
          },
          graphCanvas: {
            viewport: { x: 0, y: 0, zoom: 1 },
          },
        },
      },
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
        const fileIndex = action.payload;
        let config = getDefaultFileConfigForType(
          state.fsState[fileIndex].data.filetype
        );
        state.openFiles.push({
          fileIndex,
          firstOpenedAt: state.openFiles.length,
          config,
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
     * brings it to the front of openFiles array. The provided file need not already be opened. In
     * that case, the file will be prepended to the openFiles array.
     */
    setActiveFile(state, action) {
      const idx = findIndex(state.openFiles, (element) => {
        return element.fileIndex === action.payload;
      });
      const activeFileElement = {
        fileIndex: action.payload,
        firstOpenedAt: state.openFiles.length,
        config: getDefaultFileConfigForType("dc"),
      };
      if (idx !== -1) {
        const prevElement = state.openFiles.splice(idx, 1)[0];
        activeFileElement.firstOpenedAt = prevElement.firstOpenedAt;
        activeFileElement.config = prevElement.config;
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
    setActiveFileConfigValue(state, action) {
      set(state.openFiles[0].config, action.payload.path, action.payload.value);
    },
    setActiveFileConfigValues(state, action) {
      for (let editPoint of action.payload.editPoints) {
        set(state.openFiles[0].config, editPoint.path, editPoint.value);
      }
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
  setActiveFileConfigValue,
  setActiveFileConfigValues,
} = filesystemSlice.actions;
export const filesystemReducer = filesystemSlice.reducer;
