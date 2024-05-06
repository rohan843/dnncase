const jsonObject = {
  artefactArray: [
    {
      artefactMetadata: { name: "Constants", artefactType: "ArtefactType" },
      nodes: [
        {
          id: "FunctionNode_RawData_666",
          nodeData: {
            name: "Emit Raw Data",
            hyperparams: [{ id: "raw-python-data", value: "None" }],
            commentText: "",
            commentType: "plain",
            elementID: "RawData",
            innerCode: "256",
            "raw-python-data": "None",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "RawData",
        },
        {
          id: "FunctionNode_RawData_1086",
          nodeData: {
            name: "Emit Raw Data",
            hyperparams: [{ id: "raw-python-data", value: "None" }],
            commentText: "",
            commentType: "plain",
            elementID: "RawData",
            innerCode: "50",
            "raw-python-data": "None",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "RawData",
        },
        {
          id: "FunctionNode_RawData_1438",
          nodeData: {
            name: "Emit Raw Data",
            hyperparams: [{ id: "raw-python-data", value: "None" }],
            commentText: "",
            commentType: "plain",
            elementID: "RawData",
            innerCode: "100",
            "raw-python-data": "None",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "RawData",
        },
        {
          id: "Output_4061",
          nodeData: { name: "noise_dim" },
          nodeType: "Output",
        },
        { id: "Output_4262", nodeData: { name: "EPOCHS" }, nodeType: "Output" },
        {
          id: "Output_4475",
          nodeData: { name: "BATCH_SIZE" },
          nodeType: "Output",
        },
      ],
      edges: [
        {
          sourceNodeID: "FunctionNode_RawData_666",
          sourceNodeHandleID: "out",
          targetNodeID: "Output_4475",
          targetNodeHandleID: "in",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_RawData_1086",
          sourceNodeHandleID: "out",
          targetNodeID: "Output_4262",
          targetNodeHandleID: "in",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_RawData_1438",
          sourceNodeHandleID: "out",
          targetNodeID: "Output_4061",
          targetNodeHandleID: "in",
          inLabel: "",
          outLabel: "",
        },
      ],
    },
    {
      artefactMetadata: {
        name: "DiscriminatorLoss",
        artefactType: "LossFunctionArtefact",
      },
      nodes: [
        {
          id: "Input_1675",
          nodeData: { name: "real_output" },
          nodeType: "Input",
        },
        {
          id: "Input_1853",
          nodeData: { name: "fake_output" },
          nodeType: "Input",
        },
        {
          id: "FunctionNode_ZerosLike_283",
          nodeData: {
            name: "Create Zeros Array Like Input",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            inputHandles: ["input"],
            outputHandles: ["array"],
            elementID: "ZerosLike",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "ZerosLike",
        },
        {
          id: "FunctionNode_OnesLike_778",
          nodeData: {
            name: "Create Ones Array Like Input",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            inputHandles: ["input"],
            outputHandles: ["array"],
            elementID: "OnesLike",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "OnesLike",
        },
        {
          id: "FunctionNode_Add_7244",
          nodeData: {
            name: "Add",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            inputHandles: ["addend 1", "addend 2"],
            outputHandles: ["sum"],
            elementID: "Add",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "Add",
        },
        { id: "Output_6076", nodeData: { name: "loss" }, nodeType: "Output" },
        {
          id: "FunctionNode_BinaryCrossentropy_5428",
          nodeData: {
            name: "Binary Crossentropy Loss",
            hyperparams: [{ id: "from_logits", value: "True" }],
            commentText: "",
            commentType: "plain",
            inputHandles: ["ground-truth", "prediction"],
            outputHandles: ["loss"],
            elementID: "BinaryCrossentropy",
            from_logits: "True",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "BinaryCrossentropy",
        },
        {
          id: "FunctionNode_BinaryCrossentropy_5712",
          nodeData: {
            name: "Binary Crossentropy Loss",
            hyperparams: [{ id: "from_logits", value: "True" }],
            commentText: "",
            commentType: "plain",
            inputHandles: ["ground-truth", "prediction"],
            outputHandles: ["loss"],
            elementID: "BinaryCrossentropy",
            from_logits: "True",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "BinaryCrossentropy",
        },
      ],
      edges: [
        {
          sourceNodeID: "Input_1675",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_OnesLike_778",
          targetNodeHandleID: "input",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "Input_1853",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_ZerosLike_283",
          targetNodeHandleID: "input",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_OnesLike_778",
          sourceNodeHandleID: "array",
          targetNodeID: "FunctionNode_BinaryCrossentropy_5712",
          targetNodeHandleID: "ground-truth",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "Input_1675",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_BinaryCrossentropy_5712",
          targetNodeHandleID: "prediction",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_ZerosLike_283",
          sourceNodeHandleID: "array",
          targetNodeID: "FunctionNode_BinaryCrossentropy_5428",
          targetNodeHandleID: "ground-truth",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "Input_1853",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_BinaryCrossentropy_5428",
          targetNodeHandleID: "prediction",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_BinaryCrossentropy_5712",
          sourceNodeHandleID: "loss",
          targetNodeID: "FunctionNode_Add_7244",
          targetNodeHandleID: "addend 1",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_BinaryCrossentropy_5428",
          sourceNodeHandleID: "loss",
          targetNodeID: "FunctionNode_Add_7244",
          targetNodeHandleID: "addend 2",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_Add_7244",
          sourceNodeHandleID: "sum",
          targetNodeID: "Output_6076",
          targetNodeHandleID: "in",
          inLabel: "",
          outLabel: "",
        },
      ],
    },
    {
      artefactMetadata: {
        name: "DiscriminatorModel",
        artefactType: "ModelArchitectureType",
      },
      nodes: [
        {
          id: "FunctionNode_ArrayInput_152",
          nodeData: {
            name: "Array Input",
            hyperparams: [{ id: "input_shape", value: "[28, 28, 1]" }],
            commentText: "",
            commentType: "plain",
            inputHandles: [],
            outputHandles: ["array"],
            elementID: "ArrayInput",
            input_shape: "[28, 28, 1]",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "ArrayInput",
        },
        {
          id: "FunctionNode_RecordArrayOutput_920",
          nodeData: {
            name: "Record Array Output",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            inputHandles: ["array"],
            outputHandles: [],
            elementID: "RecordArrayOutput",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "RecordArrayOutput",
        },
        {
          id: "FunctionNode_CreateAndApplyConv2DLayer_3100",
          nodeData: {
            name: "Create and Apply Conv2D Layer",
            hyperparams: [
              { id: "activation", value: "leakyrelu" },
              { id: "filters", value: "64" },
              { id: "kernel_size", value: "(5, 5)" },
              { id: "strides", value: "(2, 2)" },
              { id: "padding", value: "'same'" },
            ],
            commentText: "",
            commentType: "plain",
            inputHandles: ["payload"],
            outputHandles: ["payload"],
            elementID: "CreateAndApplyConv2DLayer",
            activation: "leakyrelu",
            filters: "64",
            kernel_size: "(5, 5)",
            strides: "(2, 2)",
            padding: "'same'",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "CreateAndApplyConv2DLayer",
        },
        {
          id: "FunctionNode_Dropout_4028",
          nodeData: {
            name: "Dropout Layer",
            hyperparams: [{ id: "rate", value: "0.3" }],
            commentText: "",
            commentType: "plain",
            inputHandles: ["payload"],
            outputHandles: ["payload"],
            elementID: "Dropout",
            rate: "0.3",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "Dropout",
        },
        {
          id: "FunctionNode_CreateAndApplyConv2DLayer_5126",
          nodeData: {
            name: "Create and Apply Conv2D Layer",
            hyperparams: [
              { id: "activation", value: "leakyrelu" },
              { id: "filters", value: "128" },
              { id: "kernel_size", value: "(5, 5)" },
              { id: "strides", value: "(2, 2)" },
              { id: "padding", value: "'same'" },
            ],
            commentText: "",
            commentType: "plain",
            inputHandles: ["payload"],
            outputHandles: ["payload"],
            elementID: "CreateAndApplyConv2DLayer",
            activation: "leakyrelu",
            filters: "128",
            kernel_size: "(5, 5)",
            strides: "(2, 2)",
            padding: "'same'",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "CreateAndApplyConv2DLayer",
        },
        {
          id: "FunctionNode_Dropout_6090",
          nodeData: {
            name: "Dropout Layer",
            hyperparams: [{ id: "rate", value: "0.3" }],
            commentText: "",
            commentType: "plain",
            inputHandles: ["payload"],
            outputHandles: ["payload"],
            elementID: "Dropout",
            rate: "0.3",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "Dropout",
        },
        {
          id: "FunctionNode_Flatten_6700",
          nodeData: {
            name: "Flatten",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            inputHandles: ["payload"],
            outputHandles: ["payload"],
            elementID: "Flatten",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "Flatten",
        },
        {
          id: "FunctionNode_CreateAndApplyDenseLayer_7904",
          nodeData: {
            name: "Create and Apply Dense Layer",
            hyperparams: [
              { id: "units", value: "1" },
              { id: "activation", value: "None" },
            ],
            commentText: "",
            commentType: "plain",
            inputHandles: ["payload"],
            outputHandles: ["payload"],
            elementID: "CreateAndApplyDenseLayer",
            units: "1",
            activation: "None",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "CreateAndApplyDenseLayer",
        },
      ],
      edges: [
        {
          sourceNodeID: "FunctionNode_ArrayInput_152",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_CreateAndApplyConv2DLayer_3100",
          targetNodeHandleID: "payload",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_CreateAndApplyConv2DLayer_3100",
          sourceNodeHandleID: "payload",
          targetNodeID: "FunctionNode_Dropout_4028",
          targetNodeHandleID: "payload",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_Dropout_4028",
          sourceNodeHandleID: "payload",
          targetNodeID: "FunctionNode_CreateAndApplyConv2DLayer_5126",
          targetNodeHandleID: "payload",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_CreateAndApplyConv2DLayer_5126",
          sourceNodeHandleID: "payload",
          targetNodeID: "FunctionNode_Dropout_6090",
          targetNodeHandleID: "payload",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_Dropout_6090",
          sourceNodeHandleID: "payload",
          targetNodeID: "FunctionNode_Flatten_6700",
          targetNodeHandleID: "payload",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_Flatten_6700",
          sourceNodeHandleID: "payload",
          targetNodeID: "FunctionNode_CreateAndApplyDenseLayer_7904",
          targetNodeHandleID: "payload",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_CreateAndApplyDenseLayer_7904",
          sourceNodeHandleID: "payload",
          targetNodeID: "FunctionNode_RecordArrayOutput_920",
          targetNodeHandleID: "in",
          inLabel: "",
          outLabel: "",
        },
      ],
    },
    {
      artefactMetadata: {
        name: "GeneratorLoss",
        artefactType: "LossFunctionArtefact",
      },
      nodes: [
        {
          id: "Input_1801",
          nodeData: { name: "fake_output" },
          nodeType: "Input",
        },
        { id: "Output_2169", nodeData: { name: "loss" }, nodeType: "Output" },
        {
          id: "FunctionNode_BinaryCrossentropy_5735",
          nodeData: {
            name: "Binary Crossentropy Loss",
            hyperparams: [{ id: "from_logits", value: "True" }],
            commentText: "",
            commentType: "plain",
            inputHandles: ["ground-truth", "prediction"],
            outputHandles: ["loss"],
            elementID: "BinaryCrossentropy",
            from_logits: "True",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "BinaryCrossentropy",
        },
        {
          id: "FunctionNode_OnesLike_3089",
          nodeData: {
            name: "Create Ones Array Like Input",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            inputHandles: ["input"],
            outputHandles: ["array"],
            elementID: "OnesLike",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "OnesLike",
        },
      ],
      edges: [
        {
          sourceNodeID: "Input_1801",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_OnesLike_3089",
          targetNodeHandleID: "input",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_OnesLike_3089",
          sourceNodeHandleID: "array",
          targetNodeID: "FunctionNode_BinaryCrossentropy_5735",
          targetNodeHandleID: "ground-truth",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "Input_1801",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_BinaryCrossentropy_5735",
          targetNodeHandleID: "prediction",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_BinaryCrossentropy_5735",
          sourceNodeHandleID: "loss",
          targetNodeID: "Output_2169",
          targetNodeHandleID: "in",
          inLabel: "",
          outLabel: "",
        },
      ],
    },
    {
      artefactMetadata: {
        name: "GeneratorModel",
        artefactType: "ModelArchitectureType",
      },
      nodes: [
        {
          id: "FunctionNode_CreateAndApplyDenseLayer_9093",
          nodeData: {
            name: "Create and Apply Dense Layer",
            hyperparams: [
              { id: "units", value: "7*7*256" },
              { id: "activation", value: "leakyrelu" },
            ],
            commentText: "",
            commentType: "plain",
            inputHandles: ["payload"],
            outputHandles: ["payload"],
            elementID: "CreateAndApplyDenseLayer",
            units: "7*7*256",
            activation: "leakyrelu",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "CreateAndApplyDenseLayer",
        },
        {
          id: "FunctionNode_ReshapeLayer_521",
          nodeData: {
            name: "Reshape Layer",
            hyperparams: [{ id: "shape", value: "(7, 7, 256)" }],
            commentText: "",
            commentType: "plain",
            inputHandles: ["payload"],
            outputHandles: ["payload"],
            elementID: "ReshapeLayer",
            shape: "(7, 7, 256)",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "ReshapeLayer",
        },
        {
          id: "FunctionNode_CreateAndApplyConv2DTransposeLayer_1466",
          nodeData: {
            name: "Create and Apply Conv2DTranspose Layer",
            hyperparams: [
              { id: "activation", value: "leakyrelu" },
              { id: "filters", value: "128" },
              { id: "kernel_size", value: "(5, 5)" },
              { id: "strides", value: "(1, 1)" },
              { id: "padding", value: "'same'" },
            ],
            commentText: "",
            commentType: "plain",
            inputHandles: ["payload"],
            outputHandles: ["payload"],
            elementID: "CreateAndApplyConv2DTransposeLayer",
            activation: "leakyrelu",
            filters: "128",
            kernel_size: "(5, 5)",
            strides: "(1, 1)",
            padding: "'same'",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "CreateAndApplyConv2DTransposeLayer",
        },
        {
          id: "FunctionNode_ArrayInput_6796",
          nodeData: {
            name: "Array Input",
            hyperparams: [{ id: "input_shape", value: "(100,)" }],
            commentText: "",
            commentType: "plain",
            inputHandles: [],
            outputHandles: ["array"],
            elementID: "ArrayInput",
            input_shape: "(100,)",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "ArrayInput",
        },
        {
          id: "FunctionNode_CreateAndApplyConv2DTransposeLayer_1058",
          nodeData: {
            name: "Create and Apply Conv2DTranspose Layer",
            hyperparams: [
              { id: "activation", value: "leakyrelu" },
              { id: "filters", value: "64" },
              { id: "kernel_size", value: null },
              { id: "strides", value: "(2, 2)" },
              { id: "padding", value: "'same'" },
            ],
            commentText: "",
            commentType: "plain",
            inputHandles: ["payload"],
            outputHandles: ["payload"],
            elementID: "CreateAndApplyConv2DTransposeLayer",
            activation: "leakyrelu",
            filters: "64",
            kernel_size: null,
            strides: "(2, 2)",
            padding: "'same'",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "CreateAndApplyConv2DTransposeLayer",
        },
        {
          id: "FunctionNode_CreateAndApplyConv2DTransposeLayer_1275",
          nodeData: {
            name: "Create and Apply Conv2DTranspose Layer",
            hyperparams: [
              { id: "activation", value: "tanh" },
              { id: "filters", value: "1" },
              { id: "kernel_size", value: null },
              { id: "strides", value: "(2, 2)" },
              { id: "padding", value: "'same'" },
            ],
            commentText: "",
            commentType: "plain",
            inputHandles: ["payload"],
            outputHandles: ["payload"],
            elementID: "CreateAndApplyConv2DTransposeLayer",
            activation: "tanh",
            filters: "1",
            kernel_size: null,
            strides: "(2, 2)",
            padding: "'same'",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "CreateAndApplyConv2DTransposeLayer",
        },
        {
          id: "FunctionNode_RecordArrayOutput_6302",
          nodeData: {
            name: "Record Array Output",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            inputHandles: ["array"],
            outputHandles: [],
            elementID: "RecordArrayOutput",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "RecordArrayOutput",
        },
      ],
      edges: [
        {
          sourceNodeID: "FunctionNode_ArrayInput_6796",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_CreateAndApplyDenseLayer_9093",
          targetNodeHandleID: "payload",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_CreateAndApplyDenseLayer_9093",
          sourceNodeHandleID: "payload",
          targetNodeID: "FunctionNode_ReshapeLayer_521",
          targetNodeHandleID: "payload",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_ReshapeLayer_521",
          sourceNodeHandleID: "payload",
          targetNodeID: "FunctionNode_CreateAndApplyConv2DTransposeLayer_1466",
          targetNodeHandleID: "payload",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_CreateAndApplyConv2DTransposeLayer_1466",
          sourceNodeHandleID: "payload",
          targetNodeID: "FunctionNode_CreateAndApplyConv2DTransposeLayer_1058",
          targetNodeHandleID: "payload",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_CreateAndApplyConv2DTransposeLayer_1058",
          sourceNodeHandleID: "payload",
          targetNodeID: "FunctionNode_CreateAndApplyConv2DTransposeLayer_1275",
          targetNodeHandleID: "payload",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_CreateAndApplyConv2DTransposeLayer_1275",
          sourceNodeHandleID: "payload",
          targetNodeID: "FunctionNode_RecordArrayOutput_6302",
          targetNodeHandleID: "in",
          inLabel: "",
          outLabel: "",
        },
      ],
    },
    {
      artefactMetadata: { name: "LoadedData", artefactType: "ArtefactType" },
      nodes: [
        {
          id: "FunctionNode_ArtefactImporter_4394",
          nodeData: {
            name: "MNISTDataLoader",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            elementID: "ArtefactImporter",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "ArtefactImporter",
          sourceArtefact: "MNISTDataLoader",
        },
        {
          id: "Output_6582",
          nodeData: { name: "train_dataset" },
          nodeType: "Output",
        },
      ],
      edges: [
        {
          sourceNodeID: "FunctionNode_ArtefactImporter_4394",
          sourceNodeHandleID: "out",
          targetNodeID: "Output_6582",
          targetNodeHandleID: "in",
          inLabel: "train_dataset",
          outLabel: "train_dataset",
        },
      ],
    },
    {
      artefactMetadata: {
        name: "MNISTDataLoader",
        artefactType: "DataLoaderType",
      },
      nodes: [
        {
          id: "FunctionNode_ArtefactImporter_4199",
          nodeData: {
            name: "Constants",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            elementID: "ArtefactImporter",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "ArtefactImporter",
          sourceArtefact: "Constants",
        },
        {
          id: "Output_1864",
          nodeData: { name: "y_train" },
          nodeType: "Output",
        },
        {
          id: "FunctionNode_TypecastTo_8299",
          nodeData: {
            name: "Typecast To",
            hyperparams: [{ id: "dtype", value: "'float32'" }],
            commentText: "",
            commentType: "plain",
            inputHandles: ["array"],
            outputHandles: ["array"],
            elementID: "TypecastTo",
            dtype: "'float32'",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "TypecastTo",
        },
        {
          id: "FunctionNode_Subtract_3406",
          nodeData: {
            name: "Subtract",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            inputHandles: ["minuend", "subtrahend"],
            outputHandles: ["difference"],
            elementID: "Subtract",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "Subtract",
        },
        {
          id: "FunctionNode_ScalarDivide_7245",
          nodeData: {
            name: "Divide by Scalar",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            inputHandles: ["dividend", "divisor"],
            outputHandles: ["result"],
            elementID: "ScalarDivide",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "ScalarDivide",
        },
        {
          id: "FunctionNode_CreateDatasetFromNumpyArray_5357",
          nodeData: {
            name: "Create Dataset From Numpy Array",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            inputHandles: ["array"],
            outputHandles: ["dataset"],
            elementID: "CreateDatasetFromNumpyArray",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "CreateDatasetFromNumpyArray",
        },
        {
          id: "FunctionNode_Shuffle_1475",
          nodeData: {
            name: "Shuffle",
            hyperparams: [{ id: "buffer_size", value: "60000" }],
            commentText: "",
            commentType: "plain",
            inputHandles: ["dataset"],
            outputHandles: ["dataset"],
            elementID: "Shuffle",
            buffer_size: "60000",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "Shuffle",
        },
        {
          id: "FunctionNode_Batch_1942",
          nodeData: {
            name: "Batch",
            hyperparams: [{ id: "batch_size", value: null }],
            commentText: "",
            commentType: "plain",
            inputHandles: ["dataset"],
            outputHandles: ["dataset"],
            elementID: "Batch",
            batch_size: null,
          },
          nodeType: "FunctionNode",
          nodeSubtype: "Batch",
        },
        {
          id: "Output_8935",
          nodeData: { hyperparams: [], name: "BATCH_SIZE" },
          nodeType: "DataVariable",
          nodeSubtype: "IN",
        },
        {
          id: "Output_9465",
          nodeData: { hyperparams: [], name: "BATCH_SIZE" },
          nodeType: "DataVariable",
          nodeSubtype: "OUT",
        },
        {
          id: "Output_5888",
          nodeData: { name: "train_dataset" },
          nodeType: "Output",
        },
        {
          id: "FunctionNode_Reshape_251",
          nodeData: {
            name: "Reshape",
            hyperparams: [{ id: "shape", value: "(-1, 28, 28, 1)" }],
            commentText: "",
            commentType: "plain",
            inputHandles: ["array"],
            outputHandles: ["array"],
            elementID: "Reshape",
            shape: "(-1, 28, 28, 1)",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "Reshape",
        },
        {
          id: "FunctionNode_RawData_4093",
          nodeData: {
            name: "Emit Raw Data",
            hyperparams: [{ id: "raw-python-data", value: "None" }],
            commentText: "",
            commentType: "plain",
            elementID: "RawData",
            innerCode: "127.5",
            "raw-python-data": "None",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "RawData",
        },
        {
          id: "FunctionNode_LoadMNISTDataset_5832",
          nodeData: {
            name: "Load MNIST Dataset",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            inputHandles: [],
            outputHandles: ["mnist-data"],
            elementID: "LoadMNISTDataset",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "LoadMNISTDataset",
        },
      ],
      edges: [
        {
          sourceNodeID: "FunctionNode_ArtefactImporter_4199",
          sourceNodeHandleID: "out",
          targetNodeID: "Output_8935",
          targetNodeHandleID: "input",
          inLabel: "BATCH_SIZE",
          outLabel: "BATCH_SIZE",
        },
        {
          sourceNodeID: "FunctionNode_Reshape_251",
          sourceNodeHandleID: "array",
          targetNodeID: "FunctionNode_TypecastTo_8299",
          targetNodeHandleID: "array",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_TypecastTo_8299",
          sourceNodeHandleID: "array",
          targetNodeID: "FunctionNode_Subtract_3406",
          targetNodeHandleID: "minuend",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_RawData_4093",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_Subtract_3406",
          targetNodeHandleID: "subtrahend",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_Subtract_3406",
          sourceNodeHandleID: "difference",
          targetNodeID: "FunctionNode_ScalarDivide_7245",
          targetNodeHandleID: "dividend",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_RawData_4093",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_ScalarDivide_7245",
          targetNodeHandleID: "divisor",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_ScalarDivide_7245",
          sourceNodeHandleID: "result",
          targetNodeID: "FunctionNode_CreateDatasetFromNumpyArray_5357",
          targetNodeHandleID: "array",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_CreateDatasetFromNumpyArray_5357",
          sourceNodeHandleID: "dataset",
          targetNodeID: "FunctionNode_Shuffle_1475",
          targetNodeHandleID: "dataset",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_Shuffle_1475",
          sourceNodeHandleID: "dataset",
          targetNodeID: "FunctionNode_Batch_1942",
          targetNodeHandleID: "dataset",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "Output_9465",
          sourceNodeHandleID: "output",
          targetNodeID: "FunctionNode_Batch_1942",
          targetNodeHandleID: "multi-in",
          inLabel: "batch_size",
          outLabel: "batch_size",
        },
        {
          sourceNodeID: "FunctionNode_Batch_1942",
          sourceNodeHandleID: "dataset",
          targetNodeID: "Output_5888",
          targetNodeHandleID: "in",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_LoadMNISTDataset_5832",
          sourceNodeHandleID: "mnist-data",
          targetNodeID: "FunctionNode_Reshape_251",
          targetNodeHandleID: "array",
          inLabel: "x_train",
          outLabel: "x_train",
        },
        {
          sourceNodeID: "FunctionNode_LoadMNISTDataset_5832",
          sourceNodeHandleID: "mnist-data",
          targetNodeID: "Output_1864",
          targetNodeHandleID: "in",
          inLabel: "y_train",
          outLabel: "y_train",
        },
      ],
    },
    {
      artefactMetadata: {
        name: "TrainStep",
        artefactType: "TrainStepArtefact",
      },
      nodes: [
        {
          id: "FunctionNode_GenerateAdamOptimizer_2299",
          nodeData: {
            name: "Generate ADAM Optimizer",
            hyperparams: [{ id: "learning_rate", value: "0.001" }],
            commentText: "",
            commentType: "plain",
            inputHandles: [],
            outputHandles: ["Optimizer"],
            elementID: "GenerateAdamOptimizer",
            learning_rate: "0.001",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "GenerateAdamOptimizer",
        },
        {
          id: "FunctionNode_GenerateAdamOptimizer_2652",
          nodeData: {
            name: "Generate ADAM Optimizer",
            hyperparams: [{ id: "learning_rate", value: "0.001" }],
            commentText: "",
            commentType: "plain",
            inputHandles: [],
            outputHandles: ["Optimizer"],
            elementID: "GenerateAdamOptimizer",
            learning_rate: "0.001",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "GenerateAdamOptimizer",
        },
        {
          id: "Output_41",
          nodeData: { hyperparams: [], name: "discriminator" },
          nodeType: "DataVariable",
          nodeSubtype: "IN",
        },
        {
          id: "Output_237",
          nodeData: { hyperparams: [], name: "generator" },
          nodeType: "DataVariable",
          nodeSubtype: "IN",
        },
        {
          id: "FunctionNode_ArtefactImporter_3883",
          nodeData: {
            name: "DiscriminatorModel",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            elementID: "ArtefactImporter",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "ArtefactImporter",
          sourceArtefact: "DiscriminatorModel",
        },
        {
          id: "FunctionNode_ArtefactImporter_4229",
          nodeData: {
            name: "GeneratorModel",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            elementID: "ArtefactImporter",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "ArtefactImporter",
          sourceArtefact: "GeneratorModel",
        },
        {
          id: "Output_2527",
          nodeData: { hyperparams: [], name: "discriminator_optimizer" },
          nodeType: "DataVariable",
          nodeSubtype: "IN",
        },
        {
          id: "Output_2916",
          nodeData: { hyperparams: [], name: "generator_optimizer" },
          nodeType: "DataVariable",
          nodeSubtype: "IN",
        },
        {
          id: "FunctionNode_ArtefactImporter_7766",
          nodeData: {
            name: "Constants",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            elementID: "ArtefactImporter",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "ArtefactImporter",
          sourceArtefact: "Constants",
        },
        {
          id: "ListPackerNode_1122",
          nodeData: {},
          nodeType: "Packer",
          nodeSubtype: "Ordered",
        },
        {
          id: "Output_671",
          nodeData: { hyperparams: [], name: "noise" },
          nodeType: "DataVariable",
          nodeSubtype: "IN",
        },
        {
          id: "FunctionNode_BeginGradientMonitoring_7658",
          nodeData: {
            name: "Begin Gradient Monitoring",
            hyperparams: [
              { id: "persistent", value: "False" },
              { id: "watch_accessed_variables", value: "True" },
            ],
            commentText: "",
            commentType: "plain",
            inputHandles: [],
            outputHandles: ["gradient-tapes", "monitoring-flag"],
            elementID: "BeginGradientMonitoring",
            persistent: "False",
            watch_accessed_variables: "True",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "BeginGradientMonitoring",
        },
        {
          id: "FunctionNode_EndGradientMonitoring_8211",
          nodeData: {
            name: "End Gradient Monitoring",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            inputHandles: ["payload"],
            outputHandles: ["payload"],
            elementID: "EndGradientMonitoring",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "EndGradientMonitoring",
        },
        {
          id: "Output_8162",
          nodeData: { hyperparams: [], name: "disc_tape" },
          nodeType: "DataVariable",
          nodeSubtype: "IN",
        },
        {
          id: "Output_8382",
          nodeData: { hyperparams: [], name: "gen_tape" },
          nodeType: "DataVariable",
          nodeSubtype: "IN",
        },
        {
          id: "PackerNode_6744",
          nodeData: {},
          nodeType: "Packer",
          nodeSubtype: "Named",
        },
        {
          id: "FunctionNode_ArtefactImporter_2418",
          nodeData: {
            name: "DiscriminatorLoss",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            elementID: "ArtefactImporter",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "ArtefactImporter",
          sourceArtefact: "DiscriminatorLoss",
        },
        {
          id: "FunctionNode_ArtefactImporter_2608",
          nodeData: {
            name: "GeneratorLoss",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            elementID: "ArtefactImporter",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "ArtefactImporter",
          sourceArtefact: "GeneratorLoss",
        },
        {
          id: "FunctionNode_GenerateArrayFromNormalDistribution_5242",
          nodeData: {
            name: "Generate Array From Normal Distribution",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            inputHandles: ["shape"],
            outputHandles: ["array"],
            elementID: "GenerateArrayFromNormalDistribution",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "GenerateArrayFromNormalDistribution",
        },
        {
          id: "FunctionNode_RunTrainingStep_9460",
          nodeData: {
            name: "Run Training Step",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            inputHandles: ["model", "model-input"],
            outputHandles: ["model-output"],
            elementID: "RunTrainingStep",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "RunTrainingStep",
        },
        {
          id: "FunctionNode_RunTrainingStep_9774",
          nodeData: {
            name: "Run Training Step",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            inputHandles: ["model", "model-input"],
            outputHandles: ["model-output"],
            elementID: "RunTrainingStep",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "RunTrainingStep",
        },
        {
          id: "FunctionNode_RunTrainingStep_93",
          nodeData: {
            name: "Run Training Step",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            inputHandles: ["model", "model-input"],
            outputHandles: ["model-output"],
            elementID: "RunTrainingStep",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "RunTrainingStep",
        },
        {
          id: "FunctionNode_ApplyGradientsToModelInPlace_1223",
          nodeData: {
            name: "Apply Gradients To Model In Place",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            inputHandles: ["model", "gradient-tape", "optimizer", "model-loss"],
            outputHandles: [],
            elementID: "ApplyGradientsToModelInPlace",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "ApplyGradientsToModelInPlace",
        },
        {
          id: "FunctionNode_ApplyGradientsToModelInPlace_1964",
          nodeData: {
            name: "Apply Gradients To Model In Place",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            inputHandles: ["model", "gradient-tape", "optimizer", "model-loss"],
            outputHandles: [],
            elementID: "ApplyGradientsToModelInPlace",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "ApplyGradientsToModelInPlace",
        },
        {
          id: "Output_7532",
          nodeData: { hyperparams: [], name: "noise" },
          nodeType: "DataVariable",
          nodeSubtype: "OUT",
        },
        {
          id: "Output_7681",
          nodeData: { hyperparams: [], name: "generator" },
          nodeType: "DataVariable",
          nodeSubtype: "OUT",
        },
        {
          id: "Output_3550",
          nodeData: { hyperparams: [], name: "discriminator" },
          nodeType: "DataVariable",
          nodeSubtype: "OUT",
        },
        {
          id: "Output_3746",
          nodeData: { hyperparams: [], name: "discriminator" },
          nodeType: "DataVariable",
          nodeSubtype: "OUT",
        },
        { id: "Input_5894", nodeData: { name: "images" }, nodeType: "Input" },
        {
          id: "Output_2543",
          nodeData: { hyperparams: [], name: "discriminator" },
          nodeType: "DataVariable",
          nodeSubtype: "OUT",
        },
        {
          id: "Output_2730",
          nodeData: { hyperparams: [], name: "gen_tape" },
          nodeType: "DataVariable",
          nodeSubtype: "OUT",
        },
        {
          id: "Output_2922",
          nodeData: { hyperparams: [], name: "disc_tape" },
          nodeType: "DataVariable",
          nodeSubtype: "OUT",
        },
        {
          id: "Output_3238",
          nodeData: { hyperparams: [], name: "discriminator_optimizer" },
          nodeType: "DataVariable",
          nodeSubtype: "OUT",
        },
        {
          id: "Output_3420",
          nodeData: { hyperparams: [], name: "generator_optimizer" },
          nodeType: "DataVariable",
          nodeSubtype: "OUT",
        },
        {
          id: "Output_3593",
          nodeData: { hyperparams: [], name: "generator" },
          nodeType: "DataVariable",
          nodeSubtype: "OUT",
        },
      ],
      edges: [
        {
          sourceNodeID: "FunctionNode_GenerateAdamOptimizer_2652",
          sourceNodeHandleID: "Optimizer",
          targetNodeID: "Output_2916",
          targetNodeHandleID: "input",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_GenerateAdamOptimizer_2299",
          sourceNodeHandleID: "Optimizer",
          targetNodeID: "Output_2527",
          targetNodeHandleID: "input",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_ArtefactImporter_4229",
          sourceNodeHandleID: "out",
          targetNodeID: "Output_237",
          targetNodeHandleID: "input",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_ArtefactImporter_3883",
          sourceNodeHandleID: "out",
          targetNodeID: "Output_41",
          targetNodeHandleID: "input",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_ArtefactImporter_7766",
          sourceNodeHandleID: "out",
          targetNodeID: "ListPackerNode_1122",
          targetNodeHandleID: "0",
          inLabel: "BATCH_SIZE",
          outLabel: "BATCH_SIZE",
        },
        {
          sourceNodeID: "FunctionNode_ArtefactImporter_7766",
          sourceNodeHandleID: "out",
          targetNodeID: "ListPackerNode_1122",
          targetNodeHandleID: "1",
          inLabel: "noise_dim",
          outLabel: "noise_dim",
        },
        {
          sourceNodeID: "ListPackerNode_1122",
          sourceNodeHandleID: "0",
          targetNodeID: "FunctionNode_GenerateArrayFromNormalDistribution_5242",
          targetNodeHandleID: "shape",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_GenerateArrayFromNormalDistribution_5242",
          sourceNodeHandleID: "array",
          targetNodeID: "Output_671",
          targetNodeHandleID: "input",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_BeginGradientMonitoring_7658",
          sourceNodeHandleID: "gradient-tapes",
          targetNodeID: "Output_8382",
          targetNodeHandleID: "input",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_BeginGradientMonitoring_7658",
          sourceNodeHandleID: "gradient-tapes",
          targetNodeID: "Output_8162",
          targetNodeHandleID: "input",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_BeginGradientMonitoring_7658",
          sourceNodeHandleID: "monitoring-flag",
          targetNodeID: "FunctionNode_RunTrainingStep_93",
          targetNodeHandleID: "multi-in",
          inLabel: "dependency-edge",
          outLabel: "dependency-edge",
        },
        {
          sourceNodeID: "Output_7681",
          sourceNodeHandleID: "output",
          targetNodeID: "FunctionNode_RunTrainingStep_93",
          targetNodeHandleID: "model",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "Output_7532",
          sourceNodeHandleID: "output",
          targetNodeID: "FunctionNode_RunTrainingStep_93",
          targetNodeHandleID: "model-input",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_RunTrainingStep_93",
          sourceNodeHandleID: "model-output",
          targetNodeID: "FunctionNode_RunTrainingStep_9774",
          targetNodeHandleID: "model-input",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "Output_3550",
          sourceNodeHandleID: "output",
          targetNodeID: "FunctionNode_RunTrainingStep_9774",
          targetNodeHandleID: "model",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "Output_3746",
          sourceNodeHandleID: "output",
          targetNodeID: "FunctionNode_RunTrainingStep_9460",
          targetNodeHandleID: "model",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "Input_5894",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_RunTrainingStep_9460",
          targetNodeHandleID: "model-input",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_RunTrainingStep_9460",
          sourceNodeHandleID: "model-output",
          targetNodeID: "FunctionNode_ArtefactImporter_2418",
          targetNodeHandleID: "multi-in",
          inLabel: "*",
          outLabel: "real_output",
        },
        {
          sourceNodeID: "FunctionNode_RunTrainingStep_9774",
          sourceNodeHandleID: "model-output",
          targetNodeID: "FunctionNode_ArtefactImporter_2418",
          targetNodeHandleID: "multi-in",
          inLabel: "*",
          outLabel: "fake_output",
        },
        {
          sourceNodeID: "FunctionNode_RunTrainingStep_9774",
          sourceNodeHandleID: "model-output",
          targetNodeID: "FunctionNode_ArtefactImporter_2608",
          targetNodeHandleID: "multi-in",
          inLabel: "*",
          outLabel: "real_output",
        },
        {
          sourceNodeID: "FunctionNode_ArtefactImporter_2608",
          sourceNodeHandleID: "out",
          targetNodeID: "PackerNode_6744",
          targetNodeHandleID: "multi-in",
          inLabel: "generator_loss",
          outLabel: "generator_loss",
        },
        {
          sourceNodeID: "FunctionNode_ArtefactImporter_2418",
          sourceNodeHandleID: "out",
          targetNodeID: "PackerNode_6744",
          targetNodeHandleID: "multi-in",
          inLabel: "discriminator_loss",
          outLabel: "discriminator_loss",
        },
        {
          sourceNodeID: "PackerNode_6744",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_EndGradientMonitoring_8211",
          targetNodeHandleID: "payload",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_EndGradientMonitoring_8211",
          sourceNodeHandleID: "payload",
          targetNodeID: "FunctionNode_ApplyGradientsToModelInPlace_1964",
          targetNodeHandleID: "model-loss",
          inLabel: "generator_loss",
          outLabel: "generator_loss",
        },
        {
          sourceNodeID: "FunctionNode_EndGradientMonitoring_8211",
          sourceNodeHandleID: "payload",
          targetNodeID: "FunctionNode_ApplyGradientsToModelInPlace_1223",
          targetNodeHandleID: "model-loss",
          inLabel: "discriminator_loss",
          outLabel: "discriminator_loss",
        },
        {
          sourceNodeID: "Output_3593",
          sourceNodeHandleID: "output",
          targetNodeID: "FunctionNode_ApplyGradientsToModelInPlace_1964",
          targetNodeHandleID: "model",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "Output_3420",
          sourceNodeHandleID: "output",
          targetNodeID: "FunctionNode_ApplyGradientsToModelInPlace_1964",
          targetNodeHandleID: "optimizer",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "Output_2730",
          sourceNodeHandleID: "output",
          targetNodeID: "FunctionNode_ApplyGradientsToModelInPlace_1964",
          targetNodeHandleID: "gradient-tape",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "Output_2543",
          sourceNodeHandleID: "output",
          targetNodeID: "FunctionNode_ApplyGradientsToModelInPlace_1223",
          targetNodeHandleID: "model",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "Output_2922",
          sourceNodeHandleID: "output",
          targetNodeID: "FunctionNode_ApplyGradientsToModelInPlace_1223",
          targetNodeHandleID: "gradient-tape",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "Output_3238",
          sourceNodeHandleID: "output",
          targetNodeID: "FunctionNode_ApplyGradientsToModelInPlace_1223",
          targetNodeHandleID: "optimizer",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_RunTrainingStep_9774",
          sourceNodeHandleID: "model-output",
          targetNodeID: "FunctionNode_RunTrainingStep_9460",
          targetNodeHandleID: "multi-in",
          inLabel: "dependency-edge",
          outLabel: "dependency-edge",
        },
      ],
    },
    {
      artefactMetadata: {
        name: "TrainingLoop",
        artefactType: "TrainLoopArtefact",
      },
      nodes: [
        {
          id: "Output_3124",
          nodeData: { hyperparams: [], name: "epochs" },
          nodeType: "DataVariable",
          nodeSubtype: "IN",
        },
        {
          id: "Output_3543",
          nodeData: { hyperparams: [], name: "epochs" },
          nodeType: "DataVariable",
          nodeSubtype: "OUT",
        },
        {
          id: "FunctionNode_ArtefactImporter_5940",
          nodeData: {
            name: "Constants",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            elementID: "ArtefactImporter",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "ArtefactImporter",
          sourceArtefact: "Constants",
        },
        {
          id: "FunctionNode_RepeatLoop_ArtefactImporter_1387",
          nodeData: {
            enclosedNodeType: "FunctionNode/ArtefactImporter",
            name: "tmp1",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            elementID: "ArtefactImporter",
          },
          nodeType: "Loop",
          nodeSubtype: "Repeat",
          innerArtefact: "tmp1",
        },
      ],
      edges: [
        {
          sourceNodeID: "FunctionNode_ArtefactImporter_5940",
          sourceNodeHandleID: "out",
          targetNodeID: "Output_3124",
          targetNodeHandleID: "input",
          inLabel: "EPOCHS",
          outLabel: "EPOCHS",
        },
        {
          sourceNodeID: "Output_3543",
          sourceNodeHandleID: "output",
          targetNodeID: "FunctionNode_RepeatLoop_ArtefactImporter_1387",
          targetNodeHandleID: "iteration-count",
          inLabel: "",
          outLabel: "",
        },
      ],
    },
    {
      artefactMetadata: { name: "tmp1", artefactType: "ArtefactType" },
      nodes: [
        {
          id: "FunctionNode_ArtefactImporter_4447",
          nodeData: {
            name: "LoadedData",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            elementID: "ArtefactImporter",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "ArtefactImporter",
          sourceArtefact: "LoadedData",
        },
        {
          id: "FunctionNode_ForInLoop_ArtefactImporter_9488",
          nodeData: {
            enclosedNodeType: "FunctionNode/ArtefactImporter",
            name: "tmp2",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            elementID: "ArtefactImporter",
          },
          nodeType: "Loop",
          nodeSubtype: "ForIn",
          innerArtefact: "tmp2",
        },
      ],
      edges: [
        {
          sourceNodeID: "FunctionNode_ArtefactImporter_4447",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_ForInLoop_ArtefactImporter_9488",
          targetNodeHandleID: "iterator",
          inLabel: "train_dataset",
          outLabel: "train_dataset",
        },
      ],
    },
    {
      artefactMetadata: { name: "tmp2", artefactType: "ArtefactType" },
      nodes: [
        {
          id: "Input_5144",
          nodeData: { name: "ss_element" },
          nodeType: "Input",
        },
        {
          id: "FunctionNode_ArtefactImporter_9156",
          nodeData: {
            name: "TrainStep",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            elementID: "ArtefactImporter",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "ArtefactImporter",
          sourceArtefact: "TrainStep",
        },
      ],
      edges: [
        {
          sourceNodeID: "Input_5144",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_ArtefactImporter_9156",
          targetNodeHandleID: "multi-in",
          inLabel: "images",
          outLabel: "images",
        },
      ],
    },
  ],
  executedFileName: "TrainStep",
};
const codeGenFuncs = {
  GenerateAdamOptimizer: function GenerateAdamOptimizer(params) {
    return {
      imports: [],
      execution: "",
      return: `keras.optimizers.Adam(learning_rate = ${params["learning_rate"]})`,
    };
  },
  GenerateArrayFromNormalDistribution:
    function GenerateArrayFromNormalDistribution(params) {
        return {
        imports: [],
        execution: "",
        return: `tf.random.normal(${params["shape"]})`,
      };
    },
  CreateAndApplyDenseLayer: function CreateAndApplyDenseLayer(params) {
    return {
      imports: ["from keras.layers import Dense"],
      execution: "",
      return: `Dense(units = ${params["units"]}, activation = "${params["activation"]}")(${params["payload"]})`,
    };
  },
  ArrayInput: function ArrayInput(params) {
    return {
      imports: ["from keras.layers import Input"],
      execution: "",
      return: `Input(shape = ${params["input_shape"]})`,
    };
  },

  Flatten: function Flatten(params) {
    return {
      imports: ["from keras.layers import Flatten"],
      execution: "",
      return: `Flatten()(${params["payload"]})`,
    };
  },
  GetTunableInt: function GetTunableInt(params) {
    return {
      imports: [],
      execution: "",
      return: `hp.Int(name=${params["name"]}, min_value = ${params["min_value"]},max_value = ${params["max_value"]},step = ${params["step"]},sampling= ${params["sampling"]})`,
    };
  },
  GetTunableFromList: function GetTunableFromList(params) {
    return {
      imports: [],
      execution: "",
      return: `hp.Choice(name=${params["name"]},values= ${params["values"]},ordered=${params["ordered"]})`,
    };
  },
  CreateDatasetFromNumpyArray: function CreateDatasetFromNumpyArray(params) {
    return {
      imports: [],
      execution: "",
      return: `tf.data.Dataset.from_tensor_slices(${params["array"]})`,
    };
  },

  RawData: function RawData(params) {
    return {
      imports: [],
      execution: "",
      return: `${params["innerCode"]}`,
    };
  },

  ZerosLike: function ZerosLike(params) {
    return {
      imports: [],
      execution: "",
      return: `tf.zeros_like(${params["input"]})`,
    };
  },

  OnesLike: function OnesLike(params) {
    return {
      imports: [],
      execution: "",
      return: `tf.ones_like(${params["input"]})`,
    };
  },
  Add: function Add(params) {
    return {
      imports: [],
      execution: "",
      return: `${params["addend 1"]} + ${params["addend 2"]}`,
    };
  },
  Subtract: function Subtract(params) {
    return {
      imports: [],
      execution: "",
      return: `${params["minuend"]} - ${params["subtrahend"]}`,
    };
  },
  ScalarDivide: function ScalarDivide(params) {
    return {
      imports: [],
      execution: "",
      return: `${params["dividend"]} / ${params["divisor"]}`,
    };
  },
  BinaryCrossentropy: function BinaryCrossentropy(params) {
    return {
      imports: [],
      execution: "",
      return: `tf.keras.losses.BinaryCrossentropy(from_logits=${params["from_logits"]})(${params["ground-truth"]},${params["prediction"]})`,
    };
  },

  Batch: function Batch(params) {
    return {
      imports: [],
      execution: "",
      return: `${params["dataset"]}.batch(batch_size = ${params["batch_size"]})`,
    };
  },
  Shuffle: function Shuffle(params) {
    return {
      imports: [],
      execution: "",
      return: `${params["dataset"]}.shuffle(buffer_size = ${params["buffer_size"]})`,
    };
  },
  Reshape: function Reshape(params) {
    return {
      imports: [],
      execution: "",
      return: `${params["array"]}.reshape(shape = ${params["shape"]})`,
    };
  },
  ReshapeLayer: function ReshapeLayer(params) {
    return {
      imports: ["from keras.layers import Reshape"],
      execution: "",
      return: `Reshape(shape = ${params["shape"]})(${params["payload"]})`,
    };
  },
  CreateAndApplyConv2DTransposeLayer:
    function CreateAndApplyConv2DTransposeLayer(params) {
      return {
        imports: ["from keras.layers import Conv2DTranspose"],
        execution: "",
        return: `Conv2DTranspose(activation="${params["activation"]}", filters="${params["filters"]}",kernal_size="${params["kernal_size"]}",strides="${params["strides"]}",padding="${params["padding"]}")(${params["payload"]})`,
      };
    },
  CreateAndApplyConv2DLayer: function CreateAndApplyConv2D(params) {
    return {
      imports: ["from keras.layers import Conv2D"],
      execution: "",
      return: `Conv2D(activation="${params["activation"]}", filters="${params["filters"]}",kernal_size="${params["kernal_size"]}",strides="${params["strides"]}",padding="${params["padding"]}")(${params["payload"]})`,
    };
  },
  Dropout: function Dropout(params) {
    return {
      imports: ["from keras.layers import Dropout"],
      execution: "",
      return: `Dropout(id = ${params["rate"]})(${params["payload"]})`,
    };
  },
  TypecastTo: function TypecastTo(params) {
    return {
      imports: [],
      execution: "",
      return: `${params["array"]}.astype(dtype = ${params["dtype"]})`,
    };
  },
  EvaluateModel: function EvaluateModel(params) {
    return {
      imports: [],
      execution: "",
      return: `${params["model"]}.evaluate(${params["x"]},${params["y"]})`,
    };
  },

  GetBestModelAfterTuning: function GetBestModelAfterTuning(params) {
    //TODO : return specify
    return {
      imports: ["import keras_tuner"],
      execution: `dnn_var_custom = keras_tuner.RandomSearch(
  ${params["build_model"]},
  objective=${params["objective"]},
  max_trials=${params["max_trials"]})
  dnn_var_custom.search(${params["x_train"]}, ${params["y_train"]}, epochs=${params["epochs"]}, validation_data=(${params["x_test"]}, ${params["y_test"]}))
`,
      return: `dnn_var_custom.get_best_models()[0]`,
    };
  },
  LoadMNISTDataset: function LoadMNISTDataset(params) {
    return {
      imports: [],
      execution:
        "(x_train,y_train,x_test,y_test)=keras.dataset.mnist.load_data()",
      return: `{"x_train" : x_train,
"y_train" : y_train,
"x_test" : x_test,
"y_test" : y_test
}`,
    };
  },
  RunTrainingStep: function RunTrainingStep(params) {
    return {
      imports: [],
      execution: "",
      return: `${params["model"]}(${params["model-input"]}, training=True)`,
    };
  },
  ApplyGradientsToModelInPlace: function ApplyGradientsToModelInplace(params) {
    return {
      imports: [],
      execution: "",
      return: `${params["optimizer"]}.apply_gradients(zip(${params["gradient-tape"]}.gradient(${params["model-loss"]}, ${params["model"]}.trainable_variables),${params["model"]}.trainable_variables))`,
    };
  },
  CompileModel: function CompileModel(params) {
    return {
      imports: [],
      execution: `${params["model"]}.compile(optimizer = ${params["optimizer"]} , loss = ${params["loss"]}, metrics =  ${params["metrics"]})`,
      return: params["model"],
    };
  },

  Named: function packerNamed(params) {
    let resultString = "{";
    for (let key in params) {
      if (params.hasOwnProperty(key)) {
        resultString = resultString + '"' + key + '": ' + params[key] + ", ";
      }
    }
    resultString = resultString.slice(0, -2);

    resultString += "}";

    return {
      imports: [],
      execution: "",
      return: `${resultString}`,
    };
  },
  Ordered: function packerOrdered(params) {
    let resultString = "[";
    for (let key in params) {
      if (params.hasOwnProperty(key)) {
        resultString = `${resultString}${params[key]},`;
      }
    }
    resultString = resultString.slice(0, -1);

    resultString += "]";

    return {
      imports: [],
      execution: "",
      return: `${resultString}`,
    };
  },

  CallBack: function Callback(params) {
    return {
      imports: [],
      execution: "",
      return: `${params}`,
    };
  },
};
let dnn_temp_id = 0;
let gen_code = "";
let importList = [["import tensorflow as tf", "from tensorflow import keras"]];
let gradientStart = false;
function main(jsonObject) {
  // mapping is done to give id to each artefact
  const artefactIdMapping = new Map();
  const idToArtefact = new Map();
  const artefactNodesInfo = new Map(); // artefactId -> nodeId -> [nodeType,nodeSubtype,source/innerArtefact,name,nodeData] ... if codn false then their name is not in array
  const nodeOutputEdgeMap = new Map();
  const nodeInputEdgeMap = new Map();
  const nodeInputList = new Map();
  //const artefactOutDegreeCnt = new Map();
  const dataVariableInpOutMap = new Map();
  artefactMapping(jsonObject, artefactIdMapping, idToArtefact); // artefact id mapping
  artefactNodesMapping(jsonObject, artefactIdMapping, artefactNodesInfo); // artefact nodes mapping
  nodeOutInEdgeMapping(
    jsonObject,
    nodeOutputEdgeMap,
    artefactIdMapping,
    nodeInputEdgeMap,
    nodeInputList,
    artefactNodesInfo
  ); // artefact-> nodeId->[dnn_temp_id,targetNodeID,targetNodeHandleID,inLabel,outLabel]
  //outdegreeCnt(nodeOutputEdgeMap, artefactOutDegreeCnt);
  DataVariableMapping(jsonObject, artefactIdMapping, dataVariableInpOutMap);
  console.log(artefactIdMapping);
  // console.log(artefactNodesInfo);
  // console.log(nodeOutputEdgeMap)
  // console.log(nodeInputEdgeMap)
  //console.log(artefactOutDegreeCnt)
  console.log(dataVariableInpOutMap);
  //Creating a DAG for the artefacts

  const graph = new Map();
  createGraph(jsonObject, artefactIdMapping, graph);

  console.log(graph);

  // Now we start topological sorting

  const visited = [];
  for (let i = 0; i < graph.size; i++) {
    visited.push(false);
  }

  const stack = [];

  for (const key of graph.keys()) {
    if (!visited[key]) dfs(key, graph, stack, visited);
  }

  const artefactOrder = []; // handle conditions if all artefacts are independent
  if (graph.size > 0) {
    while (stack.length > 0) {
      artefactOrder.push(stack.pop());
    }
  } else {
    for (const [key, value] of artefactIdMapping) {
      artefactOrder.push(value);
    }
  }
  console.log(artefactOrder);
  generateCode(
    artefactNodesInfo,
    idToArtefact,
    nodeInputEdgeMap,
    nodeOutputEdgeMap,
    nodeInputList,
    dataVariableInpOutMap,
    artefactOrder
  );
}
// Write code for Loop NOdes
function gen_arte_dfs(
  artefact_id,
  curr_node_id,
  edge_variable,
  idToArtefact,
  artefactNodesInfo,
  nodeOutputEdgeMap,
  nodeInputEdgeMap,
  nodeInputList,
  dataVariableInpOutMap,
  out_list
) {
  if (nodeInputEdgeMap.get(artefact_id).get(curr_node_id).length > 0) {
    nodeInputList.get(artefact_id).get(curr_node_id).push(edge_variable);
  }
  if (
    nodeInputEdgeMap.get(artefact_id).get(curr_node_id).length ===
    nodeInputList.get(artefact_id).get(curr_node_id).length
  ) {
    // generate code

    const nodeType = artefactNodesInfo.get(artefact_id).get(curr_node_id)[0];
    const nodeSubtype = artefactNodesInfo.get(artefact_id).get(curr_node_id)[1];
    //console.log(`gen_arte  nodeType=${nodeType}  nodeSubtype = ${nodeSubtype}`);
    const artefactName = artefactNodesInfo
      .get(artefact_id)
      .get(curr_node_id)[2];

    if (nodeType === "FunctionNode") {
      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id);
      let nodeData = artefactNodesInfo.get(artefact_id).get(curr_node_id)[4];
      let funcCode = null;
      let dnn_var;
      let str;
      if (list.length === 0) {
        dnn_var = 0;
      } else {
        dnn_var = dnn_temp_var_id();
      }
      if (nodeSubtype === "ArtefactImporter") {
        if (dnn_var === 0) {
          str = `
  ${artefactImporter(artefactName, nodeData)}`;
        } else {
          str = `
  ${dnn_var} = ${artefactImporter(artefactName, nodeData)}`;
        }
      } else {
        //console.log(`gen_arte subtype = ${nodeSubtype}`)
        funcCode = codeGenFuncs[nodeSubtype](nodeData);
        const funcReturn = funcCode.return;
        const funcExe = funcCode.execution;
        const imp = funcCode.imports;
        importList.push(imp);
        if (dnn_var === 0) {
          str = `
  ${funcExe}        
  ${funcReturn}`;
        } else {
          str = `
  ${funcExe} 
  ${dnn_var} = ${funcReturn}`;
        }
      }
      gen_code = gen_code.concat(str);

      if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
          if (
            list[i][3] === null ||
            list[i][3].length === 0 ||
            list[i][3] === "*"
          ) {
            let s = `
  ${list[i][0]} = ${dnn_var}`;

            gen_code = gen_code.concat(s);
          } else {
            let s = `
  ${list[i][0]}= ${dnn_var}["${list[i][3]}"]`;

            gen_code = gen_code.concat(s);
          }

          gen_arte_dfs(
            artefact_id,
            list[i][1],
            list[i][0],
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,
            dataVariableInpOutMap,
            out_list
          );
        }
      } else {
        return;
      }
    } else if (nodeType === "Input") {
      let name = artefactNodesInfo.get(artefact_id).get(curr_node_id)[3];
      let dnn_var = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0][0];

      let str = `
  ${dnn_var} = params["${name}"]`;

      gen_code = gen_code.concat(str);

      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id);
      if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
          gen_code = gen_code.concat(`
  ${list[i][0]} = ${dnn_var}`);
          gen_arte_dfs(
            artefact_id,
            list[i][1],
            list[i][0],
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,
            dataVariableInpOutMap,
            out_list
          );
        }
      } else {
        return;
      }
    } else if (nodeType === "Output") {
      let name = artefactNodesInfo.get(artefact_id).get(curr_node_id)[3];
      console.log(`name = ${name} edge = ${edge_variable}`);
      out_list[`${name}`] = edge_variable;
      return;
    } else if (nodeType === "Loop") {
      if (nodeSubtype === "Repeat") {
        //console.log("Repeat")
        const nodeData = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[4];
        const innerArtefact = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[2];
        const temp_var_destruct = dnn_temp_var_id();
        const temp_var_inner_arte = dnn_temp_var_id();

        let s = `
  ${temp_var_destruct} = {**${edge_variable}}
  for i in range(${nodeData["iteration-count"]}):
    ${temp_var_destruct}["ss_index"]=i
    ${temp_var_inner_arte}=${innerArtefact}(${temp_var_destruct})
    ${temp_var_destruct}.update(${temp_var_inner_arte})
    `;
        //console.log(s)
        gen_code = gen_code.concat(s);

        const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0];
        if (list) {
          if (list[3] === null || list[3].length === 0 || list[3] === "*") {
            gen_code = gen_code.concat(`
  ${list[0]}=${temp_var_destruct}`);
          } else {
            gen_code = gen_code.concat(
              `
  ${list[0]}=temp_var_destruct["${list[3]}"]`
            );
          }

          gen_arte_dfs(
            artefact_id,
            list[1],
            list[0],
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,
            dataVariableInpOutMap,
            out_list
          );
        }
      } else if (nodeSubtype === "ForIn") {
        const nodeData = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[4];
        const innerArtefact = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[2];
        const temp_var_destruct = dnn_temp_var_id();
        const temp_var_inner_arte = dnn_temp_var_id();

        let s = `
  ${temp_var_destruct} = {**${edge_variable}}
  for i in ${nodeData["iteration"]}:
    ${temp_var_destruct}["ss_element"]=i
    ${temp_var_inner_arte}=${innerArtefact}(${temp_var_destruct})
    ${temp_var_destruct}.update(${temp_var_inner_arte})`;

        gen_code = gen_code.concat(s);

        const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0];
        console.log(`gen_arte   ${list}`);
        if (list) {
          if (list[3] === null || list[3].length === 0 || list[3] === "*") {
            gen_code = gen_code.concat(`
  ${list[0]}"="${temp_var_destruct}`);
          } else {
            gen_code = gen_code.concat(`
  ${list[0]}=temp_var_destruct"["${list[3]}"]`);
          }

          gen_arte_dfs(
            artefact_id,
            list[1],
            list[0],
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,
            dataVariableInpOutMap,
            out_list
          );
        }
      }
    } else if (nodeType === "Packer") {
      const nodeData = artefactNodesInfo.get(artefact_id).get(curr_node_id)[4];

      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0];
      let funcCode = codeGenFuncs[nodeSubtype](nodeData);
      const funcReturn = funcCode.return;
      const funcExe = funcCode.execution;
      const imp = funcCode.imports;
      importList.push(imp);

      gen_code = gen_code.concat(`
  ${funcExe}
  ${list[0]}= ${funcReturn}`);

      gen_arte_dfs(
        artefact_id,
        list[1],
        list[0],
        idToArtefact,
        artefactNodesInfo,
        nodeOutputEdgeMap,
        nodeInputEdgeMap,
        nodeInputList,
        dataVariableInpOutMap,
        out_list
      );
    } else if (nodeType === "Unpacker") {
      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id);
      if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
          //console.log(typeof list[i][3])
          if (
            list[i][3] === null ||
            list[i][3].length === 0 ||
            list[i][3] === "*"
          ) {
            gen_code = gen_code.concat(`
  ${list[i][0]}=${edge_variable}`);
          } else {
            gen_code = gen_code.concat(`
  ${list[i][0]}= ${edge_variable}["${list[i][3]}"]`);
          }

          gen_arte_dfs(
            artefact_id,
            list[i][1],
            list[i][0],
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,
            dataVariableInpOutMap,
            out_list
          );
        }
      } else {
        return;
      }
    } else if (nodeType === "Callback") {
      let dnn_var = dnn_temp_var_id();
      let s = `
  ${dnn_var} = ${artefactName}`;
      gen_code = gen_code.concat(s);
      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id);
      console.log(`callback list = ${list[0]}`);
      if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
          if (
            list[i][3] === null ||
            list[i][3].length === 0 ||
            list[i][3] === "*"
          ) {
            let s = `
  ${list[i][0]} = ${dnn_var}`;

            gen_code = gen_code.concat(s);
          } else {
            let s = `
  ${list[i][0]}= ${dnn_var}["${list[i][3]}"]`;

            gen_code = gen_code.concat(s);
          }

          gen_arte_dfs(
            artefact_id,
            list[i][1],
            list[i][0],
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,
            dataVariableInpOutMap,
            out_list
          );
        }
      }
    } else if (nodeType === "DataVariable") {
      const name = artefactNodesInfo.get(artefact_id).get(curr_node_id)[3];
      if (nodeSubtype === "IN") {
        let s = `
  ${name} = ${edge_variable}`;
        gen_code = gen_code.concat(s);

        // code to take all Output data variable node and perform dfs on them
        const Data_Var_Out_List = dataVariableInpOutMap
          .get(artefact_id)
          .get(name);
        //console.log(name + "  " + Data_Var_Out_List)
        for (const nodeId of Data_Var_Out_List) {
          gen_arte_dfs(
            artefact_id,
            nodeId,
            "",
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,
            dataVariableInpOutMap,
            out_list
          );
        }
      } else if (nodeSubtype === "OUT") {
        // assuming only one output
        const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0];

        let s = `
  ${list[0]} = ${name}`;
        gen_code = gen_code.concat(s);

        model_arte_dfs(
          artefact_id,
          list[1],
          list[0],
          idToArtefact,
          artefactNodesInfo,
          nodeOutputEdgeMap,
          nodeInputEdgeMap,
          nodeInputList,
          out_list
        );
      }
    }else {
      return;
    }
  }
}

function hypermodel_arte_dfs(
  artefact_id,
  curr_node_id,
  edge_variable,
  idToArtefact,
  artefactNodesInfo,
  nodeOutputEdgeMap,
  nodeInputEdgeMap,
  nodeInputList,
  out_list
) {
  if (nodeInputEdgeMap.get(artefact_id).get(curr_node_id).length > 0) {
    nodeInputList.get(artefact_id).get(curr_node_id).push(edge_variable);
  }
  if (
    nodeInputEdgeMap.get(artefact_id).get(curr_node_id).length ===
    nodeInputList.get(artefact_id).get(curr_node_id).length
  ) {
    // generate code

    const nodeType = artefactNodesInfo.get(artefact_id).get(curr_node_id)[0];
    const nodeSubtype = artefactNodesInfo.get(artefact_id).get(curr_node_id)[1];
    const artefactName = artefactNodesInfo
      .get(artefact_id)
      .get(curr_node_id)[2];

    if (nodeType === "FunctionNode") {
      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id);
      let nodeData = artefactNodesInfo.get(artefact_id).get(curr_node_id)[4];
      let funcCode = null;
      let dnn_var;
      let str;
      if (list.length === 0) {
        dnn_var = 0;
      } else {
        dnn_var = dnn_temp_var_id();
      }
      if (nodeSubtype === "ArtefactImporter") {
        if (dnn_var === 0) {
          str = `
          ${artefactImporter(artefactName, nodeData)}`;
        } else {
          str = `
  ${dnn_var} = ${artefactImporter(artefactName, nodeData)}`;
        }
      } else {
        funcCode = codeGenFuncs[nodeSubtype](nodeData);
        const funcReturn = funcCode.return;
        const funcExe = funcCode.execution;
        const imp = funcCode.imports;
        importList.push(imp);
        if (dnn_var === 0) {
          str = `
  ${funcReturn}`;
        } else {
          str = `
  ${funcExe} 
  ${dnn_var} = ${funcReturn}`;
        }
      }
      gen_code = gen_code.concat(str);

      if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
          //console.log(typeof list[i][3])
          console.log("list" + list[i][3]);
          if (
            list[i][3] === null ||
            list[i][3].length === 0 ||
            list[i][3] === "*"
          ) {
            let s = `
  ${list[i][0]}=${dnn_var}`;

            gen_code = gen_code.concat(s);
          } else {
            let s = `
  ${list[i][0]}=${dnn_var}["${list[i][3]}"]`;

            gen_code = gen_code.concat(s);
          }

          hypermodel_arte_dfs(
            artefact_id,
            list[i][1],
            list[i][0],
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,
            out_list
          );
        }
      } else {
        return;
      }
    } else if (nodeType === "Input") {
      let name = artefactNodesInfo.get(artefact_id).get(curr_node_id)[3];
      let dnn_var = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0][0];

      let str = `
  ${dnn_var}= params["${name}"]`;

      gen_code = gen_code.concat(str);

      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id);
      if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
          hypermodel_arte_dfs(
            artefact_id,
            list[i][1],
            list[i][0],
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,
            out_list
          );
        }
      } else {
        return;
      }
    } else if (nodeType === "Output") {
      let name = artefactNodesInfo.get(artefact_id).get(curr_node_id)[3];

      out_list[`${name}`] = edge_variable;

      return;
    } else if (nodeType === "Packer") {
      const nodeData = artefactNodesInfo.get(artefact_id).get(curr_node_id)[4];

      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0];
      let funcCode = codeGenFuncs[nodeSubtype](nodeData);
      const funcReturn = funcCode.return;
      const funcExe = funcCode.execution;
      const imp = funcCode.imports;
      importList.push(imp);

      gen_code = gen_code.concat(`
    ${funcExe}
    ${list[0]}= ${funcReturn}`);

      hypermodel_arte_dfs(
        artefact_id,
        list[1],
        list[0],
        idToArtefact,
        artefactNodesInfo,
        nodeOutputEdgeMap,
        nodeInputEdgeMap,
        nodeInputList,
        out_list
      );
    } else if (nodeType === "Unpacker") {
      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id);
      if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
          //console.log(typeof list[i][3])
          if (
            list[i][3] === null ||
            list[i][3].length === 0 ||
            list[i][3] === "*"
          ) {
            gen_code = gen_code.concat(`
    ${list[i][0]}=${edge_variable}`);
          } else {
            gen_code = gen_code.concat(`
    ${list[i][0]}= ${edge_variable}["${list[i][3]}"]`);
          }

          hypermodel_arte_dfs(
            artefact_id,
            list[i][1],
            list[i][0],
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,
            out_list
          );
        }
      } else {
        return;
      }
    }
  } else {
    return;
  }
}

function model_arte_dfs(
  artefact_id,
  curr_node_id,
  edge_variable,
  idToArtefact,
  artefactNodesInfo,
  nodeOutputEdgeMap,
  nodeInputEdgeMap,
  nodeInputList,
  dataVariableInpOutMap,

  model_in_list,
  model_out_list
) {
  //  if(outDegCnt==0){
  //     return;
  //  }

  if (nodeInputEdgeMap.get(artefact_id).get(curr_node_id).length > 0) {
    nodeInputList.get(artefact_id).get(curr_node_id).push(edge_variable);
  }
  if (
    nodeInputEdgeMap.get(artefact_id).get(curr_node_id).length ===
    nodeInputList.get(artefact_id).get(curr_node_id).length
  ) {
    // generate code
    //console.log("nde " + artefactNodesInfo.get(artefact_id).get(curr_node_id)[0])
    let nodeType = artefactNodesInfo.get(artefact_id).get(curr_node_id)[0];
    let nodeSubtype = artefactNodesInfo.get(artefact_id).get(curr_node_id)[1];
    //console.log(`nodeType = ${nodeType}   nodeSubtype=${nodeSubtype}`);
    if (nodeType === "FunctionNode") {
      if (nodeSubtype === "RecordArrayOutput") {
        model_out_list.push(edge_variable);
        console.log(`outEdge = ${model_out_list}`);
        return;
      }
      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id);
      let dnn_var = dnn_temp_var_id();
      if (nodeSubtype === "ArrayInput") {
        model_in_list.push(list[0][0]);
      }
      let nodeData = artefactNodesInfo.get(artefact_id).get(curr_node_id)[4];
      //console.log(`model_arte  subtype   ${nodeSubtype}  Function  ${codeGenFuncs[nodeSubtype]}`)
      let funcCode = codeGenFuncs[nodeSubtype](nodeData);
      const funcReturn = funcCode.return;
      const funcExe = funcCode.execution;
      const imp = funcCode.imports;
      importList.push(imp);

      let str = `
  ${funcExe}
  ${dnn_var} = ${funcReturn}`;
      gen_code = gen_code.concat(str);

      if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
          //console.log(typeof list[i][3])
          if (
            list[i][3] === null ||
            list[i][3].length === 0 ||
            list[i][3] === "*"
          ) {
            let s = `
  ${list[i][0]}=${dnn_var}`;

            gen_code = gen_code.concat(s);
          } else {
            let s = `
  ${list[i][0]}=${dnn_var}["${list[i][3]}"]`;

            gen_code = gen_code.concat(s);
          }

          model_arte_dfs(
            artefact_id,
            list[i][1],
            list[i][0],
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,
            dataVariableInpOutMap,

            model_in_list,
            model_out_list
          );
        }
      } else {
        return;
      }
    } else if (nodeType === "DataVariable") {
      const name = artefactNodesInfo.get(artefact_id).get(curr_node_id)[3];
      if (nodeSubtype === "IN") {
        let s = `
  ${name} = ${edge_variable}`;
        gen_code = gen_code.concat(s);

        // code to take all Output data variable node and perform dfs on them
        const Data_Var_Out_List = dataVariableInpOutMap
          .get(artefact_id)
          .get(name);
        //console.log(name + "  " + Data_Var_Out_List)
        for (const nodeId of Data_Var_Out_List) {
          model_arte_dfs(
            artefact_id,
            nodeId,
            "",
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,
            dataVariableInpOutMap,
            model_in_list,
            model_out_list
          );
        }
      } else if (nodeSubtype === "OUT") {
        // assuming only one output
        const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0];

        let s = `
  ${list[0]} = ${name}`;
        gen_code = gen_code.concat(s);

        model_arte_dfs(
          artefact_id,
          list[1],
          list[0],
          idToArtefact,
          artefactNodesInfo,
          nodeOutputEdgeMap,
          nodeInputEdgeMap,
          nodeInputList,
          dataVariableInpOutMap,
          model_in_list,
          model_out_list
        );
      }
    } else if (nodeType === "Loop") {
      if (nodeSubtype === "Repeat") {
        //console.log("Repeat")
        const nodeData = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[4];
        const innerArtefact = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[2];
        const temp_var_destruct = dnn_temp_var_id();
        const temp_var_inner_arte = dnn_temp_var_id();

        let s = `
  ${temp_var_destruct} = {**${edge_variable}}
  for i in range(${nodeData["iteration-count"]}):
    ${temp_var_destruct}["ss_index"]=i
    ${temp_var_inner_arte}=${innerArtefact}(${temp_var_destruct})
    ${temp_var_destruct}.update(${temp_var_inner_arte})
    `;
        //console.log(s)
        gen_code = gen_code.concat(s);

        const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0];
        if (list) {
          if (list[3] === null || list[3].length === 0 || list[3] === "*") {
            gen_code = gen_code.concat(`
  ${list[0]}=${temp_var_destruct}`);
          } else {
            gen_code = gen_code.concat(
              `
  ${list[0]}=temp_var_destruct["${list[3]}"]`
            );
          }

          model_arte_dfs(
            artefact_id,
            list[1],
            list[0],
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,
            dataVariableInpOutMap,
            model_in_list,
            model_out_list
          );
        }
      } else if (nodeSubtype === "ForIn") {
        const nodeData = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[4];
        const innerArtefact = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[2];
        const temp_var_destruct = dnn_temp_var_id();
        const temp_var_inner_arte = dnn_temp_var_id();

        let s = `
  ${temp_var_destruct} = {**${edge_variable}}
  for i in ${nodeData["iteration"]}:
    ${temp_var_destruct}["ss_element"]=i
    ${temp_var_inner_arte}=${innerArtefact}(${temp_var_destruct})
    ${temp_var_destruct}.update(${temp_var_inner_arte})`;

        gen_code = gen_code.concat(s);

        const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0];
        if (list) {
          if (list[3] === null || list[3].length === 0 || list[3] === "*") {
            gen_code = gen_code.concat(`
  ${list[0]}"="${temp_var_destruct}`);
          } else {
            gen_code = gen_code.concat(`
  ${list[0]}=temp_var_destruct"["${list[3]}"]`);
          }

          model_arte_dfs(
            artefact_id,
            list[1],
            list[0],
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,

            dataVariableInpOutMap,
            model_in_list,
            model_out_list
          );
        }
      }
    } else if (nodeType === "Packer") {
      const nodeData = artefactNodesInfo.get(artefact_id).get(curr_node_id)[4];

      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0];
      let funcCode = codeGenFuncs[nodeSubtype](nodeData);
      const funcReturn = funcCode.return;
      const funcExe = funcCode.execution;
      const imp = funcCode.imports;
      importList.push(imp);

      gen_code = gen_code.concat(`
  ${funcExe}
  ${list[0]}= ${funcReturn}`);

      model_arte_dfs(
        artefact_id,
        list[1],
        list[0],
        idToArtefact,
        artefactNodesInfo,
        nodeOutputEdgeMap,
        nodeInputEdgeMap,
        nodeInputList,
        dataVariableInpOutMap,
        model_in_list,
        model_out_list
      );
    } else if (nodeType === "Unpacker") {
      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id);
      console.log();
      if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
          //console.log(typeof list[i][3])
          if (
            list[i][3] === null ||
            list[i][3].length === 0 ||
            list[i][3] === "*"
          ) {
            gen_code = gen_code.concat(`
  ${list[i][0]}=${edge_variable}`);
          } else {
            gen_code = gen_code.concat(`
  ${list[i][0]}= ${edge_variable}["${list[i][3]}"]`);
          }

          model_arte_dfs(
            artefact_id,
            list[i][1],
            list[i][0],
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,

            dataVariableInpOutMap,
            model_in_list,
            model_out_list
          );
        }
      } else {
        return;
      }
    } else {
      return;
    }
  }
}

function train_step_dfs(
  artefact_id,
  curr_node_id,
  edge_variable,
  idToArtefact,
  artefactNodesInfo,
  nodeOutputEdgeMap,
  nodeInputEdgeMap,
  nodeInputList,
  dataVariableInpOutMap
) {
  //  if(outDegCnt==0){
  //     return;
  //  }

  if (nodeInputEdgeMap.get(artefact_id).get(curr_node_id).length > 0) {
    nodeInputList.get(artefact_id).get(curr_node_id).push(edge_variable);
  }
  if (
    nodeInputEdgeMap.get(artefact_id).get(curr_node_id).length ===
    nodeInputList.get(artefact_id).get(curr_node_id).length
  ) {
    // generate code
    //console.log("nde " + artefactNodesInfo.get(artefact_id).get(curr_node_id)[0])
    let nodeType = artefactNodesInfo.get(artefact_id).get(curr_node_id)[0];
    let nodeSubtype = artefactNodesInfo.get(artefact_id).get(curr_node_id)[1];
    console.log(
      `trainStep  nodeType= ${nodeType}  nodeSubtype = ${nodeSubtype}`
    );
    const artefactName = artefactNodesInfo
      .get(artefact_id)
      .get(curr_node_id)[2];

    if (nodeType === "FunctionNode") {
      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id);
      if (nodeSubtype === "EndGradientMonitoring") {
        gradientStart = false;
        let dnn_var = dnn_temp_var_id();
        let str;
        if (gradientStart) {
          str = `
    ${dnn_var} = ${edge_variable}`;
        } else {
          str = `
    
  ${dnn_var} = ${edge_variable}`;
        }
        gen_code = gen_code.concat(str);

        const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id);
        if (list.length > 0) {
          for (let i = 0; i < list.length; i++) {
            //console.log(typeof list[i][3])
            let s;
            if (
              list[i][3] === null ||
              list[i][3].length === 0 ||
              list[i][3] === "*"
            ) {
              if (gradientStart) {
                s = `
    ${list[i][0]}=${dnn_var}`;
              } else {
                s = `
  ${list[i][0]}=${dnn_var}`;
              }
            } else {
              if (gradientStart) {
                s = `
    ${list[i][0]}=${dnn_var}["${list[i][3]}"]`;
              } else {
                s = `
  ${list[i][0]}=${dnn_var}["${list[i][3]}"]`;
              }
            }
            gen_code = gen_code.concat(s);
            train_step_dfs(
              artefact_id,
              list[i][1],
              list[i][0],
              idToArtefact,
              artefactNodesInfo,
              nodeOutputEdgeMap,
              nodeInputEdgeMap,
              nodeInputList,
              dataVariableInpOutMap
            );
          }
        } else {
          return;
        }
      } else if (nodeSubtype === "BeginGradientMonitoring") {
        
        // start with here
        let grad_list = [];
        let other_list = [];
        for (let i = 0; i < list.length; i++) {
          const targId = list[i][1];
          if (
            artefactNodesInfo.get(artefact_id).get(targId)[0] ===
              "DataVariable" &&
            artefactNodesInfo.get(artefact_id).get(targId)[1] === "IN"
          ) {
            grad_list.push(targId);
          } else {
            other_list.push(list[i]);
          }
        }

        let s = `
  with`;
        for (const targId of grad_list) {
          const name = artefactNodesInfo.get(artefact_id).get(targId)[3];
          s = `
    ${s} tf.GradientTape as ${name},`;
    const Data_Var_Out_List = dataVariableInpOutMap
          .get(artefact_id)
          .get(name);
        
        for (const nodeId of Data_Var_Out_List) {
          train_step_dfs(
            artefact_id,
            nodeId,
            "",
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,
            dataVariableInpOutMap
          );
        }


    // call out wala
    
        
  }
        s = s.slice(0, -1);
        gen_code = gen_code.concat(`${s}:`);
        gradientStart = true;
        for (let i = 0; i < other_list.length; i++) {
          train_step_dfs(
            artefact_id,
            other_list[i][1],
            other_list[i][0],
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,
            dataVariableInpOutMap
          );
        }

      } else {
        let nodeData = artefactNodesInfo.get(artefact_id).get(curr_node_id)[4];
        let funcCode = null;
        let dnn_var;
        let str;
        if (list.length === 0) {
          dnn_var = 0;
        } else {
          dnn_var = dnn_temp_var_id();
        }
        if (nodeSubtype === "ArtefactImporter") {
          if (dnn_var === 0) {
            if (gradientStart) {
              str = `
    ${artefactImporter(artefactName, nodeData)}`;
            } else {
              str = `
  ${artefactImporter(artefactName, nodeData)}`;
            }
          } else {
            if (gradientStart) {
              str = `
    ${dnn_var} = ${artefactImporter(artefactName, nodeData)}`;
            } else {
              str = `
  ${dnn_var} = ${artefactImporter(artefactName, nodeData)}`;
            }
          }
        } else {
          console.log(`train_step subtype = ${nodeSubtype} `);
          funcCode = codeGenFuncs[nodeSubtype](nodeData);
          const funcReturn = funcCode.return;
          const funcExe = funcCode.execution;
          const imp = funcCode.imports;
          importList.push(imp);
          if (dnn_var === 0) {
            if (gradientStart) {
              str = `
    ${funcReturn}`;
            } else {
              str = `
  ${funcReturn}`;
            }
          } else {
            if (gradientStart) {
              str = `
    ${funcExe} 
    ${dnn_var} = ${funcReturn}`;
            } else {
              str = `
  ${funcExe} 
  ${dnn_var} = ${funcReturn}`;
            }
          }
        }
        gen_code = gen_code.concat(str);

        if (list.length > 0) {
          for (let i = 0; i < list.length; i++) {
            //console.log(typeof list[i][3])
            let s;
            if (
              list[i][3] === null ||
              list[i][3].length === 0 ||
              list[i][3] === "*"
            ) {
              if (gradientStart) {
                s = `
    ${list[i][0]}=${dnn_var}`;
              } else {
                s = `
  ${list[i][0]}=${dnn_var}`;
              }
            } else {
              if (gradientStart) {
                s = `
    ${list[i][0]}=${dnn_var}["${list[i][3]}"]`;
              } else {
                s = `
  ${list[i][0]}=${dnn_var}["${list[i][3]}"]`;
              }
            }
            gen_code = gen_code.concat(s);

            train_step_dfs(
              artefact_id,
              list[i][1],
              list[i][0],
              idToArtefact,
              artefactNodesInfo,
              nodeOutputEdgeMap,
              nodeInputEdgeMap,
              nodeInputList,
              dataVariableInpOutMap
            );
          }
        } else {
          return;
        }
      }
    } else if (nodeType === "DataVariable") {
      const name = artefactNodesInfo.get(artefact_id).get(curr_node_id)[3];
      if (nodeSubtype === "IN") {
        let s;
        if (gradientStart) {
          s = `
    ${name} = ${edge_variable}`;
        } else {
          s = `
  ${name} = ${edge_variable}`;
        }
        gen_code = gen_code.concat(s);

        // code to take all Output data variable node and perform dfs on them
        const Data_Var_Out_List = dataVariableInpOutMap
          .get(artefact_id)
          .get(name);
        
        for (const nodeId of Data_Var_Out_List) {
          train_step_dfs(
            artefact_id,
            nodeId,
            "",
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,
            dataVariableInpOutMap
          );
        }
      } else if (nodeSubtype === "OUT") {
        // assuming only one output
        const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0];
        let s;
        if (gradientStart) {
          s = `
    ${list[0]} = ${name}`;
        } else {
          s = `
  ${list[0]} = ${name}`;
        }

        gen_code = gen_code.concat(s);

        train_step_dfs(
          artefact_id,
          list[1],
          list[0],
          idToArtefact,
          artefactNodesInfo,
          nodeOutputEdgeMap,
          nodeInputEdgeMap,
          nodeInputList,
          dataVariableInpOutMap
        );
      }
    } else if (nodeType === "Loop") {
      if (nodeSubtype === "Repeat") {
        //console.log("Repeat")
        const nodeData = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[4];
        const innerArtefact = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[2];
        const temp_var_destruct = dnn_temp_var_id();
        const temp_var_inner_arte = dnn_temp_var_id();

        let s = `
  ${temp_var_destruct} = {**${edge_variable}}
  for i in range(${nodeData["iteration-count"]}):
    ${temp_var_destruct}["ss_index"]=i
    ${temp_var_inner_arte}=${innerArtefact}(${temp_var_destruct})
    ${temp_var_destruct}.update(${temp_var_inner_arte})
    `;
        //console.log(s)
        gen_code = gen_code.concat(s);

        const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0];
        if (list) {
          if (list[3] === null || list[3].length === 0 || list[3] === "*") {
            gen_code = gen_code.concat(`
  ${list[0]}=${temp_var_destruct}`);
          } else {
            gen_code = gen_code.concat(
              `
  ${list[0]}=temp_var_destruct["${list[3]}"]`
            );
          }

          train_step_dfs(
            artefact_id,
            list[1],
            list[0],
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,
            dataVariableInpOutMap
          );
        }
      } else if (nodeSubtype === "ForIn") {
        const nodeData = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[4];
        const innerArtefact = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[2];
        const temp_var_destruct = dnn_temp_var_id();
        const temp_var_inner_arte = dnn_temp_var_id();

        let s = `
  ${temp_var_destruct} = {**${edge_variable}}
  for i in ${nodeData["iteration"]}:
    ${temp_var_destruct}["ss_index"]=i
    ${temp_var_inner_arte}=${innerArtefact}(${temp_var_destruct})
    ${temp_var_destruct}.update(${temp_var_inner_arte})`;

        gen_code = gen_code.concat(s);

        const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0];
        if (list) {
          if (list[3] === null || list[3].length === 0 || list[3] === "*") {
            gen_code = gen_code.concat(`
  ${list[0]}"="${temp_var_destruct}`);
          } else {
            gen_code = gen_code.concat(`
  ${list[0]}=temp_var_destruct"["${list[3]}"]`);
          }

          train_step_dfs(
            artefact_id,
            list[1],
            list[0],
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,

            dataVariableInpOutMap
          );
        }
      }
    } else if (nodeType === "Packer") {
      const nodeData = artefactNodesInfo.get(artefact_id).get(curr_node_id)[4];

      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0];
      let funcCode = codeGenFuncs[nodeSubtype](nodeData);
      const funcReturn = funcCode.return;
      const funcExe = funcCode.execution;
      const imp = funcCode.imports;
      importList.push(imp);
      let s;
      if (gradientStart) {
        s = `
    ${funcExe}
    ${list[0]}= ${funcReturn}`;
      } else {
        s = `
  ${funcExe}
  ${list[0]}= ${funcReturn}`;
      }

      gen_code = gen_code.concat(s);

      train_step_dfs(
        artefact_id,
        list[1],
        list[0],
        idToArtefact,
        artefactNodesInfo,
        nodeOutputEdgeMap,
        nodeInputEdgeMap,
        nodeInputList,
        dataVariableInpOutMap
      );
    } else if (nodeType === "Unpacker") {
      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id);
      if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
          //console.log(typeof list[i][3])
          let s;
          if (
            list[i][3] === null ||
            list[i][3].length === 0 ||
            list[i][3] === "*"
          ) {
            if (gradientStart) {
              s = `
    ${list[i][0]}=${edge_variable}`;
            } else {
              s = `
  ${list[i][0]}=${edge_variable}`;
            }
          } else {
            if (gradientStart) {
              s = `
    ${list[i][0]}= ${edge_variable}["${list[i][3]}"]`;
            } else {
              s = `
  ${list[i][0]}= ${edge_variable}["${list[i][3]}"]`;
            }
          }
          gen_code = gen_code.concat(s);
          train_step_dfs(
            artefact_id,
            list[i][1],
            list[i][0],
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,

            dataVariableInpOutMap
          );
        }
      } else {
        return;
      }
    } else if (nodeType === "Input") {
      let name = artefactNodesInfo.get(artefact_id).get(curr_node_id)[3];
      let dnn_var = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0][0];

      let str = `
  ${dnn_var} = params["${name}"]`;

      gen_code = gen_code.concat(str);

      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id);
      if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
          gen_code = gen_code.concat(`
  ${list[i][0]} = ${dnn_var}`);
          train_step_dfs(
            artefact_id,
            list[i][1],
            list[i][0],
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,
            dataVariableInpOutMap
          );
        }
      } else {
        return;
      }
    } else {
      return;
    }
  }
}

function generateCode(
  artefactNodesInfo,
  idToArtefact,
  nodeInputEdgeMap,
  nodeOutputEdgeMap,
  nodeInputList,
  dataVariableInpOutMap,
  artefactOrder
) {
  for (let i = 0; i < artefactOrder.length; i++) {
    const artefactName = idToArtefact.get(artefactOrder[i])[0];
    const artefactType = idToArtefact.get(artefactOrder[i])[1];

    if (artefactType === "ModelArchitectureType") {
      gen_code = gen_code.concat(`
def ${artefactName}(hp=None):
      `);
      const model_in_list = [];
      const model_out_list = [];

      for (const [key, value] of nodeInputEdgeMap.get(artefactOrder[i])) {
        if (
          value.length === 0 &&
          !(
            artefactNodesInfo.get(artefactOrder[i]).get(key)[0] ===
              "DataVariable" &&
            artefactNodesInfo.get(artefactOrder[i]).get(key)[1] === "OUT"
          )
        ) {
          console.log(
            `nodeType ${
              artefactNodesInfo.get(artefactOrder[i]).get(key)[0]
            }  nodeSubtype  ${
              artefactNodesInfo.get(artefactOrder[i]).get(key)[1]
            }`
          );
          model_arte_dfs(
            artefactOrder[i],
            key,
            "",
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,
            dataVariableInpOutMap,
            model_in_list,
            model_out_list
          );
        }
      }

      gen_code = gen_code.concat(`
  model = keras.Model(inputs=(${model_in_list}), outputs=(${model_out_list}))
  return model`);
    } else if (artefactType === "ModelClassifierType") {
      gen_code = gen_code.concat(`def ${artefactName}(hp=None):\n\t`);
      const out_list = [];
      for (const [key, value] of nodeInputEdgeMap.get(artefactOrder[i])) {
        if (
          value.length === 0 &&
          !(
            artefactNodesInfo.get(artefactOrder[i]).get(key)[0] ===
              "DataVariable" &&
            artefactNodesInfo.get(artefactOrder[i]).get(key)[1] === "OUT"
          )
        ) {
          hypermodel_arte_dfs(
            artefactOrder[i],
            key,
            "",
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,
            out_list
          );
        }
      }
      if (Object.keys(out_list).length > 0) {
        let s = "";
        for (const key in out_list) {
          s = `${s} "${key}":${out_list[key]},`;
        }
        s = s.slice(0, -2);

        gen_code = gen_code.concat(
          `return{
    ${s}
  }`
        );
      }
    } else if (artefactType === "TrainStepArtefact") {
      gen_code = gen_code.concat(
        `@tf.function
def ${artefactName}(params):`
      );
      const gradient_tape_list = [];
      for (const [key, value] of nodeInputEdgeMap.get(artefactOrder[i])) {
        if (
          artefactNodesInfo.get(artefactOrder[i]).get(key)[1] ===
          "BeginGradientMonitoring"
        ) {
          gradient_tape_list.push(key);
        } else if (
          value.length === 0 &&
          !(
            artefactNodesInfo.get(artefactOrder[i]).get(key)[0] ===
              "DataVariable" &&
            artefactNodesInfo.get(artefactOrder[i]).get(key)[1] === "OUT"
          )
        ) {
          train_step_dfs(
            artefactOrder[i],
            key,
            "",
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,
            dataVariableInpOutMap
          );
        }
      }

      for (const key of gradient_tape_list) {
        train_step_dfs(
          artefactOrder[i],
          key,
          "",
          idToArtefact,
          artefactNodesInfo,
          nodeOutputEdgeMap,
          nodeInputEdgeMap,
          nodeInputList,
          dataVariableInpOutMap
        );
      }
    } else {
      gen_code = gen_code.concat(`def ${artefactName}(params):`);
      const out_list = [];
      for (const [key, value] of nodeInputEdgeMap.get(artefactOrder[i])) {
        if (
          value.length === 0 &&
          !(
            artefactNodesInfo.get(artefactOrder[i]).get(key)[0] ===
              "DataVariable" &&
            artefactNodesInfo.get(artefactOrder[i]).get(key)[1] === "OUT"
          )
        ) {
          gen_arte_dfs(
            artefactOrder[i],
            key,
            "",
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,
            dataVariableInpOutMap,
            out_list
          );
        }
      }
      if (Object.keys(out_list).length > 0) {
        // console.log("outlist")
        let s = "";
        for (const key in out_list) {
          s = `${s} "${key}":${out_list[key]},`;
        }
        s = s.slice(0, -1);

        gen_code = gen_code.concat(`
  return{
    ${s}
  }`);
      }
    }

    gen_code = gen_code.concat("\n\n");
  }

  //console.log(importList)
  let union_import_list = [];
  let imports = "";
  for (const list of importList) {
    for (const imp of list) {
      if (imp.length > 0 && !union_import_list.includes(imp)) {
        union_import_list.push(imp);
        imports = `${imports}
${imp}`;
      }
    }
  }
  gen_code = `${imports}

${gen_code}`;

  gen_code = gen_code.concat("\n\n");
  gen_code = gen_code.concat(`
${jsonObject.executedFileName}()`);
  console.log(gen_code);
}
function DataVariableMapping(
  jsonObject,
  artefactIdMapping,
  dataVariableInpOutMap
) {
  for (const artefact of jsonObject.artefactArray) {
    const id = artefactIdMapping.get(artefact.artefactMetadata.name);

    dataVariableInpOutMap.set(id, new Map());
    for (const node of artefact.nodes) {
      const name = node.nodeData["name"];
      if (node.nodeType === "DataVariable" && node.nodeSubtype === "IN") {
        //console.log(`Input   ${node.name}`)
        dataVariableInpOutMap.get(id).set(name, []);
      }
      if (node.nodeType === "DataVariable" && node.nodeSubtype === "OUT") {
        if (dataVariableInpOutMap.get(id).has(name)) {
          //console.log(`Output   ${node.name}`)
          dataVariableInpOutMap.get(id).get(name).push(node.id);
        }
      }
    }
  }
}

function dnn_temp_var_id() {
  dnn_temp_id++;
  return "dnnt_var" + dnn_temp_id;
}

function nodeOutInEdgeMapping(
  jsonObject,
  nodeOutputEdgeMap,
  artefactIdMapping,
  nodeInputEdgeMap,
  nodeInputList,
  artefactNodesInfo
) {
  for (const artefact of jsonObject.artefactArray) {
    let id = artefactIdMapping.get(artefact.artefactMetadata.name);
    nodeOutputEdgeMap.set(id, new Map());
    nodeInputEdgeMap.set(id, new Map());
    nodeInputList.set(id, new Map());
    for (const node of artefact.nodes) {
      nodeOutputEdgeMap.get(id).set(node.id, []);
      nodeInputEdgeMap.get(id).set(node.id, []);
      nodeInputList.get(id).set(node.id, []);
    }
    // check here for label-in, label-out part
    for (const edge of artefact.edges) {
      const temp_var = dnn_temp_var_id();
      //info of edges going out of this node.
      if (nodeOutputEdgeMap.get(id).has(edge.sourceNodeID)) {
        nodeOutputEdgeMap
          .get(id)
          .get(edge.sourceNodeID)
          .push([
            temp_var,
            edge.targetNodeID,
            edge.targetNodeHandleID,
            edge.inLabel,
            edge.outLabel,
          ]);
      } else {
        nodeOutputEdgeMap
          .get(id)
          .set(edge.sourceNodeID, [
            [
              temp_var,
              edge.targetNodeID,
              edge.targetNodeHandleID,
              edge.inLabel,
              edge.outLabel,
            ],
          ]);
      }
      //console.log(`inlabel = ${nodeOutputEdgeMap.get(id).get(edge.sourceNodeID)[0][3]}  outLabel = ${nodeOutputEdgeMap.get(id).get(edge.sourceNodeID)[0][4]}`)
      // info of number of input handles in a node.
      nodeInputEdgeMap
        .get(id)
        .get(edge.targetNodeID)
        .push(edge.targetNodeHandleID);

      // info of temp_var associated with each handle of node

      if (edge.targetNodeHandleID === "multi-in") {
        artefactNodesInfo.get(id).get(edge.targetNodeID)[4][
          `${edge.outLabel}`
        ] = temp_var;
      } else {
        artefactNodesInfo.get(id).get(edge.targetNodeID)[4][
          `${edge.targetNodeHandleID}`
        ] = temp_var;
      }
    }
  }
}
function artefactNodesMapping(
  jsonObject,
  artefactIdMapping,
  artefactNodesInfo
) {
  for (const artefact of jsonObject.artefactArray) {
    let id = artefactIdMapping.get(artefact.artefactMetadata.name);
    artefactNodesInfo.set(id, new Map());
    for (const node of artefact.nodes) {
      const name = node.nodeData["name"];
      console.log(`nodeType = ${node.nodeType}   name = ${name}`);
      //console.log(`${node.nodeSubtype} =>  ${JSON.stringify(node.nodeData)}`);
      if ("sourceArtefact" in node) {
        artefactNodesInfo
          .get(id)
          .set(node.id, [
            node.nodeType,
            node.nodeSubtype,
            node.sourceArtefact,
            name,
            node.nodeData,
          ]);
      } else {
        artefactNodesInfo
          .get(id)
          .set(node.id, [
            node.nodeType,
            node.nodeSubtype,
            node.innerArtefact,
            name,
            node.nodeData,
          ]);
      }
    }
  }
}

function dfs(node, graph, stack, visited) {
  visited[node] = true;

  if (graph.has(node)) {
    for (const neigh of graph.get(node)) {
      if (!visited[neigh]) {
        dfs(neigh, graph, stack, visited);
      }
    }
  }

  stack.push(node);
}

function artefactMapping(jsonObject, artefactIdMapping, idToArtefact) {
  let id = 0;

  for (const artefact of jsonObject.artefactArray) {
    if (!artefactIdMapping.has(artefact.artefactMetadata.name)) {
      artefactIdMapping.set(artefact.artefactMetadata.name, id);
      idToArtefact.set(id, [
        artefact.artefactMetadata.name,
        artefact.artefactMetadata.artefactType,
      ]);
      id++;
    }
  }
}

function createGraph(jsonObject, artefactIdMapping, graph) {
  // TODO : Check ogic for call back also
  for (const artefact of jsonObject.artefactArray) {
    for (const node of artefact.nodes) {
      if ("sourceArtefact" in node || "innerArtefact" in node) {
        let nodeA = artefactIdMapping.get(artefact.artefactMetadata.name);
        let nodeB;
        if ("sourceArtefact" in node) {
          nodeB = artefactIdMapping.get(node.sourceArtefact);
        } else {
          nodeB = artefactIdMapping.get(node.innerArtefact);
        }
        // console.log(nodeB + " " + nodeA)
        if (typeof nodeB !== "undefined") {
          if (graph.has(nodeB)) {
            graph.get(nodeB).push(nodeA);
          } else {
            graph.set(nodeB, [nodeA]);
          }
        }
      } else if (node.type === "CallBack") {
        const name = node.nodeData["name"];
        let nodeA = artefactIdMapping.get(artefact.artefactMetadata.name);
        let nodeB = artefactIdMapping.get(name);

        if (typeof nodeB !== "undefined") {
          if (graph.has(nodeB)) {
            graph.get(nodeB).push(nodeA);
          } else {
            graph.set(nodeB, [nodeA]);
          }
        }
      }
    }
  }
}
function artefactImporter(artefactName, params = null) {
  return `${artefactName}(${JSON.stringify(params)})`;
}
main(jsonObject);

//function outdegreeCnt(nodeOutputEdgeMap, artefactOutDegreeCnt) {
//   for (const [key, values] of nodeOutputEdgeMap) {
//     let cnt = 0;
//     for (const [subkey, subvalues] of values) {
//       if (subvalues.length === 0) {
//         cnt++;
//       }
//     }

//     artefactOutDegreeCnt.set(key, cnt);
//   }
// }
