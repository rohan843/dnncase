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
            {
              id: "FunctionNode_LoadMNISTDataset_5832",
              position: {
                x: -10,
                y: 515,
              },
              type: "FunctionNode",
              data: {
                name: "Load MNIST Dataset",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                inputHandles: [],
                outputHandles: ["mnist-data"],
                elementID: "LoadMNISTDataset",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: -10,
                y: 515,
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
            {
              id: "FunctionNode_Reshape_251_array",
              source: "FunctionNode_LoadMNISTDataset_5832",
              sourceHandle: "mnist-data",
              target: "FunctionNode_Reshape_251",
              targetHandle: "array",
              label: "x_train",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "Output_1864_in",
              source: "FunctionNode_LoadMNISTDataset_5832",
              sourceHandle: "mnist-data",
              target: "Output_1864",
              targetHandle: "in",
              label: "y_train",
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
          nodes: [
            {
              id: "FunctionNode_CreateAndApplyDenseLayer_9093",
              position: {
                x: -640,
                y: 45,
              },
              type: "FunctionNode",
              data: {
                name: "Create and Apply Dense Layer",
                hyperparams: [
                  {
                    id: "units",
                    value: "7*7*256",
                  },
                  {
                    id: "activation",
                    value: "leakyrelu",
                  },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: ["payload"],
                outputHandles: ["payload"],
                elementID: "CreateAndApplyDenseLayer",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: -640,
                y: 45,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_ReshapeLayer_521",
              position: {
                x: -240,
                y: 45,
              },
              type: "FunctionNode",
              data: {
                name: "Reshape Layer",
                hyperparams: [
                  {
                    id: "shape",
                    value: "(7, 7, 256)",
                  },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: ["payload"],
                outputHandles: ["payload"],
                elementID: "ReshapeLayer",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: -240,
                y: 45,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_CreateAndApplyConv2DTransposeLayer_1466",
              position: {
                x: 190,
                y: 45,
              },
              type: "FunctionNode",
              data: {
                name: "Create and Apply Conv2DTranspose Layer",
                hyperparams: [
                  {
                    id: "activation",
                    value: "leakyrelu",
                  },
                  {
                    id: "filters",
                    value: "128",
                  },
                  {
                    id: "kernel_size",
                    value: "(5, 5)",
                  },
                  {
                    id: "strides",
                    value: "(1, 1)",
                  },
                  {
                    id: "padding",
                    value: "'same'",
                  },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: ["payload"],
                outputHandles: ["payload"],
                elementID: "CreateAndApplyConv2DTransposeLayer",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 190,
                y: 45,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_ArrayInput_6796",
              position: {
                x: -1030,
                y: 100,
              },
              type: "FunctionNode/ArrayInput",
              data: {
                name: "Array Input",
                hyperparams: [
                  {
                    id: "input_shape",
                    value: "(100,)",
                  },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: [],
                outputHandles: ["array"],
                elementID: "ArrayInput",
              },
              width: 230,
              height: 100,
              selected: false,
              positionAbsolute: {
                x: -1030,
                y: 100,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_CreateAndApplyConv2DTransposeLayer_1058",
              position: {
                x: 625,
                y: 45,
              },
              type: "FunctionNode",
              data: {
                name: "Create and Apply Conv2DTranspose Layer",
                hyperparams: [
                  {
                    id: "activation",
                    value: "leakyrelu",
                  },
                  {
                    id: "filters",
                    value: "64",
                  },
                  {
                    id: "kernel_size",
                    value: null,
                  },
                  {
                    id: "strides",
                    value: "(2, 2)",
                  },
                  {
                    id: "padding",
                    value: "'same'",
                  },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: ["payload"],
                outputHandles: ["payload"],
                elementID: "CreateAndApplyConv2DTransposeLayer",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 625,
                y: 45,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_CreateAndApplyConv2DTransposeLayer_1275",
              position: {
                x: 1055,
                y: 45,
              },
              type: "FunctionNode",
              data: {
                name: "Create and Apply Conv2DTranspose Layer",
                hyperparams: [
                  {
                    id: "activation",
                    value: "tanh",
                  },
                  {
                    id: "filters",
                    value: "1",
                  },
                  {
                    id: "kernel_size",
                    value: null,
                  },
                  {
                    id: "strides",
                    value: "(2, 2)",
                  },
                  {
                    id: "padding",
                    value: "'same'",
                  },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: ["payload"],
                outputHandles: ["payload"],
                elementID: "CreateAndApplyConv2DTransposeLayer",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 1055,
                y: 45,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_RecordArrayOutput_6302",
              position: {
                x: 1555,
                y: 100,
              },
              type: "FunctionNode/RecordArrayOutput",
              data: {
                name: "Record Array Output",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                inputHandles: ["array"],
                outputHandles: [],
                elementID: "RecordArrayOutput",
              },
              width: 200,
              height: 100,
              selected: true,
              positionAbsolute: {
                x: 1555,
                y: 100,
              },
              dragging: false,
            },
          ],
          edges: [
            {
              id: "FunctionNode_CreateAndApplyDenseLayer_9093_payload",
              source: "FunctionNode_ArrayInput_6796",
              sourceHandle: "out",
              target: "FunctionNode_CreateAndApplyDenseLayer_9093",
              targetHandle: "payload",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_ReshapeLayer_521_payload",
              source: "FunctionNode_CreateAndApplyDenseLayer_9093",
              sourceHandle: "payload",
              target: "FunctionNode_ReshapeLayer_521",
              targetHandle: "payload",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_CreateAndApplyConv2DTransposeLayer_1466_payload",
              source: "FunctionNode_ReshapeLayer_521",
              sourceHandle: "payload",
              target: "FunctionNode_CreateAndApplyConv2DTransposeLayer_1466",
              targetHandle: "payload",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_CreateAndApplyConv2DTransposeLayer_1058_payload",
              source: "FunctionNode_CreateAndApplyConv2DTransposeLayer_1466",
              sourceHandle: "payload",
              target: "FunctionNode_CreateAndApplyConv2DTransposeLayer_1058",
              targetHandle: "payload",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_CreateAndApplyConv2DTransposeLayer_1275_payload",
              source: "FunctionNode_CreateAndApplyConv2DTransposeLayer_1058",
              sourceHandle: "payload",
              target: "FunctionNode_CreateAndApplyConv2DTransposeLayer_1275",
              targetHandle: "payload",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_RecordArrayOutput_6302_in",
              source: "FunctionNode_CreateAndApplyConv2DTransposeLayer_1275",
              sourceHandle: "payload",
              target: "FunctionNode_RecordArrayOutput_6302",
              targetHandle: "in",
              label: "",
            },
          ],
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
          nodes: [
            {
              id: "FunctionNode_ArrayInput_152",
              position: {
                x: -1295,
                y: -100,
              },
              type: "FunctionNode/ArrayInput",
              data: {
                name: "Array Input",
                hyperparams: [
                  {
                    id: "input_shape",
                    value: "[28, 28, 1]",
                  },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: [],
                outputHandles: ["array"],
                elementID: "ArrayInput",
              },
              width: 230,
              height: 100,
              selected: false,
              positionAbsolute: {
                x: -1295,
                y: -100,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_RecordArrayOutput_920",
              position: {
                x: 1750,
                y: -100,
              },
              type: "FunctionNode/RecordArrayOutput",
              data: {
                name: "Record Array Output",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                inputHandles: ["array"],
                outputHandles: [],
                elementID: "RecordArrayOutput",
              },
              width: 200,
              height: 100,
              selected: true,
              positionAbsolute: {
                x: 1750,
                y: -100,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_CreateAndApplyConv2DLayer_3100",
              position: {
                x: -930,
                y: -155,
              },
              type: "FunctionNode",
              data: {
                name: "Create and Apply Conv2D Layer",
                hyperparams: [
                  {
                    id: "activation",
                    value: "leakyrelu",
                  },
                  {
                    id: "filters",
                    value: "64",
                  },
                  {
                    id: "kernel_size",
                    value: "(5, 5)",
                  },
                  {
                    id: "strides",
                    value: "(2, 2)",
                  },
                  {
                    id: "padding",
                    value: "'same'",
                  },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: ["payload"],
                outputHandles: ["payload"],
                elementID: "CreateAndApplyConv2DLayer",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: -930,
                y: -155,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_Dropout_4028",
              position: {
                x: -470,
                y: -155,
              },
              type: "FunctionNode",
              data: {
                name: "Dropout Layer",
                hyperparams: [
                  {
                    id: "rate",
                    value: "0.3",
                  },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: ["payload"],
                outputHandles: ["payload"],
                elementID: "Dropout",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: -470,
                y: -155,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_CreateAndApplyConv2DLayer_5126",
              position: {
                x: -40,
                y: -155,
              },
              type: "FunctionNode",
              data: {
                name: "Create and Apply Conv2D Layer",
                hyperparams: [
                  {
                    id: "activation",
                    value: "leakyrelu",
                  },
                  {
                    id: "filters",
                    value: "128",
                  },
                  {
                    id: "kernel_size",
                    value: "(5, 5)",
                  },
                  {
                    id: "strides",
                    value: "(2, 2)",
                  },
                  {
                    id: "padding",
                    value: "'same'",
                  },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: ["payload"],
                outputHandles: ["payload"],
                elementID: "CreateAndApplyConv2DLayer",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: -40,
                y: -155,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_Dropout_6090",
              position: {
                x: 395,
                y: -155,
              },
              type: "FunctionNode",
              data: {
                name: "Dropout Layer",
                hyperparams: [
                  {
                    id: "rate",
                    value: "0.3",
                  },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: ["payload"],
                outputHandles: ["payload"],
                elementID: "Dropout",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 395,
                y: -155,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_Flatten_6700",
              position: {
                x: 830,
                y: -155,
              },
              type: "FunctionNode",
              data: {
                name: "Flatten",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                inputHandles: ["payload"],
                outputHandles: ["payload"],
                elementID: "Flatten",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 830,
                y: -155,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_CreateAndApplyDenseLayer_7904",
              position: {
                x: 1285,
                y: -155,
              },
              type: "FunctionNode",
              data: {
                name: "Create and Apply Dense Layer",
                hyperparams: [
                  {
                    id: "units",
                    value: "1",
                  },
                  {
                    id: "activation",
                    value: "None",
                  },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: ["payload"],
                outputHandles: ["payload"],
                elementID: "CreateAndApplyDenseLayer",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 1285,
                y: -155,
              },
              dragging: false,
            },
          ],
          edges: [
            {
              id: "FunctionNode_CreateAndApplyConv2DLayer_3100_payload",
              source: "FunctionNode_ArrayInput_152",
              sourceHandle: "out",
              target: "FunctionNode_CreateAndApplyConv2DLayer_3100",
              targetHandle: "payload",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_Dropout_4028_payload",
              source: "FunctionNode_CreateAndApplyConv2DLayer_3100",
              sourceHandle: "payload",
              target: "FunctionNode_Dropout_4028",
              targetHandle: "payload",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_CreateAndApplyConv2DLayer_5126_payload",
              source: "FunctionNode_Dropout_4028",
              sourceHandle: "payload",
              target: "FunctionNode_CreateAndApplyConv2DLayer_5126",
              targetHandle: "payload",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_Dropout_6090_payload",
              source: "FunctionNode_CreateAndApplyConv2DLayer_5126",
              sourceHandle: "payload",
              target: "FunctionNode_Dropout_6090",
              targetHandle: "payload",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_Flatten_6700_payload",
              source: "FunctionNode_Dropout_6090",
              sourceHandle: "payload",
              target: "FunctionNode_Flatten_6700",
              targetHandle: "payload",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_CreateAndApplyDenseLayer_7904_payload",
              source: "FunctionNode_Flatten_6700",
              sourceHandle: "payload",
              target: "FunctionNode_CreateAndApplyDenseLayer_7904",
              targetHandle: "payload",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_RecordArrayOutput_920_in",
              source: "FunctionNode_CreateAndApplyDenseLayer_7904",
              sourceHandle: "payload",
              target: "FunctionNode_RecordArrayOutput_920",
              targetHandle: "in",
              label: "",
            },
          ],
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
          nodes: [
            {
              id: "Input_1675",
              position: {
                x: 915,
                y: 90,
              },
              type: "Input",
              data: {
                name: "real_output",
              },
              width: 153,
              height: 100,
              selected: false,
              positionAbsolute: {
                x: 915,
                y: 90,
              },
              dragging: false,
            },
            {
              id: "Input_1853",
              position: {
                x: 925,
                y: 570,
              },
              type: "Input",
              data: {
                name: "fake_output",
              },
              width: 153,
              height: 100,
              selected: false,
              positionAbsolute: {
                x: 925,
                y: 570,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_ZerosLike_283",
              position: {
                x: 1200,
                y: 300,
              },
              type: "FunctionNode",
              data: {
                name: "Create Zeros Array Like Input",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                inputHandles: ["input"],
                outputHandles: ["array"],
                elementID: "ZerosLike",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 1200,
                y: 300,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_OnesLike_778",
              position: {
                x: 1200,
                y: -200,
              },
              type: "FunctionNode",
              data: {
                name: "Create Ones Array Like Input",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                inputHandles: ["input"],
                outputHandles: ["array"],
                elementID: "OnesLike",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 1200,
                y: -200,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_Add_7244",
              position: {
                x: 2280,
                y: 145,
              },
              type: "FunctionNode",
              data: {
                name: "Add",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                inputHandles: ["addend 1", "addend 2"],
                outputHandles: ["sum"],
                elementID: "Add",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 2280,
                y: 145,
              },
              dragging: false,
            },
            {
              id: "Output_6076",
              position: {
                x: 2840,
                y: 210,
              },
              type: "Output",
              data: {
                name: "loss",
              },
              width: 153,
              height: 100,
              selected: false,
              positionAbsolute: {
                x: 2840,
                y: 210,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_BinaryCrossentropy_5428",
              position: {
                x: 1700,
                y: 400,
              },
              type: "FunctionNode",
              data: {
                name: "Binary Crossentropy Loss",
                hyperparams: [
                  {
                    id: "from_logits",
                    value: "True",
                  },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: ["ground-truth", "prediction"],
                outputHandles: ["loss"],
                elementID: "BinaryCrossentropy",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 1700,
                y: 400,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_BinaryCrossentropy_5712",
              position: {
                x: 1700,
                y: -100,
              },
              type: "FunctionNode",
              data: {
                name: "Binary Crossentropy Loss",
                hyperparams: [
                  {
                    id: "from_logits",
                    value: "True",
                  },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: ["ground-truth", "prediction"],
                outputHandles: ["loss"],
                elementID: "BinaryCrossentropy",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 1700,
                y: -100,
              },
              dragging: false,
            },
          ],
          edges: [
            {
              id: "FunctionNode_OnesLike_778_input",
              source: "Input_1675",
              sourceHandle: "out",
              target: "FunctionNode_OnesLike_778",
              targetHandle: "input",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_ZerosLike_283_input",
              source: "Input_1853",
              sourceHandle: "out",
              target: "FunctionNode_ZerosLike_283",
              targetHandle: "input",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_BinaryCrossentropy_5712_ground-truth",
              source: "FunctionNode_OnesLike_778",
              sourceHandle: "array",
              target: "FunctionNode_BinaryCrossentropy_5712",
              targetHandle: "ground-truth",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_BinaryCrossentropy_5712_prediction",
              source: "Input_1675",
              sourceHandle: "out",
              target: "FunctionNode_BinaryCrossentropy_5712",
              targetHandle: "prediction",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_BinaryCrossentropy_5428_ground-truth",
              source: "FunctionNode_ZerosLike_283",
              sourceHandle: "array",
              target: "FunctionNode_BinaryCrossentropy_5428",
              targetHandle: "ground-truth",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_BinaryCrossentropy_5428_prediction",
              source: "Input_1853",
              sourceHandle: "out",
              target: "FunctionNode_BinaryCrossentropy_5428",
              targetHandle: "prediction",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_Add_7244_addend 1",
              source: "FunctionNode_BinaryCrossentropy_5712",
              sourceHandle: "loss",
              target: "FunctionNode_Add_7244",
              targetHandle: "addend 1",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_Add_7244_addend 2",
              source: "FunctionNode_BinaryCrossentropy_5428",
              sourceHandle: "loss",
              target: "FunctionNode_Add_7244",
              targetHandle: "addend 2",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "Output_6076_in",
              source: "FunctionNode_Add_7244",
              sourceHandle: "sum",
              target: "Output_6076",
              targetHandle: "in",
              label: "",
            },
          ],
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
          nodes: [
            {
              id: "Input_1801",
              position: {
                x: 15,
                y: 270,
              },
              type: "Input",
              data: {
                name: "fake_output",
              },
              width: 153,
              height: 100,
              selected: false,
              positionAbsolute: {
                x: 15,
                y: 270,
              },
              dragging: false,
            },
            {
              id: "Output_2169",
              position: {
                x: 1235,
                y: 225,
              },
              type: "Output",
              data: {
                name: "loss",
              },
              width: 153,
              height: 100,
              selected: true,
              positionAbsolute: {
                x: 1235,
                y: 225,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_BinaryCrossentropy_5735",
              position: {
                x: 795,
                y: 170,
              },
              type: "FunctionNode",
              data: {
                name: "Binary Crossentropy Loss",
                hyperparams: [
                  {
                    id: "from_logits",
                    value: "True",
                  },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: ["ground-truth", "prediction"],
                outputHandles: ["loss"],
                elementID: "BinaryCrossentropy",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 795,
                y: 170,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_OnesLike_3089",
              position: {
                x: 315,
                y: 25,
              },
              type: "FunctionNode",
              data: {
                name: "Create Ones Array Like Input",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                inputHandles: ["input"],
                outputHandles: ["array"],
                elementID: "OnesLike",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 315,
                y: 25,
              },
              dragging: false,
            },
          ],
          edges: [
            {
              id: "FunctionNode_OnesLike_3089_input",
              source: "Input_1801",
              sourceHandle: "out",
              target: "FunctionNode_OnesLike_3089",
              targetHandle: "input",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_BinaryCrossentropy_5735_ground-truth",
              source: "FunctionNode_OnesLike_3089",
              sourceHandle: "array",
              target: "FunctionNode_BinaryCrossentropy_5735",
              targetHandle: "ground-truth",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_BinaryCrossentropy_5735_prediction",
              source: "Input_1801",
              sourceHandle: "out",
              target: "FunctionNode_BinaryCrossentropy_5735",
              targetHandle: "prediction",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "Output_2169_in",
              source: "FunctionNode_BinaryCrossentropy_5735",
              sourceHandle: "loss",
              target: "Output_2169",
              targetHandle: "in",
              label: "",
            },
          ],
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
          nodes: [
            {
              id: "FunctionNode_GenerateAdamOptimizer_2299",
              position: {
                x: -265,
                y: -55,
              },
              type: "FunctionNode",
              data: {
                name: "Generate ADAM Optimizer",
                hyperparams: [
                  {
                    id: "learning_rate",
                    value: "0.001",
                  },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: [],
                outputHandles: ["Optimizer"],
                elementID: "GenerateAdamOptimizer",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: -265,
                y: -55,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_GenerateAdamOptimizer_2652",
              position: {
                x: -265,
                y: -305,
              },
              type: "FunctionNode",
              data: {
                name: "Generate ADAM Optimizer",
                hyperparams: [
                  {
                    id: "learning_rate",
                    value: "0.001",
                  },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: [],
                outputHandles: ["Optimizer"],
                elementID: "GenerateAdamOptimizer",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: -265,
                y: -305,
              },
              dragging: false,
            },
            {
              id: "Output_41",
              position: {
                x: 1195,
                y: -80,
              },
              type: "DataVariable/IN",
              data: {
                hyperparams: [],
                name: "discriminator",
              },
              width: 200,
              height: 50,
              selected: false,
              positionAbsolute: {
                x: 1195,
                y: -80,
              },
              dragging: false,
            },
            {
              id: "Output_237",
              position: {
                x: 1155,
                y: -215,
              },
              type: "DataVariable/IN",
              data: {
                hyperparams: [],
                name: "generator",
              },
              width: 200,
              height: 50,
              selected: false,
              positionAbsolute: {
                x: 1155,
                y: -215,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_ArtefactImporter_3883",
              position: {
                x: 665,
                y: -75,
              },
              type: "FunctionNode/ArtefactImporter",
              data: {
                name: "DiscriminatorModel",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                elementID: "ArtefactImporter",
              },
              width: 400,
              height: 60,
              selected: false,
              positionAbsolute: {
                x: 665,
                y: -75,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_ArtefactImporter_4229",
              position: {
                x: 655,
                y: -225,
              },
              type: "FunctionNode/ArtefactImporter",
              data: {
                name: "GeneratorModel",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                elementID: "ArtefactImporter",
              },
              width: 400,
              height: 60,
              selected: false,
              positionAbsolute: {
                x: 655,
                y: -225,
              },
              dragging: false,
            },
            {
              id: "Output_2527",
              position: {
                x: 210,
                y: 20,
              },
              type: "DataVariable/IN",
              data: {
                hyperparams: [],
                name: "discriminator_optimizer",
              },
              width: 200,
              height: 50,
              selected: false,
              positionAbsolute: {
                x: 210,
                y: 20,
              },
              dragging: false,
            },
            {
              id: "Output_2916",
              position: {
                x: 170,
                y: -230,
              },
              type: "DataVariable/IN",
              data: {
                hyperparams: [],
                name: "generator_optimizer",
              },
              width: 200,
              height: 50,
              selected: false,
              positionAbsolute: {
                x: 170,
                y: -230,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_ArtefactImporter_7766",
              position: {
                x: -460,
                y: 490,
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
                x: -460,
                y: 490,
              },
              dragging: false,
            },
            {
              id: "ListPackerNode_1122",
              position: {
                x: 165,
                y: 455,
              },
              type: "Packer/Ordered",
              data: {
                packingCount: 2,
                commentText: "",
                commentType: "plain",
              },
              width: 80,
              height: 150,
              selected: false,
              positionAbsolute: {
                x: 165,
                y: 455,
              },
              dragging: false,
            },
            {
              id: "Output_671",
              position: {
                x: 770,
                y: 455,
              },
              type: "DataVariable/IN",
              data: {
                hyperparams: [],
                name: "noise",
              },
              width: 200,
              height: 50,
              selected: false,
              positionAbsolute: {
                x: 770,
                y: 455,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_BeginGradientMonitoring_7658",
              position: {
                x: 410,
                y: 800,
              },
              type: "FunctionNode",
              data: {
                name: "Begin Gradient Monitoring",
                hyperparams: [
                  {
                    id: "persistent",
                    value: "False",
                  },
                  {
                    id: "watch_accessed_variables",
                    value: "True",
                  },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: [],
                outputHandles: ["gradient-tapes", "monitoring-flag"],
                elementID: "BeginGradientMonitoring",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 410,
                y: 800,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_EndGradientMonitoring_8211",
              position: {
                x: 2535,
                y: 600,
              },
              type: "FunctionNode",
              data: {
                name: "End Gradient Monitoring",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                inputHandles: ["payload"],
                outputHandles: ["payload"],
                elementID: "EndGradientMonitoring",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 2535,
                y: 600,
              },
              dragging: false,
            },
            {
              id: "Output_8162",
              position: {
                x: 930,
                y: 795,
              },
              type: "DataVariable/IN",
              data: {
                hyperparams: [],
                name: "disc_tape",
              },
              width: 200,
              height: 50,
              selected: false,
              positionAbsolute: {
                x: 930,
                y: 795,
              },
              dragging: false,
            },
            {
              id: "Output_8382",
              position: {
                x: 835,
                y: 670,
              },
              type: "DataVariable/IN",
              data: {
                hyperparams: [],
                name: "gen_tape",
              },
              width: 200,
              height: 50,
              selected: false,
              positionAbsolute: {
                x: 835,
                y: 670,
              },
              dragging: false,
            },
            {
              id: "PackerNode_6744",
              position: {
                x: 2385,
                y: 685,
              },
              type: "Packer/Named",
              data: {
                hyperparams: [
                  {
                    id: "packingCount",
                    value: 2,
                  },
                ],
                commentText: "",
                commentType: "plain",
              },
              width: 50,
              height: 40,
              selected: false,
              positionAbsolute: {
                x: 2385,
                y: 685,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_ArtefactImporter_2418",
              position: {
                x: 1870,
                y: 785,
              },
              type: "FunctionNode/ArtefactImporter",
              data: {
                name: "DiscriminatorLoss",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                elementID: "ArtefactImporter",
              },
              width: 400,
              height: 60,
              selected: false,
              positionAbsolute: {
                x: 1870,
                y: 785,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_ArtefactImporter_2608",
              position: {
                x: 1870,
                y: 560,
              },
              type: "FunctionNode/ArtefactImporter",
              data: {
                name: "GeneratorLoss",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                elementID: "ArtefactImporter",
              },
              width: 400,
              height: 60,
              selected: false,
              positionAbsolute: {
                x: 1870,
                y: 560,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_GenerateArrayFromNormalDistribution_5242",
              position: {
                x: 335,
                y: 410,
              },
              type: "FunctionNode",
              data: {
                name: "Generate Array From Normal Distribution",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                inputHandles: ["shape"],
                outputHandles: ["array"],
                elementID: "GenerateArrayFromNormalDistribution",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 335,
                y: 410,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_RunTrainingStep_9460",
              position: {
                x: 1410,
                y: 865,
              },
              type: "FunctionNode",
              data: {
                name: "Run Training Step",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                inputHandles: ["model", "model-input"],
                outputHandles: ["model-output"],
                elementID: "RunTrainingStep",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 1410,
                y: 865,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_RunTrainingStep_9774",
              position: {
                x: 1405,
                y: 605,
              },
              type: "FunctionNode",
              data: {
                name: "Run Training Step",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                inputHandles: ["model", "model-input"],
                outputHandles: ["model-output"],
                elementID: "RunTrainingStep",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 1405,
                y: 605,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_RunTrainingStep_93",
              position: {
                x: 1405,
                y: 350,
              },
              type: "FunctionNode",
              data: {
                name: "Run Training Step",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                inputHandles: ["model", "model-input"],
                outputHandles: ["model-output"],
                elementID: "RunTrainingStep",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 1405,
                y: 350,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_ApplyGradientsToModelInPlace_1223",
              position: {
                x: 3165,
                y: 760,
              },
              type: "FunctionNode",
              data: {
                name: "Apply Gradients To Model In Place",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                inputHandles: [
                  "model",
                  "gradient-tape",
                  "optimizer",
                  "model-loss",
                ],
                outputHandles: [],
                elementID: "ApplyGradientsToModelInPlace",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 3165,
                y: 760,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_ApplyGradientsToModelInPlace_1964",
              position: {
                x: 3155,
                y: 310,
              },
              type: "FunctionNode",
              data: {
                name: "Apply Gradients To Model In Place",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                inputHandles: [
                  "model",
                  "gradient-tape",
                  "optimizer",
                  "model-loss",
                ],
                outputHandles: [],
                elementID: "ApplyGradientsToModelInPlace",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 3155,
                y: 310,
              },
              dragging: false,
            },
            {
              id: "Output_7532",
              position: {
                x: 1065,
                y: 395,
              },
              type: "DataVariable/OUT",
              data: {
                hyperparams: [],
                name: "noise",
              },
              width: 200,
              height: 50,
              selected: false,
              positionAbsolute: {
                x: 1065,
                y: 395,
              },
              dragging: false,
            },
            {
              id: "Output_7681",
              position: {
                x: 1090,
                y: 220,
              },
              type: "DataVariable/OUT",
              data: {
                hyperparams: [],
                name: "generator",
              },
              width: 200,
              height: 50,
              selected: false,
              positionAbsolute: {
                x: 1090,
                y: 220,
              },
              dragging: false,
            },
            {
              id: "Output_3550",
              position: {
                x: 1070,
                y: 630,
              },
              type: "DataVariable/OUT",
              data: {
                hyperparams: [],
                name: "discriminator",
              },
              width: 200,
              height: 50,
              selected: false,
              positionAbsolute: {
                x: 1070,
                y: 630,
              },
              dragging: false,
            },
            {
              id: "Output_3746",
              position: {
                x: 1050,
                y: 905,
              },
              type: "DataVariable/OUT",
              data: {
                hyperparams: [],
                name: "discriminator",
              },
              width: 200,
              height: 50,
              selected: false,
              positionAbsolute: {
                x: 1050,
                y: 905,
              },
              dragging: false,
            },
            {
              id: "Input_5894",
              position: {
                x: 1055,
                y: 1025,
              },
              type: "Input",
              data: {
                name: "images",
              },
              width: 153,
              height: 100,
              selected: false,
              positionAbsolute: {
                x: 1055,
                y: 1025,
              },
              dragging: false,
            },
            {
              id: "Output_2543",
              position: {
                x: 2735,
                y: 910,
              },
              type: "DataVariable/OUT",
              data: {
                hyperparams: [],
                name: "discriminator",
              },
              width: 200,
              height: 50,
              selected: false,
              positionAbsolute: {
                x: 2735,
                y: 910,
              },
              dragging: false,
            },
            {
              id: "Output_2730",
              position: {
                x: 2780,
                y: 240,
              },
              type: "DataVariable/OUT",
              data: {
                hyperparams: [],
                name: "gen_tape",
              },
              width: 200,
              height: 50,
              selected: false,
              positionAbsolute: {
                x: 2780,
                y: 240,
              },
              dragging: false,
            },
            {
              id: "Output_2922",
              position: {
                x: 2745,
                y: 995,
              },
              type: "DataVariable/OUT",
              data: {
                hyperparams: [],
                name: "disc_tape",
              },
              width: 200,
              height: 50,
              selected: false,
              positionAbsolute: {
                x: 2745,
                y: 995,
              },
              dragging: false,
            },
            {
              id: "Output_3238",
              position: {
                x: 2760,
                y: 1115,
              },
              type: "DataVariable/OUT",
              data: {
                hyperparams: [],
                name: "discriminator_optimizer",
              },
              width: 200,
              height: 50,
              selected: false,
              positionAbsolute: {
                x: 2760,
                y: 1115,
              },
              dragging: false,
            },
            {
              id: "Output_3420",
              position: {
                x: 2775,
                y: 360,
              },
              type: "DataVariable/OUT",
              data: {
                hyperparams: [],
                name: "generator_optimizer",
              },
              width: 200,
              height: 50,
              selected: false,
              positionAbsolute: {
                x: 2775,
                y: 360,
              },
              dragging: false,
            },
            {
              id: "Output_3593",
              position: {
                x: 2820,
                y: 80,
              },
              type: "DataVariable/OUT",
              data: {
                hyperparams: [],
                name: "generator",
              },
              width: 200,
              height: 50,
              selected: false,
              positionAbsolute: {
                x: 2820,
                y: 80,
              },
              dragging: false,
            },
          ],
          edges: [
            {
              id: "Output_2916_input",
              source: "FunctionNode_GenerateAdamOptimizer_2652",
              sourceHandle: "Optimizer",
              target: "Output_2916",
              targetHandle: "input",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "Output_2527_input",
              source: "FunctionNode_GenerateAdamOptimizer_2299",
              sourceHandle: "Optimizer",
              target: "Output_2527",
              targetHandle: "input",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "Output_237_input",
              source: "FunctionNode_ArtefactImporter_4229",
              sourceHandle: "out",
              target: "Output_237",
              targetHandle: "input",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "Output_41_input",
              source: "FunctionNode_ArtefactImporter_3883",
              sourceHandle: "out",
              target: "Output_41",
              targetHandle: "input",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "ListPackerNode_1122_0",
              source: "FunctionNode_ArtefactImporter_7766",
              sourceHandle: "out",
              target: "ListPackerNode_1122",
              targetHandle: "0",
              label: "BATCH_SIZE",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "ListPackerNode_1122_1",
              source: "FunctionNode_ArtefactImporter_7766",
              sourceHandle: "out",
              target: "ListPackerNode_1122",
              targetHandle: "1",
              label: "noise_dim",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_GenerateArrayFromNormalDistribution_5242_shape",
              source: "ListPackerNode_1122",
              sourceHandle: "0",
              target: "FunctionNode_GenerateArrayFromNormalDistribution_5242",
              targetHandle: "shape",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "Output_671_input",
              source: "FunctionNode_GenerateArrayFromNormalDistribution_5242",
              sourceHandle: "array",
              target: "Output_671",
              targetHandle: "input",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "Output_8382_input",
              source: "FunctionNode_BeginGradientMonitoring_7658",
              sourceHandle: "gradient-tapes",
              target: "Output_8382",
              targetHandle: "input",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "Output_8162_input",
              source: "FunctionNode_BeginGradientMonitoring_7658",
              sourceHandle: "gradient-tapes",
              target: "Output_8162",
              targetHandle: "input",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_RunTrainingStep_93_multi-in+5129",
              source: "FunctionNode_BeginGradientMonitoring_7658",
              sourceHandle: "monitoring-flag",
              target: "FunctionNode_RunTrainingStep_93",
              targetHandle: "multi-in",
              label: "dependency-edge",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_RunTrainingStep_93_model",
              source: "Output_7681",
              sourceHandle: "output",
              target: "FunctionNode_RunTrainingStep_93",
              targetHandle: "model",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_RunTrainingStep_93_model-input",
              source: "Output_7532",
              sourceHandle: "output",
              target: "FunctionNode_RunTrainingStep_93",
              targetHandle: "model-input",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_RunTrainingStep_9774_model-input",
              source: "FunctionNode_RunTrainingStep_93",
              sourceHandle: "model-output",
              target: "FunctionNode_RunTrainingStep_9774",
              targetHandle: "model-input",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_RunTrainingStep_9774_model",
              source: "Output_3550",
              sourceHandle: "output",
              target: "FunctionNode_RunTrainingStep_9774",
              targetHandle: "model",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_RunTrainingStep_9460_model",
              source: "Output_3746",
              sourceHandle: "output",
              target: "FunctionNode_RunTrainingStep_9460",
              targetHandle: "model",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_RunTrainingStep_9460_model-input",
              source: "Input_5894",
              sourceHandle: "out",
              target: "FunctionNode_RunTrainingStep_9460",
              targetHandle: "model-input",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_ArtefactImporter_2418_multi-in+8525",
              source: "FunctionNode_RunTrainingStep_9460",
              sourceHandle: "model-output",
              target: "FunctionNode_ArtefactImporter_2418",
              targetHandle: "multi-in",
              label: "*:real_output",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_ArtefactImporter_2418_multi-in+2793",
              source: "FunctionNode_RunTrainingStep_9774",
              sourceHandle: "model-output",
              target: "FunctionNode_ArtefactImporter_2418",
              targetHandle: "multi-in",
              label: "*:fake_output",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_ArtefactImporter_2608_multi-in+4068",
              source: "FunctionNode_RunTrainingStep_9774",
              sourceHandle: "model-output",
              target: "FunctionNode_ArtefactImporter_2608",
              targetHandle: "multi-in",
              label: "*:real_output",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "PackerNode_6744_multi-in+933",
              source: "FunctionNode_ArtefactImporter_2608",
              sourceHandle: "out",
              target: "PackerNode_6744",
              targetHandle: "multi-in",
              label: "generator_loss",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "PackerNode_6744_multi-in+9263",
              source: "FunctionNode_ArtefactImporter_2418",
              sourceHandle: "out",
              target: "PackerNode_6744",
              targetHandle: "multi-in",
              label: "discriminator_loss",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_EndGradientMonitoring_8211_payload",
              source: "PackerNode_6744",
              sourceHandle: "out",
              target: "FunctionNode_EndGradientMonitoring_8211",
              targetHandle: "payload",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_ApplyGradientsToModelInPlace_1964_model-loss",
              source: "FunctionNode_EndGradientMonitoring_8211",
              sourceHandle: "payload",
              target: "FunctionNode_ApplyGradientsToModelInPlace_1964",
              targetHandle: "model-loss",
              label: "generator_loss",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_ApplyGradientsToModelInPlace_1223_model-loss",
              source: "FunctionNode_EndGradientMonitoring_8211",
              sourceHandle: "payload",
              target: "FunctionNode_ApplyGradientsToModelInPlace_1223",
              targetHandle: "model-loss",
              label: "discriminator_loss",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_ApplyGradientsToModelInPlace_1964_model",
              source: "Output_3593",
              sourceHandle: "output",
              target: "FunctionNode_ApplyGradientsToModelInPlace_1964",
              targetHandle: "model",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_ApplyGradientsToModelInPlace_1964_optimizer",
              source: "Output_3420",
              sourceHandle: "output",
              target: "FunctionNode_ApplyGradientsToModelInPlace_1964",
              targetHandle: "optimizer",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_ApplyGradientsToModelInPlace_1964_gradient-tape",
              source: "Output_2730",
              sourceHandle: "output",
              target: "FunctionNode_ApplyGradientsToModelInPlace_1964",
              targetHandle: "gradient-tape",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_ApplyGradientsToModelInPlace_1223_model",
              source: "Output_2543",
              sourceHandle: "output",
              target: "FunctionNode_ApplyGradientsToModelInPlace_1223",
              targetHandle: "model",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_ApplyGradientsToModelInPlace_1223_gradient-tape",
              source: "Output_2922",
              sourceHandle: "output",
              target: "FunctionNode_ApplyGradientsToModelInPlace_1223",
              targetHandle: "gradient-tape",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_ApplyGradientsToModelInPlace_1223_optimizer",
              source: "Output_3238",
              sourceHandle: "output",
              target: "FunctionNode_ApplyGradientsToModelInPlace_1223",
              targetHandle: "optimizer",
              label: "",
            },
          ],
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
          nodes: [
            {
              id: "Output_3124",
              position: {
                x: 520,
                y: -40,
              },
              type: "DataVariable/IN",
              data: {
                hyperparams: [],
                name: "epochs",
              },
              width: 200,
              height: 50,
              selected: false,
              positionAbsolute: {
                x: 520,
                y: -40,
              },
              dragging: false,
            },
            {
              id: "Output_3543",
              position: {
                x: 130,
                y: 100,
              },
              type: "DataVariable/OUT",
              data: {
                hyperparams: [],
                name: "epochs",
              },
              width: 200,
              height: 50,
              selected: false,
              positionAbsolute: {
                x: 130,
                y: 100,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_ArtefactImporter_5940",
              position: {
                x: 10,
                y: -65,
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
                x: 10,
                y: -65,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_RepeatLoop_ArtefactImporter_1387",
              position: {
                x: 380,
                y: 120,
              },
              type: "Loop/Repeat",
              data: {
                enclosedNodeType: "FunctionNode/ArtefactImporter",
                name: "tmp1",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                elementID: "ArtefactImporter",
              },
              width: 213,
              height: 200,
              selected: false,
              positionAbsolute: {
                x: 380,
                y: 120,
              },
              dragging: false,
            },
          ],
          edges: [
            {
              id: "Output_3124_input",
              source: "FunctionNode_ArtefactImporter_5940",
              sourceHandle: "out",
              target: "Output_3124",
              targetHandle: "input",
              label: "EPOCHS",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_RepeatLoop_ArtefactImporter_1387_iteration-count",
              source: "Output_3543",
              sourceHandle: "output",
              target: "FunctionNode_RepeatLoop_ArtefactImporter_1387",
              targetHandle: "iteration-count",
              label: "",
            },
          ],
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
          nodes: [
            {
              id: "FunctionNode_ArtefactImporter_4394",
              position: {
                x: 160,
                y: 160,
              },
              type: "FunctionNode/ArtefactImporter",
              data: {
                name: "MNISTDataLoader",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                elementID: "ArtefactImporter",
              },
              width: 400,
              height: 60,
              selected: false,
              positionAbsolute: {
                x: 160,
                y: 160,
              },
              dragging: false,
            },
            {
              id: "Output_6582",
              position: {
                x: 705,
                y: 140,
              },
              type: "Output",
              data: {
                name: "train_dataset",
              },
              width: 153,
              height: 100,
              selected: false,
              positionAbsolute: {
                x: 705,
                y: 140,
              },
              dragging: false,
            },
          ],
          edges: [
            {
              id: "Output_6582_in",
              source: "FunctionNode_ArtefactImporter_4394",
              sourceHandle: "out",
              target: "Output_6582",
              targetHandle: "in",
              label: "train_dataset",
            },
          ],
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
          nodes: [
            {
              id: "FunctionNode_ArtefactImporter_4447",
              position: {
                x: 0,
                y: 0,
                zoom: 1,
              },
              type: "FunctionNode/ArtefactImporter",
              data: {
                name: "LoadedData",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                elementID: "ArtefactImporter",
              },
              width: 400,
              height: 60,
              selected: false,
              dragging: false,
            },
            {
              id: "FunctionNode_ForInLoop_ArtefactImporter_9488",
              position: {
                x: 570,
                y: 30,
              },
              type: "Loop/ForIn",
              data: {
                enclosedNodeType: "FunctionNode/ArtefactImporter",
                name: "tmp2",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                elementID: "ArtefactImporter",
              },
              width: 213,
              height: 200,
              selected: false,
              positionAbsolute: {
                x: 570,
                y: 30,
              },
              dragging: false,
            },
          ],
          edges: [
            {
              id: "FunctionNode_ForInLoop_ArtefactImporter_9488_iterator",
              source: "FunctionNode_ArtefactImporter_4447",
              sourceHandle: "out",
              target: "FunctionNode_ForInLoop_ArtefactImporter_9488",
              targetHandle: "iterator",
              label: "train_dataset",
            },
          ],
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
          nodes: [
            {
              id: "Input_5144",
              position: {
                x: 170,
                y: 105,
              },
              type: "Input",
              data: {
                name: "ss_element",
              },
              width: 153,
              height: 100,
              selected: false,
              positionAbsolute: {
                x: 170,
                y: 105,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_ArtefactImporter_9156",
              position: {
                x: 495,
                y: 135,
              },
              type: "FunctionNode/ArtefactImporter",
              data: {
                name: "TrainStep",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                elementID: "ArtefactImporter",
              },
              width: 400,
              height: 60,
              selected: false,
              positionAbsolute: {
                x: 495,
                y: 135,
              },
              dragging: false,
            },
          ],
          edges: [
            {
              id: "FunctionNode_ArtefactImporter_9156_multi-in+4436",
              source: "Input_5144",
              sourceHandle: "out",
              target: "FunctionNode_ArtefactImporter_9156",
              targetHandle: "multi-in",
              label: "images",
            },
          ],
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
          nodes: [
            {
              id: "FunctionNode_GetTunableInt_5167",
              position: {
                x: -595,
                y: -390,
              },
              type: "FunctionNode",
              data: {
                name: "Get Tunable Int",
                hyperparams: [
                  {
                    id: "name",
                    value: "'hp_layers'",
                  },
                  {
                    id: "min_value",
                    value: "1",
                  },
                  {
                    id: "max_value",
                    value: "4",
                  },
                  {
                    id: "step",
                    value: "1",
                  },
                  {
                    id: "sampling",
                    value: "'linear'",
                  },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: [],
                outputHandles: ["int"],
                elementID: "GetTunableInt",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: -595,
                y: -390,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_GetTunableInt_5655",
              position: {
                x: -590,
                y: -660,
              },
              type: "FunctionNode",
              data: {
                name: "Get Tunable Int",
                hyperparams: [
                  {
                    id: "name",
                    value: "'hp_units'",
                  },
                  {
                    id: "min_value",
                    value: "32",
                  },
                  {
                    id: "max_value",
                    value: "512",
                  },
                  {
                    id: "step",
                    value: "32",
                  },
                  {
                    id: "sampling",
                    value: "'linear'",
                  },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: [],
                outputHandles: ["int"],
                elementID: "GetTunableInt",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: -590,
                y: -660,
              },
              dragging: false,
            },
            {
              id: "Output_3442",
              position: {
                x: -50,
                y: -585,
              },
              type: "DataVariable/IN",
              data: {
                hyperparams: [],
                name: "hp_units",
              },
              width: 200,
              height: 50,
              selected: false,
              positionAbsolute: {
                x: -50,
                y: -585,
              },
              dragging: false,
            },
            {
              id: "Output_3588",
              position: {
                x: -40,
                y: -315,
              },
              type: "DataVariable/IN",
              data: {
                hyperparams: [],
                name: "hp_layers",
              },
              width: 200,
              height: 50,
              selected: false,
              positionAbsolute: {
                x: -40,
                y: -315,
              },
              dragging: false,
            },
            {
              id: "Output_6718",
              position: {
                x: -15,
                y: 535,
              },
              type: "DataVariable/OUT",
              data: {
                hyperparams: [],
                name: "hp_units",
              },
              width: 200,
              height: 50,
              selected: false,
              positionAbsolute: {
                x: -15,
                y: 535,
              },
              dragging: false,
            },
            {
              id: "Output_6923",
              position: {
                x: 400,
                y: 520,
              },
              type: "DataVariable/OUT",
              data: {
                hyperparams: [],
                name: "hp_units",
              },
              width: 200,
              height: 50,
              selected: false,
              positionAbsolute: {
                x: 400,
                y: 520,
              },
              dragging: false,
            },
            {
              id: "Output_7254",
              position: {
                x: 635,
                y: 155,
              },
              type: "DataVariable/OUT",
              data: {
                hyperparams: [],
                name: "hp_layers",
              },
              width: 200,
              height: 50,
              selected: false,
              positionAbsolute: {
                x: 635,
                y: 155,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_Flatten_919",
              position: {
                x: -240,
                y: 235,
              },
              type: "FunctionNode",
              data: {
                name: "Flatten",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                inputHandles: ["payload"],
                outputHandles: ["payload"],
                elementID: "Flatten",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: -240,
                y: 235,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_CreateAndApplyDenseLayer_4849",
              position: {
                x: 1385,
                y: 260,
              },
              type: "FunctionNode",
              data: {
                name: "Create and Apply Dense Layer",
                hyperparams: [
                  {
                    id: "units",
                    value: "10",
                  },
                  {
                    id: "activation",
                    value: "softmax",
                  },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: ["payload"],
                outputHandles: ["payload"],
                elementID: "CreateAndApplyDenseLayer",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 1385,
                y: 260,
              },
              dragging: false,
            },
            {
              id: "PackerNode_4040",
              position: {
                x: 735,
                y: 320,
              },
              type: "Packer/Named",
              data: {
                hyperparams: [
                  {
                    id: "packingCount",
                    value: 2,
                  },
                ],
                commentText: "",
                commentType: "plain",
              },
              width: 50,
              height: 40,
              selected: false,
              positionAbsolute: {
                x: 735,
                y: 320,
              },
              dragging: false,
            },
            {
              id: "UnpackerNode_1373",
              position: {
                x: 1230,
                y: 340,
              },
              type: "Unpacker/Named",
              data: {
                commentText: "",
                commentType: "plain",
              },
              width: 50,
              height: 40,
              selected: false,
              positionAbsolute: {
                x: 1230,
                y: 340,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_CreateAndApplyDenseLayer_9091",
              position: {
                x: 255,
                y: 235,
              },
              type: "FunctionNode",
              data: {
                name: "Create and Apply Dense Layer",
                hyperparams: [
                  {
                    id: "units",
                    value: "",
                  },
                  {
                    id: "activation",
                    value: "relu",
                  },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: ["payload"],
                outputHandles: ["payload"],
                elementID: "CreateAndApplyDenseLayer",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 255,
                y: 235,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_RepeatLoop_ArtefactImporter_2040",
              position: {
                x: 920,
                y: 255,
              },
              type: "Loop/Repeat",
              data: {
                enclosedNodeType: "FunctionNode/ArtefactImporter",
                name: "tmp1",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                elementID: "ArtefactImporter",
              },
              width: 213,
              height: 200,
              selected: false,
              positionAbsolute: {
                x: 920,
                y: 255,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_ArrayInput_1884",
              position: {
                x: -600,
                y: 290,
              },
              type: "FunctionNode/ArrayInput",
              data: {
                name: "Array Input",
                hyperparams: [
                  {
                    id: "input_shape",
                    value: "(784,)",
                  },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: [],
                outputHandles: ["array"],
                elementID: "ArrayInput",
              },
              width: 230,
              height: 100,
              selected: false,
              positionAbsolute: {
                x: -600,
                y: 290,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_RecordArrayOutput_2420",
              position: {
                x: 1830,
                y: 310,
              },
              type: "FunctionNode/RecordArrayOutput",
              data: {
                name: "Record Array Output",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                inputHandles: ["array"],
                outputHandles: [],
                elementID: "RecordArrayOutput",
              },
              width: 200,
              height: 100,
              selected: false,
              positionAbsolute: {
                x: 1830,
                y: 310,
              },
              dragging: false,
            },
          ],
          edges: [
            {
              id: "Output_3442_input",
              source: "FunctionNode_GetTunableInt_5655",
              sourceHandle: "int",
              target: "Output_3442",
              targetHandle: "input",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "Output_3588_input",
              source: "FunctionNode_GetTunableInt_5167",
              sourceHandle: "int",
              target: "Output_3588",
              targetHandle: "input",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_CreateAndApplyDenseLayer_9091_payload",
              source: "FunctionNode_Flatten_919",
              sourceHandle: "payload",
              target: "FunctionNode_CreateAndApplyDenseLayer_9091",
              targetHandle: "payload",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "PackerNode_4040_multi-in+5949",
              source: "FunctionNode_CreateAndApplyDenseLayer_9091",
              sourceHandle: "payload",
              target: "PackerNode_4040",
              targetHandle: "multi-in",
              label: "payload",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_RepeatLoop_ArtefactImporter_2040_iteration-count",
              source: "Output_7254",
              sourceHandle: "output",
              target: "FunctionNode_RepeatLoop_ArtefactImporter_2040",
              targetHandle: "iteration-count",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_RepeatLoop_ArtefactImporter_2040_multi-in+9599",
              source: "PackerNode_4040",
              sourceHandle: "out",
              target: "FunctionNode_RepeatLoop_ArtefactImporter_2040",
              targetHandle: "multi-in",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "UnpackerNode_1373_in",
              source: "FunctionNode_RepeatLoop_ArtefactImporter_2040",
              sourceHandle: "out",
              target: "UnpackerNode_1373",
              targetHandle: "in",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_CreateAndApplyDenseLayer_4849_payload",
              source: "UnpackerNode_1373",
              sourceHandle: "out",
              target: "FunctionNode_CreateAndApplyDenseLayer_4849",
              targetHandle: "payload",
              label: "payload",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_CreateAndApplyDenseLayer_9091_multi-in+7296",
              source: "Output_6718",
              sourceHandle: "output",
              target: "FunctionNode_CreateAndApplyDenseLayer_9091",
              targetHandle: "multi-in",
              label: "units",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "PackerNode_4040_multi-in+9801",
              source: "Output_6923",
              sourceHandle: "output",
              target: "PackerNode_4040",
              targetHandle: "multi-in",
              label: "units",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_Flatten_919_payload",
              source: "FunctionNode_ArrayInput_1884",
              sourceHandle: "out",
              target: "FunctionNode_Flatten_919",
              targetHandle: "payload",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_RecordArrayOutput_2420_in",
              source: "FunctionNode_CreateAndApplyDenseLayer_4849",
              sourceHandle: "payload",
              target: "FunctionNode_RecordArrayOutput_2420",
              targetHandle: "in",
              label: "",
            },
          ],
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
          nodes: [
            {
              id: "FunctionNode_CreateAndApplyDenseLayer_5888",
              position: { x: 330, y: 85 },
              type: "FunctionNode",
              data: {
                name: "Create and Apply Dense Layer",
                hyperparams: [
                  { id: "units", value: null },
                  { id: "activation", value: "None" },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: ["payload"],
                outputHandles: ["payload"],
                elementID: "CreateAndApplyDenseLayer",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: { x: 330, y: 85 },
              dragging: false,
            },
            {
              id: "Input_7356",
              position: { x: 5, y: 235 },
              type: "Input",
              data: { name: "hp_units" },
              width: 153,
              height: 100,
              selected: false,
              positionAbsolute: { x: 5, y: 235 },
              dragging: false,
            },
            {
              id: "Input_2507",
              position: { x: 10, y: 65 },
              type: "Input",
              data: { name: "payload" },
              width: 153,
              height: 100,
              selected: false,
              positionAbsolute: { x: 10, y: 65 },
              dragging: false,
            },
            {
              id: "Output_5171",
              position: { x: 795, y: 135 },
              type: "Output",
              data: { name: "payload" },
              width: 153,
              height: 100,
              selected: false,
              positionAbsolute: { x: 795, y: 135 },
              dragging: false,
            },
          ],
          edges: [
            {
              id: "Output_5171_in",
              source: "FunctionNode_CreateAndApplyDenseLayer_5888",
              sourceHandle: "payload",
              target: "Output_5171",
              targetHandle: "in",
              label: "",
              animated: true,
              style: { stroke: "#000", strokeWidth: 1.5 },
            },
            {
              id: "FunctionNode_CreateAndApplyDenseLayer_5888_payload",
              source: "Input_2507",
              sourceHandle: "out",
              target: "FunctionNode_CreateAndApplyDenseLayer_5888",
              targetHandle: "payload",
              label: "",
              animated: true,
              style: { stroke: "#000", strokeWidth: 1.5 },
            },
            {
              id: "FunctionNode_CreateAndApplyDenseLayer_5888_multi-in+6447",
              source: "Input_7356",
              sourceHandle: "out",
              target: "FunctionNode_CreateAndApplyDenseLayer_5888",
              targetHandle: "multi-in",
              label: "units",
            },
          ],
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
          nodes: [
            {
              id: "Output_1114",
              position: {
                x: 1415,
                y: 30,
              },
              type: "Output",
              data: {
                name: "Compiled Model",
              },
              width: 153,
              height: 100,
              selected: true,
              positionAbsolute: {
                x: 1415,
                y: 30,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_GenerateAdamOptimizer_9984",
              position: {
                x: 425,
                y: 100,
              },
              type: "FunctionNode",
              data: {
                name: "Generate ADAM Optimizer",
                hyperparams: [
                  {
                    id: "learning_rate",
                    value: "0.001",
                  },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: [],
                outputHandles: ["Optimizer"],
                elementID: "GenerateAdamOptimizer",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 425,
                y: 100,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_CompileModel_1908",
              position: {
                x: 960,
                y: -20,
              },
              type: "FunctionNode",
              data: {
                name: "Compile Model",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                inputHandles: ["model", "optimizer", "loss", "metrics"],
                outputHandles: ["compiled-model"],
                elementID: "CompileModel",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 960,
                y: -20,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_GetTunableFromList_1567",
              position: {
                x: -70,
                y: 100,
              },
              type: "FunctionNode",
              data: {
                name: "Get Tunable From List",
                hyperparams: [
                  {
                    id: "name",
                    value: "'learning_rate'",
                  },
                  {
                    id: "values",
                    value: null,
                  },
                  {
                    id: "ordered",
                    value: "None",
                  },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: [],
                outputHandles: ["value"],
                elementID: "GetTunableFromList",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: -70,
                y: 100,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_RawData_612",
              position: {
                x: -435,
                y: 145,
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
                innerCode: "[1e-2, 1e-3, 1e-4]",
              },
              width: 180,
              height: 120,
              selected: false,
              positionAbsolute: {
                x: -435,
                y: 145,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_RawData_1175",
              position: {
                x: 520,
                y: 425,
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
                innerCode: "'sparse_categorical_crossentropy'",
              },
              width: 180,
              height: 120,
              selected: false,
              positionAbsolute: {
                x: 520,
                y: 425,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_RawData_2107",
              position: {
                x: 525,
                y: 625,
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
                innerCode: "['accuracy']",
              },
              width: 180,
              height: 120,
              selected: false,
              positionAbsolute: {
                x: 525,
                y: 625,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_ArtefactImporter_9042",
              position: {
                x: 355,
                y: -115,
              },
              type: "FunctionNode/ArtefactImporter",
              data: {
                name: "ClassifierModel",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                elementID: "ArtefactImporter",
              },
              width: 400,
              height: 60,
              selected: false,
              positionAbsolute: {
                x: 355,
                y: -115,
              },
              dragging: false,
            },
          ],
          edges: [
            {
              id: "FunctionNode_CompileModel_1908_model",
              source: "FunctionNode_ArtefactImporter_9042",
              sourceHandle: "out",
              target: "FunctionNode_CompileModel_1908",
              targetHandle: "model",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_CompileModel_1908_optimizer",
              source: "FunctionNode_GenerateAdamOptimizer_9984",
              sourceHandle: "Optimizer",
              target: "FunctionNode_CompileModel_1908",
              targetHandle: "optimizer",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_CompileModel_1908_loss",
              source: "FunctionNode_RawData_1175",
              sourceHandle: "out",
              target: "FunctionNode_CompileModel_1908",
              targetHandle: "loss",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_CompileModel_1908_metrics",
              source: "FunctionNode_RawData_2107",
              sourceHandle: "out",
              target: "FunctionNode_CompileModel_1908",
              targetHandle: "metrics",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "Output_1114_in",
              source: "FunctionNode_CompileModel_1908",
              sourceHandle: "compiled-model",
              target: "Output_1114",
              targetHandle: "in",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_GetTunableFromList_1567_multi-in+3057",
              source: "FunctionNode_RawData_612",
              sourceHandle: "out",
              target: "FunctionNode_GetTunableFromList_1567",
              targetHandle: "multi-in",
              label: "values",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_GenerateAdamOptimizer_9984_multi-in+780",
              source: "FunctionNode_GetTunableFromList_1567",
              sourceHandle: "value",
              target: "FunctionNode_GenerateAdamOptimizer_9984",
              targetHandle: "multi-in",
              label: "learning_rate",
            },
          ],
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
          nodes: [
            {
              id: "FunctionNode_ScalarDivide_7702",
              position: {
                x: 660,
                y: 80,
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
                x: 660,
                y: 80,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_ScalarDivide_2003",
              position: {
                x: 660,
                y: -155,
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
                x: 660,
                y: -155,
              },
              dragging: false,
            },
            {
              id: "Output_2250",
              position: {
                x: 1125,
                y: 670,
              },
              type: "Output",
              data: {
                name: "y_test",
              },
              width: 153,
              height: 100,
              selected: false,
              positionAbsolute: {
                x: 1125,
                y: 670,
              },
              dragging: false,
            },
            {
              id: "Output_2707",
              position: {
                x: 1285,
                y: 150,
              },
              type: "Output",
              data: {
                name: "x_test",
              },
              width: 153,
              height: 100,
              selected: false,
              positionAbsolute: {
                x: 1285,
                y: 150,
              },
              dragging: false,
            },
            {
              id: "Output_3326",
              position: {
                x: 1290,
                y: -95,
              },
              type: "Output",
              data: {
                name: "x_train",
              },
              width: 153,
              height: 100,
              selected: false,
              positionAbsolute: {
                x: 1290,
                y: -95,
              },
              dragging: false,
            },
            {
              id: "Output_2844",
              position: {
                x: 1125,
                y: 510,
              },
              type: "Output",
              data: {
                name: "y_train",
              },
              width: 153,
              height: 100,
              selected: false,
              positionAbsolute: {
                x: 1125,
                y: 510,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_RawData_3720",
              position: {
                x: 160,
                y: -65,
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
                innerCode: "255.0",
              },
              width: 180,
              height: 120,
              selected: true,
              positionAbsolute: {
                x: 160,
                y: -65,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_LoadMNISTDataset_973",
              position: {
                x: 70,
                y: 165,
              },
              type: "FunctionNode",
              data: {
                name: "Load MNIST Dataset",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                inputHandles: [],
                outputHandles: ["mnist-data"],
                elementID: "LoadMNISTDataset",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 70,
                y: 165,
              },
              dragging: false,
            },
          ],
          edges: [
            {
              id: "Output_3326_in",
              source: "FunctionNode_ScalarDivide_2003",
              sourceHandle: "result",
              target: "Output_3326",
              targetHandle: "in",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "Output_2707_in",
              source: "FunctionNode_ScalarDivide_7702",
              sourceHandle: "result",
              target: "Output_2707",
              targetHandle: "in",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_ScalarDivide_2003_divisor",
              source: "FunctionNode_RawData_3720",
              sourceHandle: "out",
              target: "FunctionNode_ScalarDivide_2003",
              targetHandle: "divisor",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_ScalarDivide_7702_divisor",
              source: "FunctionNode_RawData_3720",
              sourceHandle: "out",
              target: "FunctionNode_ScalarDivide_7702",
              targetHandle: "divisor",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "Output_2250_in",
              source: "FunctionNode_LoadMNISTDataset_973",
              sourceHandle: "mnist-data",
              target: "Output_2250",
              targetHandle: "in",
              label: "y_test",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "Output_2844_in",
              source: "FunctionNode_LoadMNISTDataset_973",
              sourceHandle: "mnist-data",
              target: "Output_2844",
              targetHandle: "in",
              label: "y_train",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_ScalarDivide_7702_dividend",
              source: "FunctionNode_LoadMNISTDataset_973",
              sourceHandle: "mnist-data",
              target: "FunctionNode_ScalarDivide_7702",
              targetHandle: "dividend",
              label: "x_test",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_ScalarDivide_2003_dividend",
              source: "FunctionNode_LoadMNISTDataset_973",
              sourceHandle: "mnist-data",
              target: "FunctionNode_ScalarDivide_2003",
              targetHandle: "dividend",
              label: "x_train",
            },
          ],
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
          nodes: [
            {
              id: "FunctionNode_GetBestModelAfterTuning_6214",
              position: {
                x: 605,
                y: 105,
              },
              type: "FunctionNode",
              data: {
                name: "Get Best Model After Tuning",
                hyperparams: [
                  {
                    id: "objective",
                    value: "'val_loss'",
                  },
                  {
                    id: "max_trials",
                    value: "5",
                  },
                  {
                    id: "epochs",
                    value: "5",
                  },
                ],
                commentText: "",
                commentType: "plain",
                inputHandles: ["build_model"],
                outputHandles: ["best-model"],
                elementID: "GetBestModelAfterTuning",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 605,
                y: 105,
              },
              dragging: false,
            },
            {
              id: "Output_1475",
              position: {
                x: 1075,
                y: 165,
              },
              type: "Output",
              data: {
                name: "model",
              },
              width: 153,
              height: 100,
              selected: false,
              positionAbsolute: {
                x: 1075,
                y: 165,
              },
              dragging: false,
            },
            {
              id: "CallBackNode_9523",
              position: {
                x: 10,
                y: 40,
              },
              data: {
                name: "CompiledClassifierModel",
              },
              type: "Callback",
              width: 50,
              height: 40,
              selected: false,
              positionAbsolute: {
                x: 10,
                y: 40,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_LoadMNISTDataset_4861",
              position: {
                x: -105,
                y: 220,
              },
              type: "FunctionNode",
              data: {
                name: "Load MNIST Dataset",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                inputHandles: [],
                outputHandles: ["mnist-data"],
                elementID: "LoadMNISTDataset",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: -105,
                y: 220,
              },
              dragging: false,
            },
            {
              id: "UnpackerNode_1561",
              position: {
                x: 310,
                y: 415,
              },
              type: "Unpacker/Named",
              data: {
                commentText: "",
                commentType: "plain",
              },
              width: 50,
              height: 40,
              selected: false,
              positionAbsolute: {
                x: 310,
                y: 415,
              },
              dragging: false,
            },
            {
              id: "UnpackerNode_7502",
              position: {
                x: 300,
                y: 215,
              },
              type: "Unpacker/Named",
              data: {
                commentText: "",
                commentType: "plain",
              },
              width: 50,
              height: 40,
              selected: false,
              positionAbsolute: {
                x: 300,
                y: 215,
              },
              dragging: false,
            },
            {
              id: "UnpackerNode_7885",
              position: {
                x: 300,
                y: 280,
              },
              type: "Unpacker/Named",
              data: {
                commentText: "",
                commentType: "plain",
              },
              width: 50,
              height: 40,
              selected: false,
              positionAbsolute: {
                x: 300,
                y: 280,
              },
              dragging: false,
            },
            {
              id: "UnpackerNode_8177",
              position: {
                x: 305,
                y: 345,
              },
              type: "Unpacker/Named",
              data: {
                commentText: "",
                commentType: "plain",
              },
              width: 50,
              height: 40,
              selected: false,
              positionAbsolute: {
                x: 305,
                y: 345,
              },
              dragging: false,
            },
          ],
          edges: [
            {
              id: "Output_1475_in",
              source: "FunctionNode_GetBestModelAfterTuning_6214",
              sourceHandle: "best-model",
              target: "Output_1475",
              targetHandle: "in",
              label: "",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_GetBestModelAfterTuning_6214_build_model",
              source: "CallBackNode_9523",
              sourceHandle: "in",
              target: "FunctionNode_GetBestModelAfterTuning_6214",
              targetHandle: "build_model",
              label: "*:build_model",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "UnpackerNode_1561_in",
              source: "FunctionNode_LoadMNISTDataset_4861",
              sourceHandle: "mnist-data",
              target: "UnpackerNode_1561",
              targetHandle: "in",
              label: null,
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_GetBestModelAfterTuning_6214_multi-in+3166",
              source: "UnpackerNode_1561",
              sourceHandle: "out",
              target: "FunctionNode_GetBestModelAfterTuning_6214",
              targetHandle: "multi-in",
              label: "x_train",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "UnpackerNode_7502_in",
              source: "FunctionNode_LoadMNISTDataset_4861",
              sourceHandle: "mnist-data",
              target: "UnpackerNode_7502",
              targetHandle: "in",
              label: null,
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "UnpackerNode_7885_in",
              source: "FunctionNode_LoadMNISTDataset_4861",
              sourceHandle: "mnist-data",
              target: "UnpackerNode_7885",
              targetHandle: "in",
              label: null,
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "UnpackerNode_8177_in",
              source: "FunctionNode_LoadMNISTDataset_4861",
              sourceHandle: "mnist-data",
              target: "UnpackerNode_8177",
              targetHandle: "in",
              label: null,
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_GetBestModelAfterTuning_6214_multi-in+6175",
              source: "UnpackerNode_7502",
              sourceHandle: "out",
              target: "FunctionNode_GetBestModelAfterTuning_6214",
              targetHandle: "multi-in",
              label: "y_test",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_GetBestModelAfterTuning_6214_multi-in+2720",
              source: "UnpackerNode_7885",
              sourceHandle: "out",
              target: "FunctionNode_GetBestModelAfterTuning_6214",
              targetHandle: "multi-in",
              label: "y_train",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_GetBestModelAfterTuning_6214_multi-in+3072",
              source: "UnpackerNode_8177",
              sourceHandle: "out",
              target: "FunctionNode_GetBestModelAfterTuning_6214",
              targetHandle: "multi-in",
              label: "x_test",
            },
          ],
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
          nodes: [
            {
              id: "FunctionNode_EvaluateModel_8759",
              position: {
                x: 775,
                y: -25,
              },
              type: "FunctionNode",
              data: {
                name: "Evaluate Model",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                inputHandles: ["model", "x", "y"],
                outputHandles: [],
                elementID: "EvaluateModel",
              },
              width: 353,
              height: 203,
              selected: false,
              positionAbsolute: {
                x: 775,
                y: -25,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_ArtefactImporter_7192",
              position: {
                x: 210,
                y: -45,
              },
              type: "FunctionNode/ArtefactImporter",
              data: {
                name: "ModelTuner",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                elementID: "ArtefactImporter",
              },
              width: 400,
              height: 60,
              selected: false,
              positionAbsolute: {
                x: 210,
                y: -45,
              },
              dragging: false,
            },
            {
              id: "FunctionNode_ArtefactImporter_1296",
              position: {
                x: 185,
                y: 70,
              },
              type: "FunctionNode/ArtefactImporter",
              data: {
                name: "MNISTDataLoader",
                hyperparams: [],
                commentText: "",
                commentType: "plain",
                elementID: "ArtefactImporter",
              },
              width: 400,
              height: 60,
              selected: false,
              positionAbsolute: {
                x: 185,
                y: 70,
              },
              dragging: false,
            },
          ],
          edges: [
            {
              id: "FunctionNode_EvaluateModel_8759_model",
              source: "FunctionNode_ArtefactImporter_7192",
              sourceHandle: "out",
              target: "FunctionNode_EvaluateModel_8759",
              targetHandle: "model",
              label: "model",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_EvaluateModel_8759_x",
              source: "FunctionNode_ArtefactImporter_1296",
              sourceHandle: "out",
              target: "FunctionNode_EvaluateModel_8759",
              targetHandle: "x",
              label: "x_test",
              animated: true,
              style: {
                stroke: "#000",
                strokeWidth: 1.5,
              },
            },
            {
              id: "FunctionNode_EvaluateModel_8759_y",
              source: "FunctionNode_ArtefactImporter_1296",
              sourceHandle: "out",
              target: "FunctionNode_EvaluateModel_8759",
              targetHandle: "y",
              label: "y_test",
            },
          ],
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
