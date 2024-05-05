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
          nodes: [
            {
              id: "FunctionNode_RawData_666",
              position: {
                x: 365,
                y: 135,
              },
              type: "FunctionNode/RawData",
              data: {
                name: "Emit Raw Data",
                hyperparams: [
                  {
                    id: "raw-python-data",
                    value: "None",
                  },
                ],
                commentText: "",
                commentType: "plain",
                elementID: "RawData",
                innerCode: "256",
              },
              width: 180,
              height: 120,
              selected: false,
              positionAbsolute: {
                x: 365,
                y: 135,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_RawData_1086",
              position: {
                x: 365,
                y: 320,
              },
              type: "FunctionNode/RawData",
              data: {
                name: "Emit Raw Data",
                hyperparams: [
                  {
                    id: "raw-python-data",
                    value: "None",
                  },
                ],
                commentText: "",
                commentType: "plain",
                elementID: "RawData",
                innerCode: "50",
              },
              width: 180,
              height: 120,
              selected: false,
              positionAbsolute: {
                x: 365,
                y: 320,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_RawData_1438",
              position: {
                x: 360,
                y: 495,
              },
              type: "FunctionNode/RawData",
              data: {
                name: "Emit Raw Data",
                hyperparams: [
                  {
                    id: "raw-python-data",
                    value: "None",
                  },
                ],
                commentText: "",
                commentType: "plain",
                elementID: "RawData",
                innerCode: "100",
              },
              width: 180,
              height: 120,
              selected: false,
              positionAbsolute: {
                x: 360,
                y: 495,
              },
              dragging: false,
            },
            {
              id: "Output_4061",
              position: {
                x: 700,
                y: 490,
              },
              type: "Output",
              data: {
                name: "noise_dim",
              },
              width: 153,
              height: 100,
              selected: false,
              positionAbsolute: {
                x: 700,
                y: 490,
              },
              dragging: false,
            },
            {
              id: "Output_4262",
              position: {
                x: 750,
                y: 340,
              },
              type: "Output",
              data: {
                name: "EPOCHS",
              },
              width: 153,
              height: 100,
              selected: false,
              positionAbsolute: {
                x: 750,
                y: 340,
              },
              dragging: false,
            },
            {
              id: "Output_4475",
              position: {
                x: 735,
                y: 110,
              },
              type: "Output",
              data: {
                name: "BATCH_SIZE",
              },
              width: 153,
              height: 100,
              selected: false,
              positionAbsolute: {
                x: 735,
                y: 110,
              },
              dragging: false,
            },
          ],
          edges: [
            {
              id: "Output_4475_in",
              source: "FunctionNode_RawData_666",
              sourceHandle: "out",
              target: "Output_4475",
              targetHandle: "in",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
              selected: false,
            },
            {
              id: "Output_4262_in",
              source: "FunctionNode_RawData_1086",
              sourceHandle: "out",
              target: "Output_4262",
              targetHandle: "in",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
              selected: false,
            },
            {
              id: "Output_4061_in",
              source: "FunctionNode_RawData_1438",
              sourceHandle: "out",
              target: "Output_4061",
              targetHandle: "in",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
              selected: false,
            },
          ],
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
          nodes: [
            {
              id: "FunctionNode_ArtefactImporter_4199",
              position: {
                x: 2910,
                y: 30,
              },
              type: "FunctionNode/ArtefactImporter",
              data: {
                name: "Constants",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                elementID: "ArtefactImporter",
              },
              width: 400,
              height: 60,
              selected: false,
              positionAbsolute: {
                x: 2910,
                y: 30,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_LoadMNISTDataset_2347",
              position: {
                x: 120,
                y: 490,
              },
              type: "FunctionNode",
              data: {
                name: "Load MNIST Dataset",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                inputHandles: [],
                outputHandles: ["x_train", "y_train", "x_test", "y_test"],
                elementID: "LoadMNISTDataset",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 120,
                y: 490,
              },
              dragging: false,
            },
            {
              id: "Output_1864",
              position: {
                x: 720,
                y: 735,
              },
              type: "Output",
              data: {
                name: "y_train",
              },
              width: 153,
              height: 100,
              selected: false,
              positionAbsolute: {
                x: 720,
                y: 735,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_TypecastTo_8299",
              position: {
                x: 1005,
                y: 270,
              },
              type: "FunctionNode",
              data: {
                name: "Typecast To",
                hyperparams: [
                  {
                    id: "dtype",
                    value: "'float32'",
                  },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: ["array"],
                outputHandles: ["array"],
                elementID: "TypecastTo",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 1005,
                y: 270,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_Subtract_3406",
              position: {
                x: 1480,
                y: 265,
              },
              type: "FunctionNode",
              data: {
                name: "Subtract",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                inputHandles: ["minuend", "subtrahend"],
                outputHandles: ["difference"],
                elementID: "Subtract",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 1480,
                y: 265,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_ScalarDivide_7245",
              position: {
                x: 1975,
                y: 275,
              },
              type: "FunctionNode",
              data: {
                name: "Divide by Scalar",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                inputHandles: ["dividend", "divisor"],
                outputHandles: ["result"],
                elementID: "ScalarDivide",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 1975,
                y: 275,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_CreateDatasetFromNumpyArray_5357",
              position: {
                x: 2450,
                y: 265,
              },
              type: "FunctionNode",
              data: {
                name: "Create Dataset From Numpy Array",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                inputHandles: ["array"],
                outputHandles: ["dataset"],
                elementID: "CreateDatasetFromNumpyArray",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 2450,
                y: 265,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_Shuffle_1475",
              position: {
                x: 2995,
                y: 270,
              },
              type: "FunctionNode",
              data: {
                name: "Shuffle",
                hyperparams: [
                  {
                    id: "buffer_size",
                    value: "60000",
                  },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: ["dataset"],
                outputHandles: ["dataset"],
                elementID: "Shuffle",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 2995,
                y: 270,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_Batch_1942",
              position: {
                x: 3480,
                y: 295,
              },
              type: "FunctionNode",
              data: {
                name: "Batch",
                hyperparams: [
                  {
                    id: "batch_size",
                    value: null,
                  },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: ["dataset"],
                outputHandles: ["dataset"],
                elementID: "Batch",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 3480,
                y: 295,
              },
              dragging: false,
            },
            {
              id: "Output_8935",
              position: {
                x: 3455,
                y: 50,
              },
              type: "DataVariable/IN",
              data: {
                hyperparams: [],
                name: "BATCH_SIZE",
              },
              width: 200,
              height: 50,
              selected: false,
              positionAbsolute: {
                x: 3455,
                y: 50,
              },
              dragging: false,
            },
            {
              id: "Output_9465",
              position: {
                x: 3150,
                y: 570,
              },
              type: "DataVariable/OUT",
              data: {
                hyperparams: [],
                name: "BATCH_SIZE",
              },
              width: 200,
              height: 50,
              selected: false,
              positionAbsolute: {
                x: 3150,
                y: 570,
              },
              dragging: false,
            },
            {
              id: "Output_5888",
              position: {
                x: 3955,
                y: 340,
              },
              type: "Output",
              data: {
                name: "train_dataset",
              },
              width: 153,
              height: 100,
              selected: false,
              positionAbsolute: {
                x: 3955,
                y: 340,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_Reshape_251",
              position: {
                x: 605,
                y: 270,
              },
              type: "FunctionNode",
              data: {
                name: "Reshape",
                hyperparams: [
                  {
                    id: "shape",
                    value: "(-1, 28, 28, 1)",
                  },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: ["array"],
                outputHandles: ["array"],
                elementID: "Reshape",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 605,
                y: 270,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_RawData_4093",
              position: {
                x: 1185,
                y: 555,
              },
              type: "FunctionNode/RawData",
              data: {
                name: "Emit Raw Data",
                hyperparams: [
                  {
                    id: "raw-python-data",
                    value: "None",
                  },
                ],
                commentText: "",
                commentType: "plain",
                elementID: "RawData",
                innerCode: "127.5",
              },
              width: 180,
              height: 120,
              selected: false,
              positionAbsolute: {
                x: 1185,
                y: 555,
              },
              dragging: false,
            },
          ],
          edges: [
            {
              id: "Output_8935_input",
              source: "FunctionNode_ArtefactImporter_4199",
              sourceHandle: "out",
              target: "Output_8935",
              targetHandle: "input",
              label: "BATCH_SIZE",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
              selected: false,
            },
            {
              id: "Output_1864_in",
              source: "FunctionNode_LoadMNISTDataset_2347",
              sourceHandle: "y_train",
              target: "Output_1864",
              targetHandle: "in",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
              selected: false,
            },
            {
              id: "FunctionNode_Reshape_251_array",
              source: "FunctionNode_LoadMNISTDataset_2347",
              sourceHandle: "x_train",
              target: "FunctionNode_Reshape_251",
              targetHandle: "array",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
              selected: false,
            },
            {
              id: "FunctionNode_TypecastTo_8299_array",
              source: "FunctionNode_Reshape_251",
              sourceHandle: "array",
              target: "FunctionNode_TypecastTo_8299",
              targetHandle: "array",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
              selected: false,
            },
            {
              id: "FunctionNode_Subtract_3406_minuend",
              source: "FunctionNode_TypecastTo_8299",
              sourceHandle: "array",
              target: "FunctionNode_Subtract_3406",
              targetHandle: "minuend",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
              selected: false,
            },
            {
              id: "FunctionNode_Subtract_3406_subtrahend",
              source: "FunctionNode_RawData_4093",
              sourceHandle: "out",
              target: "FunctionNode_Subtract_3406",
              targetHandle: "subtrahend",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
              selected: false,
            },
            {
              id: "FunctionNode_ScalarDivide_7245_dividend",
              source: "FunctionNode_Subtract_3406",
              sourceHandle: "difference",
              target: "FunctionNode_ScalarDivide_7245",
              targetHandle: "dividend",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
              selected: false,
            },
            {
              id: "FunctionNode_ScalarDivide_7245_divisor",
              source: "FunctionNode_RawData_4093",
              sourceHandle: "out",
              target: "FunctionNode_ScalarDivide_7245",
              targetHandle: "divisor",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
              selected: false,
            },
            {
              id: "FunctionNode_CreateDatasetFromNumpyArray_5357_array",
              source: "FunctionNode_ScalarDivide_7245",
              sourceHandle: "result",
              target: "FunctionNode_CreateDatasetFromNumpyArray_5357",
              targetHandle: "array",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
              selected: false,
            },
            {
              id: "FunctionNode_Shuffle_1475_dataset",
              source: "FunctionNode_CreateDatasetFromNumpyArray_5357",
              sourceHandle: "dataset",
              target: "FunctionNode_Shuffle_1475",
              targetHandle: "dataset",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
              selected: false,
            },
            {
              id: "FunctionNode_Batch_1942_dataset",
              source: "FunctionNode_Shuffle_1475",
              sourceHandle: "dataset",
              target: "FunctionNode_Batch_1942",
              targetHandle: "dataset",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
              selected: false,
            },
            {
              id: "FunctionNode_Batch_1942_multi-in+8983",
              source: "Output_9465",
              sourceHandle: "output",
              target: "FunctionNode_Batch_1942",
              targetHandle: "multi-in",
              label: "batch_size",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
              selected: false,
            },
            {
              id: "Output_5888_in",
              source: "FunctionNode_Batch_1942",
              sourceHandle: "dataset",
              target: "Output_5888",
              targetHandle: "in",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
              selected: false,
            },
          ],
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
        "index": "/Demo Project/tuner/ClassifierModel.dc",
        "data": {
          "name": "ClassifierModel.dc",
          "folder": false,
          "artefact": false,
          "unsaved": true,
          "filetype": "dc",
          "artefacttype": "ModelArchitectureType",
          "nodes": [
            {
              "id": "FunctionNode_GetTunableInt_5167",
              "position": { "x": -595, "y": -390 },
              "type": "FunctionNode",
              "data": {
                "name": "Get Tunable Int",
                "hyperparams": [
                  { "id": "name", "value": null },
                  { "id": "min_value", "value": "1" },
                  { "id": "max_value", "value": "4" },
                  { "id": "step", "value": "1" },
                  { "id": "sampling", "value": "'linear'" }
                ],
                "commentText": "",
                "commentType": "plain",
                "inputHandles": [],
                "outputHandles": ["int"],
                "elementID": "GetTunableInt"
              },
              "width": 353,
              "height": 203,
              "selected": true,
              "positionAbsolute": { "x": -595, "y": -390 },
              "dragging": false
            },
            {
              "id": "FunctionNode_GetTunableInt_5655",
              "position": { "x": -590, "y": -660 },
              "type": "FunctionNode",
              "data": {
                "name": "Get Tunable Int",
                "hyperparams": [
                  { "id": "name", "value": null },
                  { "id": "min_value", "value": "32" },
                  { "id": "max_value", "value": "512" },
                  { "id": "step", "value": "32" },
                  { "id": "sampling", "value": "'linear'" }
                ],
                "commentText": "",
                "commentType": "plain",
                "inputHandles": [],
                "outputHandles": ["int"],
                "elementID": "GetTunableInt"
              },
              "width": 353,
              "height": 203,
              "selected": false,
              "positionAbsolute": { "x": -590, "y": -660 },
              "dragging": false
            },
            {
              "id": "Output_3442",
              "position": { "x": -50, "y": -585 },
              "type": "DataVariable/IN",
              "data": { "hyperparams": [], "name": "hp_units" },
              "width": 200,
              "height": 50,
              "selected": false,
              "positionAbsolute": { "x": -50, "y": -585 },
              "dragging": false
            },
            {
              "id": "Output_3588",
              "position": { "x": -40, "y": -315 },
              "type": "DataVariable/IN",
              "data": { "hyperparams": [], "name": "hp_layers" },
              "width": 200,
              "height": 50,
              "selected": false,
              "positionAbsolute": { "x": -40, "y": -315 },
              "dragging": false
            },
            {
              "id": "Output_6718",
              "position": { "x": -15, "y": 535 },
              "type": "DataVariable/OUT",
              "data": { "hyperparams": [], "name": "hp_units" },
              "width": 200,
              "height": 50,
              "selected": false,
              "positionAbsolute": { "x": -15, "y": 535 },
              "dragging": false
            },
            {
              "id": "Output_6923",
              "position": { "x": 400, "y": 520 },
              "type": "DataVariable/OUT",
              "data": { "hyperparams": [], "name": "hp_units" },
              "width": 200,
              "height": 50,
              "selected": false,
              "positionAbsolute": { "x": 400, "y": 520 },
              "dragging": false
            },
            {
              "id": "Output_7254",
              "position": { "x": 635, "y": 155 },
              "type": "DataVariable/OUT",
              "data": { "hyperparams": [], "name": "hp_layers" },
              "width": 200,
              "height": 50,
              "selected": false,
              "positionAbsolute": { "x": 635, "y": 155 },
              "dragging": false
            },
            {
              "id": "FunctionNode_Flatten_919",
              "position": { "x": -240, "y": 235 },
              "type": "FunctionNode",
              "data": {
                "name": "Flatten",
                "hyperparams": [],
                "commentText": "",
                "commentType": "plain",
                "inputHandles": ["payload"],
                "outputHandles": ["payload"],
                "elementID": "Flatten"
              },
              "width": 353,
              "height": 203,
              "selected": false,
              "positionAbsolute": { "x": -240, "y": 235 },
              "dragging": false
            },
            {
              "id": "FunctionNode_CreateAndApplyDenseLayer_4849",
              "position": { "x": 1385, "y": 260 },
              "type": "FunctionNode",
              "data": {
                "name": "Create and Apply Dense Layer",
                "hyperparams": [
                  { "id": "units", "value": "10" },
                  { "id": "activation", "value": "softmax" }
                ],
                "commentText": "",
                "commentType": "plain",
                "inputHandles": ["payload"],
                "outputHandles": ["payload"],
                "elementID": "CreateAndApplyDenseLayer"
              },
              "width": 353,
              "height": 203,
              "selected": false,
              "positionAbsolute": { "x": 1385, "y": 260 },
              "dragging": false
            },
            {
              "id": "PackerNode_4040",
              "position": { "x": 735, "y": 320 },
              "type": "Packer/Named",
              "data": {
                "hyperparams": [{ "id": "packingCount", "value": 2 }],
                "commentText": "",
                "commentType": "plain"
              },
              "width": 50,
              "height": 40,
              "selected": false,
              "positionAbsolute": { "x": 735, "y": 320 },
              "dragging": false
            },
            {
              "id": "UnpackerNode_1373",
              "position": { "x": 1230, "y": 340 },
              "type": "Unpacker/Named",
              "data": { "commentText": "", "commentType": "plain" },
              "width": 50,
              "height": 40,
              "selected": false,
              "positionAbsolute": { "x": 1230, "y": 340 },
              "dragging": false
            },
            {
              "id": "FunctionNode_CreateAndApplyDenseLayer_9091",
              "position": { "x": 255, "y": 235 },
              "type": "FunctionNode",
              "data": {
                "name": "Create and Apply Dense Layer",
                "hyperparams": [
                  { "id": "units", "value": "" },
                  { "id": "activation", "value": "relu" }
                ],
                "commentText": "",
                "commentType": "plain",
                "inputHandles": ["payload"],
                "outputHandles": ["payload"],
                "elementID": "CreateAndApplyDenseLayer"
              },
              "width": 353,
              "height": 203,
              "selected": false,
              "positionAbsolute": { "x": 255, "y": 235 },
              "dragging": false
            },
            {
              "id": "FunctionNode_RepeatLoop_ArtefactImporter_2040",
              "position": { "x": 920, "y": 255 },
              "type": "Loop/Repeat",
              "data": {
                "enclosedNodeType": "FunctionNode/ArtefactImporter",
                "name": "tmp1",
                "hyperparams": [],
                "commentText": "",
                "commentType": "plain",
                "elementID": "ArtefactImporter"
              },
              "width": 214,
              "height": 200,
              "selected": false,
              "positionAbsolute": { "x": 920, "y": 255 },
              "dragging": false
            },
            {
              "id": "FunctionNode_ArrayInput_1884",
              "position": { "x": -600, "y": 290 },
              "type": "FunctionNode/ArrayInput",
              "data": {
                "name": "Array Input",
                "hyperparams": [{ "id": "input_shape", "value": "(784,)" }],
                "commentText": "",
                "commentType": "plain",
                "inputHandles": [],
                "outputHandles": ["array"],
                "elementID": "ArrayInput"
              },
              "width": 230,
              "height": 100,
              "selected": false,
              "positionAbsolute": { "x": -600, "y": 290 },
              "dragging": false
            },
            {
              "id": "FunctionNode_RecordArrayOutput_2420",
              "position": { "x": 105, "y": 110 },
              "type": "FunctionNode/RecordArrayOutput",
              "data": {
                "name": "Record Array Output",
                "hyperparams": [],
                "commentText": "",
                "commentType": "plain",
                "inputHandles": ["array"],
                "outputHandles": [],
                "elementID": "RecordArrayOutput"
              },
              "width": 200,
              "height": 100,
              "selected": false,
              "positionAbsolute": { "x": 105, "y": 110 },
              "dragging": false
            }
          ],
          "edges": [
            {
              "id": "Output_3442_input",
              "source": "FunctionNode_GetTunableInt_5655",
              "sourceHandle": "int",
              "target": "Output_3442",
              "targetHandle": "input",
              "label": "",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "Output_3588_input",
              "source": "FunctionNode_GetTunableInt_5167",
              "sourceHandle": "int",
              "target": "Output_3588",
              "targetHandle": "input",
              "label": "",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "FunctionNode_CreateAndApplyDenseLayer_9091_payload",
              "source": "FunctionNode_Flatten_919",
              "sourceHandle": "payload",
              "target": "FunctionNode_CreateAndApplyDenseLayer_9091",
              "targetHandle": "payload",
              "label": "",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "PackerNode_4040_multi-in+5949",
              "source": "FunctionNode_CreateAndApplyDenseLayer_9091",
              "sourceHandle": "payload",
              "target": "PackerNode_4040",
              "targetHandle": "multi-in",
              "label": "payload",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "FunctionNode_RepeatLoop_ArtefactImporter_2040_iteration-count",
              "source": "Output_7254",
              "sourceHandle": "output",
              "target": "FunctionNode_RepeatLoop_ArtefactImporter_2040",
              "targetHandle": "iteration-count",
              "label": "",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "FunctionNode_RepeatLoop_ArtefactImporter_2040_multi-in+9599",
              "source": "PackerNode_4040",
              "sourceHandle": "out",
              "target": "FunctionNode_RepeatLoop_ArtefactImporter_2040",
              "targetHandle": "multi-in",
              "label": "",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "UnpackerNode_1373_in",
              "source": "FunctionNode_RepeatLoop_ArtefactImporter_2040",
              "sourceHandle": "out",
              "target": "UnpackerNode_1373",
              "targetHandle": "in",
              "label": "",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "FunctionNode_CreateAndApplyDenseLayer_4849_payload",
              "source": "UnpackerNode_1373",
              "sourceHandle": "out",
              "target": "FunctionNode_CreateAndApplyDenseLayer_4849",
              "targetHandle": "payload",
              "label": "payload",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "FunctionNode_CreateAndApplyDenseLayer_9091_multi-in+7296",
              "source": "Output_6718",
              "sourceHandle": "output",
              "target": "FunctionNode_CreateAndApplyDenseLayer_9091",
              "targetHandle": "multi-in",
              "label": "units",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "PackerNode_4040_multi-in+9801",
              "source": "Output_6923",
              "sourceHandle": "output",
              "target": "PackerNode_4040",
              "targetHandle": "multi-in",
              "label": "units",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "FunctionNode_Flatten_919_payload",
              "source": "FunctionNode_ArrayInput_1884",
              "sourceHandle": "out",
              "target": "FunctionNode_Flatten_919",
              "targetHandle": "payload",
              "label": ""
            }
          ]
        },
        "isFolder": false,
        "children": []
      },
      "/Demo Project/tuner/tmp1.dc": {
        "index": "/Demo Project/tuner/tmp1.dc",
        "data": {
          "name": "tmp1.dc",
          "folder": false,
          "artefact": false,
          "unsaved": true,
          "filetype": "dc",
          "artefacttype": "ArtefactType",
          "nodes": [
            {
              "id": "FunctionNode_CreateAndApplyDenseLayer_5888",
              "position": { "x": 330, "y": 85 },
              "type": "FunctionNode",
              "data": {
                "name": "Create and Apply Dense Layer",
                "hyperparams": [
                  { "id": "units", "value": null },
                  { "id": "activation", "value": "None" }
                ],
                "commentText": "",
                "commentType": "plain",
                "inputHandles": ["payload"],
                "outputHandles": ["payload"],
                "elementID": "CreateAndApplyDenseLayer"
              },
              "width": 353,
              "height": 203,
              "selected": false,
              "positionAbsolute": { "x": 330, "y": 85 },
              "dragging": false
            },
            {
              "id": "Input_7356",
              "position": { "x": 5, "y": 235 },
              "type": "Input",
              "data": { "name": "hp_units" },
              "width": 153,
              "height": 100,
              "selected": false,
              "positionAbsolute": { "x": 5, "y": 235 },
              "dragging": false
            },
            {
              "id": "Input_2507",
              "position": { "x": 10, "y": 65 },
              "type": "Input",
              "data": { "name": "payload" },
              "width": 153,
              "height": 100,
              "selected": false,
              "positionAbsolute": { "x": 10, "y": 65 },
              "dragging": false
            },
            {
              "id": "Output_5171",
              "position": { "x": 795, "y": 135 },
              "type": "Output",
              "data": { "name": "payload" },
              "width": 153,
              "height": 100,
              "selected": false,
              "positionAbsolute": { "x": 795, "y": 135 },
              "dragging": false
            }
          ],
          "edges": [
            {
              "id": "Output_5171_in",
              "source": "FunctionNode_CreateAndApplyDenseLayer_5888",
              "sourceHandle": "payload",
              "target": "Output_5171",
              "targetHandle": "in",
              "label": "",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "FunctionNode_CreateAndApplyDenseLayer_5888_payload",
              "source": "Input_2507",
              "sourceHandle": "out",
              "target": "FunctionNode_CreateAndApplyDenseLayer_5888",
              "targetHandle": "payload",
              "label": "",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "FunctionNode_CreateAndApplyDenseLayer_5888_multi-in+6447",
              "source": "Input_7356",
              "sourceHandle": "out",
              "target": "FunctionNode_CreateAndApplyDenseLayer_5888",
              "targetHandle": "multi-in",
              "label": "units"
            }
          ]
        },
        "isFolder": false,
        "children": []
      },
      "/Demo Project/tuner/CompiledClassifierModel.dc": {
        "index": "/Demo Project/tuner/CompiledClassifierModel.dc",
        "data": {
          "name": "CompiledClassifierModel.dc",
          "folder": false,
          "artefact": false,
          "unsaved": true,
          "filetype": "dc",
          "artefacttype": "ModelCompilerType",
          "nodes": [
            {
              "id": "Output_1114",
              "position": { "x": 1415, "y": 30 },
              "type": "Output",
              "data": { "name": "Compiled Model" },
              "width": 153,
              "height": 100,
              "selected": false,
              "positionAbsolute": { "x": 1415, "y": 30 },
              "dragging": false
            },
            {
              "id": "FunctionNode_GenerateAdamOptimizer_9984",
              "position": { "x": 425, "y": 100 },
              "type": "FunctionNode",
              "data": {
                "name": "Generate ADAM Optimizer",
                "hyperparams": [{ "id": "learning_rate", "value": "0.001" }],
                "commentText": "",
                "commentType": "plain",
                "inputHandles": [],
                "outputHandles": ["Optimizer"],
                "elementID": "GenerateAdamOptimizer"
              },
              "width": 353,
              "height": 203,
              "selected": false,
              "positionAbsolute": { "x": 425, "y": 100 },
              "dragging": false
            },
            {
              "id": "FunctionNode_CompileModel_1908",
              "position": { "x": 960, "y": -20 },
              "type": "FunctionNode",
              "data": {
                "name": "Compile Model",
                "hyperparams": [],
                "commentText": "",
                "commentType": "plain",
                "inputHandles": ["model", "optimizer", "loss", "metrics"],
                "outputHandles": ["compiled-model"],
                "elementID": "CompileModel"
              },
              "width": 353,
              "height": 203,
              "selected": false,
              "positionAbsolute": { "x": 960, "y": -20 },
              "dragging": false
            },
            {
              "id": "FunctionNode_GetTunableFromList_1567",
              "position": { "x": -70, "y": 100 },
              "type": "FunctionNode",
              "data": {
                "name": "Get Tunable From List",
                "hyperparams": [
                  { "id": "name", "value": null },
                  { "id": "values", "value": null },
                  { "id": "ordered", "value": "None" }
                ],
                "commentText": "",
                "commentType": "plain",
                "inputHandles": [],
                "outputHandles": ["value"],
                "elementID": "GetTunableFromList"
              },
              "width": 353,
              "height": 203,
              "selected": false,
              "positionAbsolute": { "x": -70, "y": 100 },
              "dragging": false
            },
            {
              "id": "FunctionNode_RawData_612",
              "position": { "x": -435, "y": 145 },
              "type": "FunctionNode/RawData",
              "data": {
                "name": "Emit Raw Data",
                "hyperparams": [{ "id": "raw-python-data", "value": "None" }],
                "commentText": "",
                "commentType": "plain",
                "elementID": "RawData",
                "innerCode": "[1e-2, 1e-3, 1e-4]"
              },
              "width": 180,
              "height": 120,
              "selected": false,
              "positionAbsolute": { "x": -435, "y": 145 },
              "dragging": false
            },
            {
              "id": "FunctionNode_RawData_1175",
              "position": { "x": 520, "y": 425 },
              "type": "FunctionNode/RawData",
              "data": {
                "name": "Emit Raw Data",
                "hyperparams": [{ "id": "raw-python-data", "value": "None" }],
                "commentText": "",
                "commentType": "plain",
                "elementID": "RawData",
                "innerCode": "1e-3"
              },
              "width": 180,
              "height": 120,
              "selected": true,
              "positionAbsolute": { "x": 520, "y": 425 },
              "dragging": false
            },
            {
              "id": "FunctionNode_RawData_2107",
              "position": { "x": 525, "y": 625 },
              "type": "FunctionNode/RawData",
              "data": {
                "name": "Emit Raw Data",
                "hyperparams": [{ "id": "raw-python-data", "value": "None" }],
                "commentText": "",
                "commentType": "plain",
                "elementID": "RawData",
                "innerCode": "1e-4"
              },
              "width": 180,
              "height": 120,
              "selected": false,
              "positionAbsolute": { "x": 525, "y": 625 },
              "dragging": false
            },
            {
              "id": "FunctionNode_ArtefactImporter_9042",
              "position": { "x": 355, "y": -115 },
              "type": "FunctionNode/ArtefactImporter",
              "data": {
                "name": "Classifier Model",
                "hyperparams": [],
                "commentText": "",
                "commentType": "plain",
                "elementID": "ArtefactImporter"
              },
              "width": 400,
              "height": 60,
              "selected": false,
              "positionAbsolute": { "x": 355, "y": -115 },
              "dragging": false
            }
          ],
          "edges": [
            {
              "id": "FunctionNode_GetTunableFromList_1567_multi-in+326",
              "source": "FunctionNode_RawData_612",
              "sourceHandle": "out",
              "target": "FunctionNode_GetTunableFromList_1567",
              "targetHandle": "multi-in",
              "label": "",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "FunctionNode_GenerateAdamOptimizer_9984_multi-in+923",
              "source": "FunctionNode_GetTunableFromList_1567",
              "sourceHandle": "value",
              "target": "FunctionNode_GenerateAdamOptimizer_9984",
              "targetHandle": "multi-in",
              "label": "",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "FunctionNode_CompileModel_1908_model",
              "source": "FunctionNode_ArtefactImporter_9042",
              "sourceHandle": "out",
              "target": "FunctionNode_CompileModel_1908",
              "targetHandle": "model",
              "label": "",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "FunctionNode_CompileModel_1908_optimizer",
              "source": "FunctionNode_GenerateAdamOptimizer_9984",
              "sourceHandle": "Optimizer",
              "target": "FunctionNode_CompileModel_1908",
              "targetHandle": "optimizer",
              "label": "",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "FunctionNode_CompileModel_1908_loss",
              "source": "FunctionNode_RawData_1175",
              "sourceHandle": "out",
              "target": "FunctionNode_CompileModel_1908",
              "targetHandle": "loss",
              "label": "",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "FunctionNode_CompileModel_1908_metrics",
              "source": "FunctionNode_RawData_2107",
              "sourceHandle": "out",
              "target": "FunctionNode_CompileModel_1908",
              "targetHandle": "metrics",
              "label": "",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "Output_1114_in",
              "source": "FunctionNode_CompileModel_1908",
              "sourceHandle": "compiled-model",
              "target": "Output_1114",
              "targetHandle": "in",
              "label": ""
            }
          ]
        },
        "isFolder": false,
        "children": []
      },
      "/Demo Project/tuner/MNISTDataLoader.dc": {
        "index": "/Demo Project/tuner/MNISTDataLoader.dc",
        "data": {
          "name": "MNISTDataLoader.dc",
          "folder": false,
          "artefact": false,
          "unsaved": true,
          "filetype": "dc",
          "artefacttype": "DataLoaderType",
          "nodes": [
            {
              "id": "FunctionNode_ScalarDivide_7702",
              "position": { "x": 660, "y": 80 },
              "type": "FunctionNode",
              "data": {
                "name": "Divide by Scalar",
                "hyperparams": [],
                "commentText": "",
                "commentType": "plain",
                "inputHandles": ["dividend", "divisor"],
                "outputHandles": ["result"],
                "elementID": "ScalarDivide"
              },
              "width": 353,
              "height": 203,
              "selected": false,
              "positionAbsolute": { "x": 660, "y": 80 },
              "dragging": false
            },
            {
              "id": "FunctionNode_ScalarDivide_2003",
              "position": { "x": 660, "y": -155 },
              "type": "FunctionNode",
              "data": {
                "name": "Divide by Scalar",
                "hyperparams": [],
                "commentText": "",
                "commentType": "plain",
                "inputHandles": ["dividend", "divisor"],
                "outputHandles": ["result"],
                "elementID": "ScalarDivide"
              },
              "width": 353,
              "height": 203,
              "selected": true,
              "positionAbsolute": { "x": 660, "y": -155 },
              "dragging": false
            },
            {
              "id": "FunctionNode_LoadMNISTDataset_6724",
              "position": { "x": 80, "y": 160 },
              "type": "FunctionNode",
              "data": {
                "name": "Load MNIST Dataset",
                "hyperparams": [],
                "commentText": "",
                "commentType": "plain",
                "inputHandles": [],
                "outputHandles": ["x_train", "y_train", "x_test", "y_test"],
                "elementID": "LoadMNISTDataset"
              },
              "width": 353,
              "height": 203,
              "selected": false,
              "positionAbsolute": { "x": 80, "y": 160 },
              "dragging": false
            },
            {
              "id": "Output_2250",
              "position": { "x": 1125, "y": 670 },
              "type": "Output",
              "data": { "name": "y_test" },
              "width": 153,
              "height": 100,
              "selected": false,
              "positionAbsolute": { "x": 1125, "y": 670 },
              "dragging": false
            },
            {
              "id": "Output_2707",
              "position": { "x": 1285, "y": 150 },
              "type": "Output",
              "data": { "name": "x_test" },
              "width": 153,
              "height": 100,
              "selected": false,
              "positionAbsolute": { "x": 1285, "y": 150 },
              "dragging": false
            },
            {
              "id": "Output_3326",
              "position": { "x": 1290, "y": -95 },
              "type": "Output",
              "data": { "name": "x_train" },
              "width": 153,
              "height": 100,
              "selected": false,
              "positionAbsolute": { "x": 1290, "y": -95 },
              "dragging": false
            },
            {
              "id": "Output_2844",
              "position": { "x": 1125, "y": 510 },
              "type": "Output",
              "data": { "name": "y_train" },
              "width": 153,
              "height": 100,
              "selected": false,
              "positionAbsolute": { "x": 1125, "y": 510 },
              "dragging": false
            },
            {
              "id": "FunctionNode_RawData_3720",
              "position": { "x": 160, "y": -65 },
              "type": "FunctionNode/RawData",
              "data": {
                "name": "Emit Raw Data",
                "hyperparams": [{ "id": "raw-python-data", "value": "None" }],
                "commentText": "",
                "commentType": "plain",
                "elementID": "RawData",
                "innerCode": "255.0"
              },
              "width": 180,
              "height": 120,
              "selected": false,
              "positionAbsolute": { "x": 160, "y": -65 },
              "dragging": false
            }
          ],
          "edges": [
            {
              "id": "FunctionNode_ScalarDivide_2003_dividend",
              "source": "FunctionNode_LoadMNISTDataset_6724",
              "sourceHandle": "x_train",
              "target": "FunctionNode_ScalarDivide_2003",
              "targetHandle": "dividend",
              "label": "x_train",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "FunctionNode_ScalarDivide_7702_dividend",
              "source": "FunctionNode_LoadMNISTDataset_6724",
              "sourceHandle": "x_test",
              "target": "FunctionNode_ScalarDivide_7702",
              "targetHandle": "dividend",
              "label": "x_test",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "Output_2844_in",
              "source": "FunctionNode_LoadMNISTDataset_6724",
              "sourceHandle": "y_train",
              "target": "Output_2844",
              "targetHandle": "in",
              "label": "y_train",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "Output_2250_in",
              "source": "FunctionNode_LoadMNISTDataset_6724",
              "sourceHandle": "y_test",
              "target": "Output_2250",
              "targetHandle": "in",
              "label": "y_test",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "Output_3326_in",
              "source": "FunctionNode_ScalarDivide_2003",
              "sourceHandle": "result",
              "target": "Output_3326",
              "targetHandle": "in",
              "label": "",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "Output_2707_in",
              "source": "FunctionNode_ScalarDivide_7702",
              "sourceHandle": "result",
              "target": "Output_2707",
              "targetHandle": "in",
              "label": "",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "FunctionNode_ScalarDivide_2003_divisor",
              "source": "FunctionNode_RawData_3720",
              "sourceHandle": "out",
              "target": "FunctionNode_ScalarDivide_2003",
              "targetHandle": "divisor",
              "label": "",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "FunctionNode_ScalarDivide_7702_divisor",
              "source": "FunctionNode_RawData_3720",
              "sourceHandle": "out",
              "target": "FunctionNode_ScalarDivide_7702",
              "targetHandle": "divisor",
              "label": ""
            }
          ]
        },
        "isFolder": false,
        "children": []
      },
      "/Demo Project/tuner/ModelTuner.dc": {
        "index": "/Demo Project/tuner/ModelTuner.dc",
        "data": {
          "name": "ModelTuner.dc",
          "folder": false,
          "artefact": false,
          "unsaved": true,
          "filetype": "dc",
          "artefacttype": "ModelTunerArtefact",
          "nodes": [
            {
              "id": "FunctionNode_LoadMNISTDataset_9379",
              "position": { "x": -130, "y": 185 },
              "type": "FunctionNode",
              "data": {
                "name": "Load MNIST Dataset",
                "hyperparams": [],
                "commentText": "",
                "commentType": "plain",
                "inputHandles": [],
                "outputHandles": ["x_train", "y_train", "x_test", "y_test"],
                "elementID": "LoadMNISTDataset"
              },
              "width": 353,
              "height": 203,
              "selected": false,
              "positionAbsolute": { "x": -130, "y": 185 },
              "dragging": false
            },
            {
              "id": "FunctionNode_GetBestModelAfterTuning_6214",
              "position": { "x": 605, "y": 105 },
              "type": "FunctionNode",
              "data": {
                "name": "Get Best Model After Tuning",
                "hyperparams": [
                  { "id": "objective", "value": "'val_loss'" },
                  { "id": "max_trials", "value": "5" },
                  { "id": "epochs", "value": "5" }
                ],
                "commentText": "",
                "commentType": "plain",
                "inputHandles": ["build_model"],
                "outputHandles": ["best-model"],
                "elementID": "GetBestModelAfterTuning"
              },
              "width": 353,
              "height": 203,
              "selected": false,
              "positionAbsolute": { "x": 605, "y": 105 },
              "dragging": false
            },
            {
              "id": "Output_1475",
              "position": { "x": 1075, "y": 165 },
              "type": "Output",
              "data": { "name": "model" },
              "width": 153,
              "height": 100,
              "selected": true,
              "positionAbsolute": { "x": 1075, "y": 165 },
              "dragging": false
            },
            {
              "id": "CallBackNode_9523",
              "position": { "x": 10, "y": 40 },
              "data": { "name": "Compiled Classifier Model" },
              "type": "Callback",
              "width": 50,
              "height": 40,
              "selected": false,
              "positionAbsolute": { "x": 10, "y": 40 },
              "dragging": false
            },
            {
              "id": "PackerNode_9523",
              "position": { "x": 410, "y": 245 },
              "type": "Packer/Named",
              "data": {
                "hyperparams": [{ "id": "packingCount", "value": 2 }],
                "commentText": "",
                "commentType": "plain"
              },
              "width": 50,
              "height": 40,
              "selected": false,
              "positionAbsolute": { "x": 410, "y": 245 },
              "dragging": false
            }
          ],
          "edges": [
            {
              "id": "FunctionNode_GetBestModelAfterTuning_6214_build_model",
              "source": "CallBackNode_9523",
              "sourceHandle": "in",
              "target": "FunctionNode_GetBestModelAfterTuning_6214",
              "targetHandle": "build_model",
              "label": "build_model",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "PackerNode_9523_multi-in+5023",
              "source": "FunctionNode_LoadMNISTDataset_9379",
              "sourceHandle": "x_train",
              "target": "PackerNode_9523",
              "targetHandle": "multi-in",
              "label": "",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "PackerNode_9523_multi-in+304",
              "source": "FunctionNode_LoadMNISTDataset_9379",
              "sourceHandle": "y_train",
              "target": "PackerNode_9523",
              "targetHandle": "multi-in",
              "label": "",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "PackerNode_9523_multi-in+3929",
              "source": "FunctionNode_LoadMNISTDataset_9379",
              "sourceHandle": "x_test",
              "target": "PackerNode_9523",
              "targetHandle": "multi-in",
              "label": "",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "PackerNode_9523_multi-in+8146",
              "source": "FunctionNode_LoadMNISTDataset_9379",
              "sourceHandle": "y_test",
              "target": "PackerNode_9523",
              "targetHandle": "multi-in",
              "label": "",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "FunctionNode_GetBestModelAfterTuning_6214_multi-in+8878",
              "source": "PackerNode_9523",
              "sourceHandle": "out",
              "target": "FunctionNode_GetBestModelAfterTuning_6214",
              "targetHandle": "multi-in",
              "label": "",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "Output_1475_in",
              "source": "FunctionNode_GetBestModelAfterTuning_6214",
              "sourceHandle": "best-model",
              "target": "Output_1475",
              "targetHandle": "in",
              "label": ""
            }
          ]
        },
        "isFolder": false,
        "children": []
      },
      "/Demo Project/tuner/ModelEvaluator.dc": {
        "index": "/Demo Project/tuner/ModelEvaluator.dc",
        "data": {
          "name": "ModelEvaluator.dc",
          "folder": false,
          "artefact": false,
          "unsaved": true,
          "filetype": "dc",
          "artefacttype": "ModelEvaluatorArtefact",
          "nodes": [
            {
              "id": "FunctionNode_EvaluateModel_8759",
              "position": { "x": 775, "y": -25 },
              "type": "FunctionNode",
              "data": {
                "name": "Evaluate Model",
                "hyperparams": [],
                "commentText": "",
                "commentType": "plain",
                "inputHandles": ["model", "x", "y"],
                "outputHandles": [],
                "elementID": "EvaluateModel"
              },
              "width": 353,
              "height": 203,
              "selected": false,
              "positionAbsolute": { "x": 775, "y": -25 },
              "dragging": false
            },
            {
              "id": "FunctionNode_ArtefactImporter_7192",
              "position": { "x": 210, "y": -45 },
              "type": "FunctionNode/ArtefactImporter",
              "data": {
                "name": "Model Tuner",
                "hyperparams": [],
                "commentText": "",
                "commentType": "plain",
                "elementID": "ArtefactImporter"
              },
              "width": 400,
              "height": 60,
              "selected": false,
              "positionAbsolute": { "x": 210, "y": -45 },
              "dragging": false
            },
            {
              "id": "FunctionNode_ArtefactImporter_1296",
              "position": { "x": 200, "y": 105 },
              "type": "FunctionNode/ArtefactImporter",
              "data": {
                "name": "MNIST Data Loader",
                "hyperparams": [],
                "commentText": "",
                "commentType": "plain",
                "elementID": "ArtefactImporter"
              },
              "width": 400,
              "height": 60,
              "selected": false,
              "positionAbsolute": { "x": 200, "y": 105 },
              "dragging": false
            }
          ],
          "edges": [
            {
              "id": "FunctionNode_EvaluateModel_8759_x",
              "source": "FunctionNode_ArtefactImporter_1296",
              "sourceHandle": "out",
              "target": "FunctionNode_EvaluateModel_8759",
              "targetHandle": "x",
              "label": "",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "FunctionNode_EvaluateModel_8759_y",
              "source": "FunctionNode_ArtefactImporter_1296",
              "sourceHandle": "out",
              "target": "FunctionNode_EvaluateModel_8759",
              "targetHandle": "y",
              "label": "",
              "animated": true,
              "style": { "stroke": "#000", "strokeWidth": 1.5 }
            },
            {
              "id": "FunctionNode_EvaluateModel_8759_model",
              "source": "FunctionNode_ArtefactImporter_7192",
              "sourceHandle": "out",
              "target": "FunctionNode_EvaluateModel_8759",
              "targetHandle": "model",
              "label": ""
            }
          ]
        },
        "isFolder": false,
        "children": []
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
              type: "Unpacker/Named",
              data: {},
            },
            {
              id: "3",
              position: {
                x: 100,
                y: 100,
                zoom: 1,
              },
              type: "Packer/Named",
              data: {},
            },
            {
              id: "2",
              position: {
                x: 200,
                y: 100,
                zoom: 1,
              },
              type: "Unpacker/Named",
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
          nodes: [],
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
