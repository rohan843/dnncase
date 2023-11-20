import { createSlice } from "@reduxjs/toolkit";

const artefactsSlice = createSlice({
  name: "artefacts",
  initialState: {
    layers: {
      embedding: {
        displayName: "Embedding Layer",
        subcategorization: "Word Embeddings",
        defaultHyperparams: [
          {
            id: "input_dim",
            value: null,
          },
          {
            id: "output_dim",
            value: null,
          },
          {
            id: "embeddings_initializer",
            value: "uniform",
          },
          {
            id: "embeddings_regularizer",
            value: null,
          },
          {
            id: "activity_regularizer",
            value: null,
          },
          {
            id: "embeddings_constraint",
            value: null,
          },
          {
            id: "mask_zero",
            value: "False",
          },
          {
            id: "input_length",
            value: null,
          },
          {
            id: "sparse",
            value: "False",
          },
        ],
        defaultInputHandles: ["in"],
        defaultOutputHandles: ["out"],
      },
      conv2D: {
        displayName: "Conv2D",
        subcategorization: "Convolutional",
        defaultHyperparams: [
          {
            id: "filters",
            value: null,
          },
          {
            id: "kernel_size",
            value: null,
          },
          {
            id: "strides",
            value: "(1, 1)",
          },
          {
            id: "padding",
            value: "valid",
          },
          {
            id: "activation",
            value: "relu",
          },
        ],
        defaultInputHandles: ["in"],
        defaultOutputHandles: ["out"],
      },
      activation: {
        displayName: "Activation",
        subcategorization: "Math",
        defaultHyperparams: [
          {
            id: "activation",
            value: null,
          },
        ],
        defaultInputHandles: ["inSignal"],
        defaultOutputHandles: ["outSignal"],
      },
      activityRegularization: {
        displayName: "ActivityRegularization",
        subcategorization: "Regularization",
        defaultHyperparams: [
          {
            id: "l1",
            value: 0.0,
          },
          {
            id: "l2",
            value: 0.0,
          },
        ],
        defaultInputHandles: ["inSignal"],
        defaultOutputHandles: ["outSignal"],
      },
      add: {
        displayName: "Add",
        subcategorization: "Math",
        defaultHyperparams: [],
        defaultInputHandles: ["addend 1", "addend 2"],
        defaultOutputHandles: ["sum"],
      },
      concatenate: {
        displayName: "Concatenate",
        subcategorization: "Math",
        defaultHyperparams: [
          {
            id: "axis",
            value: -1,
          },
        ],
        defaultInputHandles: ["inSignal"],
        defaultOutputHandles: ["outSignal"],
      },
      dropout: {
        displayName: "Dropout",
        subcategorization: "Regularization",
        defaultHyperparams: [
          {
            id: "rate",
            value: null,
          },
        ],
        defaultInputHandles: ["inSignal"],
        defaultOutputHandles: ["outSignal"],
      },
      averagePooling2D: {
        displayName: "AveragePooling2D",
        subcategorization: "Pooling",
        defaultHyperparams: [
          {
            id: "pool_size",
            value: "(2, 2)",
          },
          {
            id: "strides",
            value: null,
          },
          {
            id: "padding",
            value: "valid",
          },
        ],
        defaultInputHandles: ["inSignal"],
        defaultOutputHandles: ["outSignal"],
      },
      maxPooling2D: {
        displayName: "MaxPooling2D",
        subcategorization: "Pooling",
        defaultHyperparams: [
          {
            id: "pool_size",
            value: "(2, 2)",
          },
          {
            id: "strides",
            value: null,
          },
          {
            id: "padding",
            value: "valid",
          },
        ],
        defaultInputHandles: ["inSignal"],
        defaultOutputHandles: ["outSignal"],
      },
      upSampling2D: {
        displayName: "UpSampling2D",
        subcategorization: "Sampling",
        defaultHyperparams: [
          {
            id: "size",
            value: "(2, 2)",
          },
        ],
        defaultInputHandles: ["inSignal"],
        defaultOutputHandles: ["outSignal"],
      },
      conv2DTranspose: {
        displayName: "Conv2DTranspose",
        subcategorization: "Convolutional",
        defaultHyperparams: [
          {
            id: "filters",
            value: null,
          },
          {
            id: "kernel_size",
            value: null,
          },
          {
            id: "strides",
            value: "(1, 1)",
          },
          {
            id: "padding",
            value: "valid",
          },
          {
            id: "activation",
            value: null,
          },
        ],
        defaultInputHandles: ["inSignal"],
        defaultOutputHandles: ["outSignal"],
      },
      dense: {
        displayName: "Dense",
        subcategorization: "Dense",
        defaultHyperparams: [
          {
            id: "units",
            value: null,
          },
          {
            id: "activation",
            value: null,
          },
        ],
        defaultInputHandles: ["inSignal"],
        defaultOutputHandles: ["outSignal"],
      },
      flatten: {
        displayName: "Flatten",
        subcategorization: "Dense",
        defaultHyperparams: [],
        defaultInputHandles: ["inSignal"],
        defaultOutputHandles: ["outSignal"],
      },
    },
  },
  reducers: {},
});

export const artefactsReducer = artefactsSlice.reducer;
