import { createSlice } from "@reduxjs/toolkit";

const artefactsSlice = createSlice({
  name: "artefacts",
  initialState: {
    functions: {
      // NodeName: {
      //   displayName: "Name to Display",
      //   subcategorization: "Category to Place Node In",
      //   nodeType: "Full Node Type",
      //   defaultHyperparams: [...],
      //   defaultInputHandles: [...],
      //   defaultOutputHandles: [...],
      // },
      ArrayInput: {
        displayName: "Array Input",
        subcategorization: "Array I/O",
        nodeType: "FunctionNode/ArrayInput",
        defaultHyperparams: [
          {
            id: "input_shape",
            value: null,
          },
        ],
        defaultInputHandles: [],
        defaultOutputHandles: ["array"],
      },
      RecordArrayOutput: {
        displayName: "Record Array Output",
        subcategorization: "Array I/O",
        nodeType: "FunctionNode/RecordArrayOutput",
        defaultHyperparams: [],
        defaultInputHandles: ["array"],
        defaultOutputHandles: [],
      },
      GenerateAdamOptimizer: {
        displayName: "Generate ADAM Optimizer",
        subcategorization: "Optimizers",
        nodeType: "FunctionNode",
        defaultHyperparams: [
          {
            id: "learning_rate",
            value: "0.001",
          },
        ],
        defaultInputHandles: [],
        defaultOutputHandles: ["Optimizer"],
      },
      CreateAndApplyDenseLayer: {
        displayName: "Create and Apply Dense Layer",
        subcategorization: "Layers",
        nodeType: "FunctionNode",
        defaultHyperparams: [
          { id: "units", value: null },
          { id: "activation", value: "None" },
        ],
        defaultInputHandles: ["payload"],
        defaultOutputHandles: ["payload"],
      },
      CreateAndApplyConv2DLayer: {
        displayName: "Create and Apply Conv2D Layer",
        subcategorization: "Layers",
        nodeType: "FunctionNode",
        defaultHyperparams: [
          { id: "activation", value: "None" },
          { id: "filters", value: null },
          { id: "kernel_size", value: null },
          { id: "strides", value: "(1, 1)" },
          { id: "padding", value: "'valid'" },
        ],
        defaultInputHandles: ["payload"],
        defaultOutputHandles: ["payload"],
      },
      CreateAndApplyConv2DTransposeLayer: {
        displayName: "Create and Apply Conv2DTranspose Layer",
        subcategorization: "Layers",
        nodeType: "FunctionNode",
        defaultHyperparams: [
          { id: "activation", value: "None" },
          { id: "filters", value: null },
          { id: "kernel_size", value: null },
          { id: "strides", value: "(1, 1)" },
          { id: "padding", value: "'valid'" },
        ],
        defaultInputHandles: ["payload"],
        defaultOutputHandles: ["payload"],
      },
      Flatten: {
        displayName: "Flatten",
        subcategorization: "Layers",
        nodeType: "FunctionNode",
        defaultHyperparams: [],
        defaultInputHandles: ["payload"],
        defaultOutputHandles: ["payload"],
      },
      Dropout: {
        displayName: "Dropout",
        subcategorization: "Layers",
        nodeType: "FunctionNode",
        defaultHyperparams: [{ id: "rate", value: null }],
        defaultInputHandles: ["payload"],
        defaultOutputHandles: ["payload"],
      },
      Reshape: {
        displayName: "Reshape",
        subcategorization: "Layers",
        nodeType: "FunctionNode",
        defaultHyperparams: [{ id: "shape", value: null }],
        defaultInputHandles: ["payload"],
        defaultOutputHandles: ["payload"],
      },
      GetTunableInt: {
        displayName: "Get Tunable Int",
        subcategorization: "Tunables",
        nodeType: "FunctionNode",
        defaultHyperparams: [
          { id: "name", value: null },
          { id: "min_value", value: null },
          { id: "max_value", value: null },
          { id: "step", value: "None" },
          { id: "sampling", value: "'linear'" },
        ],
        defaultInputHandles: [],
        defaultOutputHandles: ["int"],
      },
      GetTunableFromList: {
        displayName: "Get Tunable From List",
        subcategorization: "Tunables",
        nodeType: "FunctionNode",
        defaultHyperparams: [
          {
            id: "name",
            value: null,
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
        defaultInputHandles: [],
        defaultOutputHandles: ["value"],
      },
      RawData: {
        displayName: "Emit Raw Data",
        subcategorization: "Miscellaneous",
        nodeType: "FunctionNode/RawData",
        defaultHyperparams: [{ id: "raw-python-data", value: "None" }],
      },
      ArtefactImporter: {
        displayName: "Use Another Artefact",
        subcategorization: "Miscellaneous",
        nodeType: "FunctionNode/ArtefactImporter",
        defaultHyperparams: [],
      },
      BeginGradientMonitoring: {
        displayName: "Begin Gradient Monitoring",
        subcategorization: "Gradient Monitoring",
        // TODO: Make a new subtype here.
        nodeType: "FunctionNode",
        defaultHyperparams: [
          {
            id: "persistent",
            value: "False",
          },
          {
            id: "watch_accessed_variables",
            value: "True",
          },
        ],
        defaultInputHandles: [],
        defaultOutputHandles: ["gradient-tapes", "monitoring-flag"],
      },
      EndGradientMonitoring: {
        displayName: "End Gradient Monitoring",
        subcategorization: "Gradient Monitoring",
        // TODO: Make a new subtype here.
        nodeType: "FunctionNode",
        defaultHyperparams: [],
        defaultInputHandles: ["payload"],
        defaultOutputHandles: ["payload"],
      },
      ZerosLike: {
        displayName: "Create Zeros Array Like Input",
        subcategorization: "Array Constructors",
        nodeType: "FunctionNode",
        defaultHyperparams: [],
        defaultInputHandles: ["input"],
        defaultOutputHandles: ["array"],
      },
      OnesLike: {
        displayName: "Create Ones Array Like Input",
        subcategorization: "Array Constructors",
        nodeType: "FunctionNode",
        defaultHyperparams: [],
        defaultInputHandles: ["input"],
        defaultOutputHandles: ["array"],
      },
      GenerateArrayFromNormalDistribution: {
        displayName: "Generate Array From Normal Distribution",
        subcategorization: "Array Constructors",
        nodeType: "FunctionNode",
        defaultHyperparams: [],
        defaultInputHandles: ["shape"],
        defaultOutputHandles: ["array"],
      },
      Add: {
        displayName: "Add",
        subcategorization: "Arithmetic",
        nodeType: "FunctionNode",
        defaultHyperparams: [],
        defaultInputHandles: ["addend 1", "addend 2"],
        defaultOutputHandles: ["sum"],
      },
      Subtract: {
        displayName: "Subtract",
        subcategorization: "Arithmetic",
        nodeType: "FunctionNode",
        defaultHyperparams: [],
        defaultInputHandles: ["minuend", "subtrahend"],
        defaultOutputHandles: ["difference"],
      },
      ScalarDivide: {
        displayName: "Divide by Scalar",
        subcategorization: "Arithmetic",
        nodeType: "FunctionNode",
        defaultHyperparams: [],
        defaultInputHandles: ["dividend", "divisor"],
        defaultOutputHandles: ["result"],
      },
      BinaryCrossentropy: {
        displayName: "Binary Crossentropy Loss",
        subcategorization: "Losses",
        nodeType: "FunctionNode",
        defaultHyperparams: [{ id: "from_logits", value: "False" }],
        defaultInputHandles: ["ground-truth", "prediction"],
        defaultOutputHandles: ["loss"],
      },
      Batch: {
        displayName: "Batch",
        subcategorization: "Data Transformations",
        nodeType: "FunctionNode",
        defaultHyperparams: [{ id: "batch_size", value: null }],
        defaultInputHandles: ["dataset"],
        defaultOutputHandles: ["dataset"],
      },
      Shuffle: {
        displayName: "Shuffle",
        subcategorization: "Data Transformations",
        nodeType: "FunctionNode",
        defaultHyperparams: [{ id: "buffer_size", value: null }],
        defaultInputHandles: ["dataset"],
        defaultOutputHandles: ["dataset"],
      },
      Reshape: {
        displayName: "Reshape",
        subcategorization: "Array Manipulations",
        nodeType: "FunctionNode",
        defaultHyperparams: [
          {
            id: "shape",
            value: null,
          },
        ],
        defaultInputHandles: ["array"],
        defaultOutputHandles: ["array"],
      },
      TypecastTo: {
        displayName: "Typecast To",
        subcategorization: "Array Manipulations",
        nodeType: "FunctionNode",
        defaultHyperparams: [
          {
            id: "dtype",
            value: null,
          },
        ],
        defaultInputHandles: ["array"],
        defaultOutputHandles: ["array"],
      },
      CreateDatasetFromNumpyArray: {
        displayName: "Create Dataset From Numpy Array",
        subcategorization: "Data Loading",
        nodeType: "FunctionNode",
        defaultHyperparams: [],
        defaultInputHandles: ["array"],
        defaultOutputHandles: ["dataset"],
      },
      EvaluateModel: {
        displayName: "Evaluate Model",
        subcategorization: "Model Testing",
        nodeType: "FunctionNode",
        defaultHyperparams: [],
        defaultInputHandles: ["model", "x", "y"],
        defaultOutputHandles: [],
      },
      GetBestModelAfterTuning: {
        displayName: "Get Best Model After Tuning",
        subcategorization: "Model Tuning",
        nodeType: "FunctionNode",
        defaultHyperparams: [
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
        defaultInputHandles: ["build_model"],
        defaultOutputHandles: ["best-model"],
      },
      LoadMNISTDataset: {
        displayName: "Load MNIST Dataset",
        subcategorization: "Data Loading",
        nodeType: "FunctionNode",
        defaultHyperparams: [],
        defaultInputHandles: [],
        defaultOutputHandles: ["x_train", "y_train", "x_test", "y_test"],
      },
      CompileModel: {
        displayName: "Compile Model",
        subcategorization: "Model Compilation",
        nodeType: "FunctionNode",
        defaultHyperparams: [],
        defaultInputHandles: ["model", "optimizer", "loss", "metrics"],
        defaultOutputHandles: ["compiled-model"],
      },
      RunTrainingStep: {
        displayName: "Run Training Step",
        subcategorization: "Model Training",
        nodeType: "FunctionNode",
        defaultHyperparams: [],
        defaultInputHandles: ["model", "model-input"],
        defaultOutputHandles: ["model-output"],
      },
      ApplyGradientsToModelInPlace: {
        displayName: "Apply Gradients To Model In Place",
        subcategorization: "Model Training",
        nodeType: "FunctionNode",
        defaultHyperparams: [],
        defaultInputHandles: [
          "model",
          "gradient-tape",
          "optimizer",
          "model-loss",
        ],
        defaultOutputHandles: [],
      },
    },
  },
  reducers: {},
});

export const artefactsReducer = artefactsSlice.reducer;
