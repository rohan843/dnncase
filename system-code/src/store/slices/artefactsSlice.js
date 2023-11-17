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
        subcategorization: "Convolutional Layers",
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
        ],
        defaultInputHandles: ["in"],
        defaultOutputHandles: ["out"],
      },
    },
  },
  reducers: {},
});

export const artefactsReducer = artefactsSlice.reducer;
