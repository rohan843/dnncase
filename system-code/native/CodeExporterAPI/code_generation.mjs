const jsonObject = {
  artefactArray: [
    {
      artefactMetadata: {
        name: "ClassifierModel",
        artefactType: "ModelArchitectureType",
      },
      nodes: [
        {
          id: "FunctionNode_GetTunableInt_5167",
          nodeData: {
            name: "'hp_layers'",
            hyperparams: [
              { id: "name", value: "'hp_layers'" },
              { id: "min_value", value: "1" },
              { id: "max_value", value: "4" },
              { id: "step", value: "1" },
              { id: "sampling", value: "'linear'" },
            ],
            commentText: "",
            commentType: "plain",
            inputHandles: [],
            outputHandles: ["int"],
            elementID: "GetTunableInt",
            min_value: "1",
            max_value: "4",
            step: "1",
            sampling: "'linear'",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "GetTunableInt",
        },
        {
          id: "FunctionNode_GetTunableInt_5655",
          nodeData: {
            name: "'hp_units'",
            hyperparams: [
              { id: "name", value: "'hp_units'" },
              { id: "min_value", value: "32" },
              { id: "max_value", value: "512" },
              { id: "step", value: "32" },
              { id: "sampling", value: "'linear'" },
            ],
            commentText: "",
            commentType: "plain",
            inputHandles: [],
            outputHandles: ["int"],
            elementID: "GetTunableInt",
            min_value: "32",
            max_value: "512",
            step: "32",
            sampling: "'linear'",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "GetTunableInt",
        },
        {
          id: "Output_3442",
          nodeData: { hyperparams: [], name: "hp_units" },
          nodeType: "DataVariable",
          nodeSubtype: "IN",
        },
        {
          id: "Output_3588",
          nodeData: { hyperparams: [], name: "hp_layers" },
          nodeType: "DataVariable",
          nodeSubtype: "IN",
        },
        {
          id: "Output_6718",
          nodeData: { hyperparams: [], name: "hp_units" },
          nodeType: "DataVariable",
          nodeSubtype: "OUT",
        },
        {
          id: "Output_6923",
          nodeData: { hyperparams: [], name: "hp_units" },
          nodeType: "DataVariable",
          nodeSubtype: "OUT",
        },
        {
          id: "Output_7254",
          nodeData: { hyperparams: [], name: "hp_layers" },
          nodeType: "DataVariable",
          nodeSubtype: "OUT",
        },
        {
          id: "FunctionNode_Flatten_919",
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
          id: "FunctionNode_CreateAndApplyDenseLayer_4849",
          nodeData: {
            name: "Create and Apply Dense Layer",
            hyperparams: [
              { id: "units", value: "10" },
              { id: "activation", value: "softmax" },
            ],
            commentText: "",
            commentType: "plain",
            inputHandles: ["payload"],
            outputHandles: ["payload"],
            elementID: "CreateAndApplyDenseLayer",
            units: "10",
            activation: "softmax",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "CreateAndApplyDenseLayer",
        },
        {
          id: "PackerNode_4040",
          nodeData: {
            hyperparams: [{ id: "packingCount", value: 2 }],
            commentText: "",
            commentType: "plain",
            packingCount: 2,
          },
          nodeType: "Packer",
          nodeSubtype: "Named",
        },
        {
          id: "UnpackerNode_1373",
          nodeData: { commentText: "", commentType: "plain" },
          nodeType: "Unpacker",
          nodeSubtype: "Named",
        },
        {
          id: "FunctionNode_CreateAndApplyDenseLayer_9091",
          nodeData: {
            name: "Create and Apply Dense Layer",
            hyperparams: [
              { id: "units", value: "" },
              { id: "activation", value: "relu" },
            ],
            commentText: "",
            commentType: "plain",
            inputHandles: ["payload"],
            outputHandles: ["payload"],
            elementID: "CreateAndApplyDenseLayer",
            units: "",
            activation: "relu",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "CreateAndApplyDenseLayer",
        },
        {
          id: "FunctionNode_RepeatLoop_ArtefactImporter_2040",
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
        {
          id: "FunctionNode_ArrayInput_1884",
          nodeData: {
            name: "Array Input",
            hyperparams: [{ id: "input_shape", value: "(784,)" }],
            commentText: "",
            commentType: "plain",
            inputHandles: [],
            outputHandles: ["array"],
            elementID: "ArrayInput",
            input_shape: "(784,)",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "ArrayInput",
        },
        {
          id: "FunctionNode_RecordArrayOutput_2420",
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
          sourceNodeID: "FunctionNode_GetTunableInt_5655",
          sourceNodeHandleID: "int",
          targetNodeID: "Output_3442",
          targetNodeHandleID: "input",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_GetTunableInt_5167",
          sourceNodeHandleID: "int",
          targetNodeID: "Output_3588",
          targetNodeHandleID: "input",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_Flatten_919",
          sourceNodeHandleID: "payload",
          targetNodeID: "FunctionNode_CreateAndApplyDenseLayer_9091",
          targetNodeHandleID: "payload",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_CreateAndApplyDenseLayer_9091",
          sourceNodeHandleID: "payload",
          targetNodeID: "PackerNode_4040",
          targetNodeHandleID: "multi-in",
          inLabel: "payload",
          outLabel: "payload",
        },
        {
          sourceNodeID: "Output_7254",
          sourceNodeHandleID: "output",
          targetNodeID: "FunctionNode_RepeatLoop_ArtefactImporter_2040",
          targetNodeHandleID: "iteration-count",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "PackerNode_4040",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_RepeatLoop_ArtefactImporter_2040",
          targetNodeHandleID: "multi-in",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_RepeatLoop_ArtefactImporter_2040",
          sourceNodeHandleID: "out",
          targetNodeID: "UnpackerNode_1373",
          targetNodeHandleID: "in",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "UnpackerNode_1373",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_CreateAndApplyDenseLayer_4849",
          targetNodeHandleID: "payload",
          inLabel: "payload",
          outLabel: "payload",
        },
        {
          sourceNodeID: "Output_6718",
          sourceNodeHandleID: "output",
          targetNodeID: "FunctionNode_CreateAndApplyDenseLayer_9091",
          targetNodeHandleID: "multi-in",
          inLabel: "units",
          outLabel: "units",
        },
        {
          sourceNodeID: "Output_6923",
          sourceNodeHandleID: "output",
          targetNodeID: "PackerNode_4040",
          targetNodeHandleID: "multi-in",
          inLabel: "units",
          outLabel: "units",
        },
        {
          sourceNodeID: "FunctionNode_ArrayInput_1884",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_Flatten_919",
          targetNodeHandleID: "payload",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_CreateAndApplyDenseLayer_4849",
          sourceNodeHandleID: "payload",
          targetNodeID: "FunctionNode_RecordArrayOutput_2420",
          targetNodeHandleID: "in",
          inLabel: "",
          outLabel: "",
        },
      ],
    },
    {
      artefactMetadata: {
        name: "CompiledClassifierModel",
        artefactType: "ModelCompilerType",
      },
      nodes: [
        {
          id: "Output_1114",
          nodeData: { name: "Compiled Model" },
          nodeType: "Output",
        },
        {
          id: "FunctionNode_GenerateAdamOptimizer_9984",
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
          id: "FunctionNode_CompileModel_1908",
          nodeData: {
            name: "Compile Model",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            inputHandles: ["model", "optimizer", "loss", "metrics"],
            outputHandles: ["compiled-model"],
            elementID: "CompileModel",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "CompileModel",
        },
        {
          id: "FunctionNode_GetTunableFromList_1567",
          nodeData: {
            name: "'learning_rate'",
            hyperparams: [
              { id: "name", value: "'learning_rate'" },
              { id: "values", value: null },
              { id: "ordered", value: "None" },
            ],
            commentText: "",
            commentType: "plain",
            inputHandles: [],
            outputHandles: ["value"],
            elementID: "GetTunableFromList",
            values: null,
            ordered: "None",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "GetTunableFromList",
        },
        {
          id: "FunctionNode_RawData_612",
          nodeData: {
            name: "Emit Raw Data",
            hyperparams: [{ id: "raw-python-data", value: "None" }],
            commentText: "",
            commentType: "plain",
            elementID: "RawData",
            innerCode: "[1e-2, 1e-3, 1e-4]",
            "raw-python-data": "None",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "RawData",
        },
        {
          id: "FunctionNode_RawData_1175",
          nodeData: {
            name: "Emit Raw Data",
            hyperparams: [{ id: "raw-python-data", value: "None" }],
            commentText: "",
            commentType: "plain",
            elementID: "RawData",
            innerCode: "'sparse_categorical_crossentropy'",
            "raw-python-data": "None",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "RawData",
        },
        {
          id: "FunctionNode_RawData_2107",
          nodeData: {
            name: "Emit Raw Data",
            hyperparams: [{ id: "raw-python-data", value: "None" }],
            commentText: "",
            commentType: "plain",
            elementID: "RawData",
            innerCode: "['accuracy']",
            "raw-python-data": "None",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "RawData",
        },
        {
          id: "FunctionNode_ArtefactImporter_9042",
          nodeData: {
            name: "ClassifierModel",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            elementID: "ArtefactImporter",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "ArtefactImporter",
          sourceArtefact: "ClassifierModel",
        },
      ],
      edges: [
        {
          sourceNodeID: "FunctionNode_ArtefactImporter_9042",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_CompileModel_1908",
          targetNodeHandleID: "model",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_GenerateAdamOptimizer_9984",
          sourceNodeHandleID: "Optimizer",
          targetNodeID: "FunctionNode_CompileModel_1908",
          targetNodeHandleID: "optimizer",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_RawData_1175",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_CompileModel_1908",
          targetNodeHandleID: "loss",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_RawData_2107",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_CompileModel_1908",
          targetNodeHandleID: "metrics",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_CompileModel_1908",
          sourceNodeHandleID: "compiled-model",
          targetNodeID: "Output_1114",
          targetNodeHandleID: "in",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_RawData_612",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_GetTunableFromList_1567",
          targetNodeHandleID: "multi-in",
          inLabel: "values",
          outLabel: "values",
        },
        {
          sourceNodeID: "FunctionNode_GetTunableFromList_1567",
          sourceNodeHandleID: "value",
          targetNodeID: "FunctionNode_GenerateAdamOptimizer_9984",
          targetNodeHandleID: "multi-in",
          inLabel: "learning_rate",
          outLabel: "learning_rate",
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
          id: "FunctionNode_ScalarDivide_7702",
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
          id: "FunctionNode_ScalarDivide_2003",
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
        { id: "Output_2250", nodeData: { name: "y_test" }, nodeType: "Output" },
        { id: "Output_2707", nodeData: { name: "x_test" }, nodeType: "Output" },
        {
          id: "Output_3326",
          nodeData: { name: "x_train" },
          nodeType: "Output",
        },
        {
          id: "Output_2844",
          nodeData: { name: "y_train" },
          nodeType: "Output",
        },
        {
          id: "FunctionNode_RawData_3720",
          nodeData: {
            name: "Emit Raw Data",
            hyperparams: [{ id: "raw-python-data", value: "None" }],
            commentText: "",
            commentType: "plain",
            elementID: "RawData",
            innerCode: "255.0",
            "raw-python-data": "None",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "RawData",
        },
        {
          id: "FunctionNode_LoadMNISTDataset_973",
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
          sourceNodeID: "FunctionNode_ScalarDivide_2003",
          sourceNodeHandleID: "result",
          targetNodeID: "Output_3326",
          targetNodeHandleID: "in",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_ScalarDivide_7702",
          sourceNodeHandleID: "result",
          targetNodeID: "Output_2707",
          targetNodeHandleID: "in",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_RawData_3720",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_ScalarDivide_2003",
          targetNodeHandleID: "divisor",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_RawData_3720",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_ScalarDivide_7702",
          targetNodeHandleID: "divisor",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "FunctionNode_LoadMNISTDataset_973",
          sourceNodeHandleID: "mnist-data",
          targetNodeID: "Output_2250",
          targetNodeHandleID: "in",
          inLabel: "y_test",
          outLabel: "y_test",
        },
        {
          sourceNodeID: "FunctionNode_LoadMNISTDataset_973",
          sourceNodeHandleID: "mnist-data",
          targetNodeID: "Output_2844",
          targetNodeHandleID: "in",
          inLabel: "y_train",
          outLabel: "y_train",
        },
        {
          sourceNodeID: "FunctionNode_LoadMNISTDataset_973",
          sourceNodeHandleID: "mnist-data",
          targetNodeID: "FunctionNode_ScalarDivide_7702",
          targetNodeHandleID: "dividend",
          inLabel: "x_test",
          outLabel: "x_test",
        },
        {
          sourceNodeID: "FunctionNode_LoadMNISTDataset_973",
          sourceNodeHandleID: "mnist-data",
          targetNodeID: "FunctionNode_ScalarDivide_2003",
          targetNodeHandleID: "dividend",
          inLabel: "x_train",
          outLabel: "x_train",
        },
      ],
    },
    {
      artefactMetadata: {
        name: "ModelEvaluator",
        artefactType: "ModelEvaluatorArtefact",
      },
      nodes: [
        {
          id: "FunctionNode_EvaluateModel_8759",
          nodeData: {
            name: "Evaluate Model",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            inputHandles: ["model", "x", "y"],
            outputHandles: [],
            elementID: "EvaluateModel",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "EvaluateModel",
        },
        {
          id: "FunctionNode_ArtefactImporter_7192",
          nodeData: {
            name: "ModelTuner",
            hyperparams: [],
            commentText: "",
            commentType: "plain",
            elementID: "ArtefactImporter",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "ArtefactImporter",
          sourceArtefact: "ModelTuner",
        },
        {
          id: "FunctionNode_ArtefactImporter_1296",
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
      ],
      edges: [
        {
          sourceNodeID: "FunctionNode_ArtefactImporter_7192",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_EvaluateModel_8759",
          targetNodeHandleID: "model",
          inLabel: "model",
          outLabel: "model",
        },
        {
          sourceNodeID: "FunctionNode_ArtefactImporter_1296",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_EvaluateModel_8759",
          targetNodeHandleID: "x",
          inLabel: "x_test",
          outLabel: "x_test",
        },
        {
          sourceNodeID: "FunctionNode_ArtefactImporter_1296",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_EvaluateModel_8759",
          targetNodeHandleID: "y",
          inLabel: "y_test",
          outLabel: "y_test",
        },
      ],
    },
    {
      artefactMetadata: {
        name: "ModelTuner",
        artefactType: "ModelTunerArtefact",
      },
      nodes: [
        {
          id: "FunctionNode_GetBestModelAfterTuning_6214",
          nodeData: {
            name: "Get Best Model After Tuning",
            hyperparams: [
              { id: "objective", value: "'val_loss'" },
              { id: "max_trials", value: "5" },
              { id: "epochs", value: "5" },
            ],
            commentText: "",
            commentType: "plain",
            inputHandles: ["build_model"],
            outputHandles: ["best-model"],
            elementID: "GetBestModelAfterTuning",
            objective: "'val_loss'",
            max_trials: "5",
            epochs: "5",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "GetBestModelAfterTuning",
        },
        { id: "Output_1475", nodeData: { name: "model" }, nodeType: "Output" },
        {
          id: "CallBackNode_9523",
          nodeData: { name: "CompiledClassifierModel" },
          nodeType: "Callback",
          sourceArtefact: "CompiledClassifierModel",
        },
        {
          id: "FunctionNode_LoadMNISTDataset_4861",
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
        {
          id: "UnpackerNode_1561",
          nodeData: { commentText: "", commentType: "plain" },
          nodeType: "Unpacker",
          nodeSubtype: "Named",
        },
        {
          id: "UnpackerNode_7502",
          nodeData: { commentText: "", commentType: "plain" },
          nodeType: "Unpacker",
          nodeSubtype: "Named",
        },
        {
          id: "UnpackerNode_7885",
          nodeData: { commentText: "", commentType: "plain" },
          nodeType: "Unpacker",
          nodeSubtype: "Named",
        },
        {
          id: "UnpackerNode_8177",
          nodeData: { commentText: "", commentType: "plain" },
          nodeType: "Unpacker",
          nodeSubtype: "Named",
        },
      ],
      edges: [
        {
          sourceNodeID: "FunctionNode_GetBestModelAfterTuning_6214",
          sourceNodeHandleID: "best-model",
          targetNodeID: "Output_1475",
          targetNodeHandleID: "in",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "CallBackNode_9523",
          sourceNodeHandleID: "in",
          targetNodeID: "FunctionNode_GetBestModelAfterTuning_6214",
          targetNodeHandleID: "build_model",
          inLabel: "*",
          outLabel: "build_model",
        },
        {
          sourceNodeID: "FunctionNode_LoadMNISTDataset_4861",
          sourceNodeHandleID: "mnist-data",
          targetNodeID: "UnpackerNode_1561",
          targetNodeHandleID: "in",
          inLabel: null,
          outLabel: null,
        },
        {
          sourceNodeID: "UnpackerNode_1561",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_GetBestModelAfterTuning_6214",
          targetNodeHandleID: "multi-in",
          inLabel: "x_train",
          outLabel: "x_train",
        },
        {
          sourceNodeID: "FunctionNode_LoadMNISTDataset_4861",
          sourceNodeHandleID: "mnist-data",
          targetNodeID: "UnpackerNode_7502",
          targetNodeHandleID: "in",
          inLabel: null,
          outLabel: null,
        },
        {
          sourceNodeID: "FunctionNode_LoadMNISTDataset_4861",
          sourceNodeHandleID: "mnist-data",
          targetNodeID: "UnpackerNode_7885",
          targetNodeHandleID: "in",
          inLabel: null,
          outLabel: null,
        },
        {
          sourceNodeID: "FunctionNode_LoadMNISTDataset_4861",
          sourceNodeHandleID: "mnist-data",
          targetNodeID: "UnpackerNode_8177",
          targetNodeHandleID: "in",
          inLabel: null,
          outLabel: null,
        },
        {
          sourceNodeID: "UnpackerNode_7502",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_GetBestModelAfterTuning_6214",
          targetNodeHandleID: "multi-in",
          inLabel: "y_test",
          outLabel: "y_test",
        },
        {
          sourceNodeID: "UnpackerNode_7885",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_GetBestModelAfterTuning_6214",
          targetNodeHandleID: "multi-in",
          inLabel: "y_train",
          outLabel: "y_train",
        },
        {
          sourceNodeID: "UnpackerNode_8177",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_GetBestModelAfterTuning_6214",
          targetNodeHandleID: "multi-in",
          inLabel: "x_test",
          outLabel: "x_test",
        },
      ],
    },
    {
      artefactMetadata: { name: "tmp1", artefactType: "ArtefactType" },
      nodes: [
        {
          id: "FunctionNode_CreateAndApplyDenseLayer_5888",
          nodeData: {
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
            units: null,
            activation: "None",
          },
          nodeType: "FunctionNode",
          nodeSubtype: "CreateAndApplyDenseLayer",
        },
        { id: "Input_7356", nodeData: { name: "hp_units" }, nodeType: "Input" },
        { id: "Input_2507", nodeData: { name: "payload" }, nodeType: "Input" },
        {
          id: "Output_5171",
          nodeData: { name: "payload" },
          nodeType: "Output",
        },
      ],
      edges: [
        {
          sourceNodeID: "FunctionNode_CreateAndApplyDenseLayer_5888",
          sourceNodeHandleID: "payload",
          targetNodeID: "Output_5171",
          targetNodeHandleID: "in",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "Input_2507",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_CreateAndApplyDenseLayer_5888",
          targetNodeHandleID: "payload",
          inLabel: "",
          outLabel: "",
        },
        {
          sourceNodeID: "Input_7356",
          sourceNodeHandleID: "out",
          targetNodeID: "FunctionNode_CreateAndApplyDenseLayer_5888",
          targetNodeHandleID: "multi-in",
          inLabel: "units",
          outLabel: "units",
        },
      ],
    },
  ],
  executedFileName: "ModelEvaluator",
};
const codeGenFuncs = {
  GenerateAdamOptimizer: function GenerateAdamOptimizer(params) {
    return {
      imports: [],
      execution: "",
      return: `keras.optimizers.Adam(learning_rate = ${params["learning_rate"]})`,
    };
  },

  CreateAndApplyDenseLayer: function CreateAndApplyDenseLayer(params) {
    return {
      imports: ["from keras.layers import Dense"],
      execution: "",
      return: `Dense(units = ${params["units"]}, activation = ${params["activation"]})(${params["payload"]})`,
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
dnn_var_custom.search(${params["x_train"]}, ${params["y_train"]}, epochs=${params["epochs"]}, validation_data=(${params["x_test"]}, ${params["y_test"]})
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
  ApplyGradientsToModelInplace: function ApplyGradientsToModelInplace(params) {
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
        resultString = resultString + '"' + params[key] + ", ";
      }
    }
    resultString = resultString.slice(0, -2);

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
      let nodeData = artefactNodesInfo.get(artefact_id).get(curr_node_id)[4];
      let funcCode = null;
      let dnn_var = dnn_temp_var_id();
      let str;
      if (nodeSubtype === "ArtefactImporter") {
        str = `${dnn_var} = ${artefactImporter(artefactName, nodeData)}`;
      } else {
        funcCode = codeGenFuncs[nodeSubtype](nodeData);
        const funcReturn = funcCode.return;
        const funcExe = funcCode.execution;
        const imp = funcCode.imports;
        importList.push(imp);
        str = `
  ${funcExe} 
  ${dnn_var} = ${funcReturn}`;
      }
      gen_code = gen_code.concat(str);

      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id);
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
  ${list[i][0]}= dnn_var [${list[i][3]}]`;

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
  ${dnn_var} = parmas["${name}"]`;

      gen_code = gen_code.concat(str);

      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id);
      if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
          gen_arte_dfs(
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
      console.log(`name = ${name}`);
      out_list[`${name}`] = edge_variable;
      return;
    } else if (nodeType === "Loop") {
      if (nodeSubtype === "RepeatLoop") {
        //console.log("RepeatLoop")
        const nodeData = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[4];
        const innerArtefact = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[2];
        const temp_var_destruct = dnn_temp_var_id();
        const temp_var_inner_arte = dnn_temp_var_id();
        let resultString = "{";
        for (let key in nodeData) {
          if (nodeData.hasOwnProperty(key)) {
            resultString =
              resultString + '"' + key + '": ' + nodeData[key] + ", ";
          }
        }
        resultString = resultString.slice(0, -2);

        resultString += "}";
        let s = `
  ${temp_var_destruct} = json.loads(${resultString})
  for i in range(${nodeData["iterationCount"]}):
    ${temp_var_destruct}["ss_index"]=i
    ${temp_var_inner_arte}=${innerArtefact}(${temp_var_destruct})
    ${temp_var_destruct}.update(${temp_var_inner_arte})
    `;
        //console.log(s)
        gen_code = gen_code.concat(s);

        const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0];

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
          out_list
        );
      } else if (nodeSubtype === "ForEachLoop") {
        const nodeData = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[4];
        const innerArtefact = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[2];
        const temp_var_destruct = dnn_temp_var_id();
        const temp_var_inner_arte = dnn_temp_var_id();
        let resultString = "{";
        for (let key in nodeData) {
          if (nodeData.hasOwnProperty(key)) {
            resultString =
              resultString + '"' + key + '": ' + nodeData[key] + ", ";
          }
        }
        resultString = resultString.slice(0, -2);

        resultString += "}";
        let s = `
  ${temp_var_destruct} = json.loads(${resultString})
  for i in ${nodeData["iterationCount"]}
    ${temp_var_destruct}["ss_index"]=i
    ${temp_var_inner_arte}=${innerArtefact}(${temp_var_destruct})
    ${temp_var_destruct}.update(${temp_var_inner_arte})`;

        gen_code = gen_code.concat(s);

        const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0];

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
          out_list
        );
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
        out_list
      );
    } else if (nodeType === "UnPacker") {
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
      let nodeData = artefactNodesInfo.get(artefact_id).get(curr_node_id)[4];
      let funcCode = null;
      let dnn_var = dnn_temp_var_id();
      let str;
      if (nodeSubtype === "ArtefactImporter") {
        str = `${dnn_var} = ${artefactImporter(artefactName, nodeData)}`;
      } else {
        funcCode = codeGenFuncs[nodeSubtype](nodeData);
        const funcReturn = funcCode.return;
        const funcExe = funcCode.execution;
        const imp = funcCode.imports;
        importList.push(imp);
        str = `
  ${funcExe} 
  ${dnn_var} = ${funcReturn}`;
      }
      gen_code = gen_code.concat(str);

      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id);
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
  ${dnn_var}= parmas["${name}"]`;

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
    } else if (nodeType === "UnPacker") {
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

    if (nodeType === "FunctionNode") {
      if (nodeSubtype === "RecordArrayOutput") {
        model_out_list.push(edge_variable);
        return;
      }
      let nodeData = artefactNodesInfo.get(artefact_id).get(curr_node_id)[4];
      //console.log(`subtype   ${nodeSubtype}  Function  ${codeGenFuncs[nodeSubtype]}`)
      let funcCode = codeGenFuncs[nodeSubtype](nodeData);
      const funcReturn = funcCode.return;
      const funcExe = funcCode.execution;
      const imp = funcCode.imports;
      importList.push(imp);
      let dnn_var = dnn_temp_var_id();
      let str = `
  ${funcExe}
  ${dnn_var} = ${funcReturn}`;

      gen_code = gen_code.concat(str);

      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id);

      if (nodeSubtype === "ArrayInput") {
        model_in_list.push(list[0][0]);
      }

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
      if (nodeSubtype === "RepeatLoop") {
        //console.log("RepeatLoop")
        const nodeData = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[4];
        const innerArtefact = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[2];
        const temp_var_destruct = dnn_temp_var_id();
        const temp_var_inner_arte = dnn_temp_var_id();
        let resultString = "{";
        for (let key in nodeData) {
          if (nodeData.hasOwnProperty(key)) {
            resultString =
              resultString + '"' + key + '": ' + nodeData[key] + ", ";
          }
        }
        resultString = resultString.slice(0, -2);

        resultString += "}";
        let s = `
  ${temp_var_destruct} = json.loads(${resultString})
  for i in range(${nodeData["iterationCount"]}):
    ${temp_var_destruct}["ss_index"]=i
    ${temp_var_inner_arte}=${innerArtefact}(${temp_var_destruct})
    ${temp_var_destruct}.update(${temp_var_inner_arte})
    `;
        //console.log(s)
        gen_code = gen_code.concat(s);

        const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0];

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
      } else if (nodeSubtype === "ForEachLoop") {
        const nodeData = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[4];
        const innerArtefact = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[2];
        const temp_var_destruct = dnn_temp_var_id();
        const temp_var_inner_arte = dnn_temp_var_id();
        let resultString = "{";
        for (let key in nodeData) {
          if (nodeData.hasOwnProperty(key)) {
            resultString =
              resultString + '"' + key + '": ' + nodeData[key] + ", ";
          }
        }
        resultString = resultString.slice(0, -2);

        resultString += "}";
        let s = `
  ${temp_var_destruct} = json.loads(${resultString})
  for i in ${nodeData["iterationCount"]}
    ${temp_var_destruct}["ss_index"]=i
    ${temp_var_inner_arte}=${innerArtefact}(${temp_var_destruct})
    ${temp_var_destruct}.update(${temp_var_inner_arte})`;

        gen_code = gen_code.concat(s);

        const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0];

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
    } else if (nodeType === "UnPacker") {
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

    if (nodeType === "FunctionNode") {
      if (nodeSubtype === "EndTapeMonitoring") {
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
      } else {
        let nodeData = artefactNodesInfo.get(artefact_id).get(curr_node_id)[4];
        //console.log(`subtype   ${nodeSubtype}  Function  ${codeGenFuncs[nodeSubtype]}`)

        let funcCode = codeGenFuncs[nodeSubtype](nodeData);
        const funcReturn = funcCode.return;
        const funcExe = funcCode.execution;
        const imp = funcCode.imports;
        importList.push(imp);
        let dnn_var = dnn_temp_var_id();

        let str;
        if (gradientStart) {
          str = `
    ${funcExe}
    ${dnn_var} = ${funcReturn}`;
        } else {
          str = `
  ${funcExe}
  ${dnn_var} = ${funcReturn}`;

          gen_code = gen_code.concat(str);
        }

        const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id);

        if (nodeSubtype === "BeginGradientMonitoring") {
          gradientStart = true;
          // start with here
          let grad_list = [];
          let other_list = [];
          for (let i = 0; i < list.length; i++) {
            const targId = list[i][1];
            if (
              artefactNodesInfo.get(artefact_id).get(targId)[0] ===
                "DataVariable" &&
              artefactNodesInfo.get(artefact_id).get(targId)[1] === "Input"
            ) {
              grad_list.push(targId);
            } else {
              other_list.push(list[i]);
            }
          }

          let s = "";
          for (const targId of grad_list) {
            const name = artefactNodesInfo.get(artefact_id).get(targId)[3];
            s = `
    ${s}, with tf.GradientTape as ${name}`;
          }
          gen_code = gen_code.concat(s);

          for (let i = 0; i < other_list.length; i++) {
            //         if (typeof other_list[i][3] === "undefined") {
            //           let s = `
            // ${list[i][0]}=${dnn_var}`;

            //           gen_code = gen_code.concat(s);
            //         } else {
            //           let s = `
            // ${list[i][0]}=${dnn_var}["${list[i][3]}"]`;

            //           gen_code = gen_code.concat(s);
            //         }

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
        //console.log(name + "  " + Data_Var_Out_List)
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
      if (nodeSubtype === "RepeatLoop") {
        //console.log("RepeatLoop")
        const nodeData = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[4];
        const innerArtefact = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[2];
        const temp_var_destruct = dnn_temp_var_id();
        const temp_var_inner_arte = dnn_temp_var_id();
        let resultString = "{";
        for (let key in nodeData) {
          if (nodeData.hasOwnProperty(key)) {
            resultString =
              resultString + '"' + key + '": ' + nodeData[key] + ", ";
          }
        }
        resultString = resultString.slice(0, -2);

        resultString += "}";
        let s = `
  ${temp_var_destruct} = json.loads(${resultString})
  for i in range(${nodeData["iterationCount"]}):
    ${temp_var_destruct}["ss_index"]=i
    ${temp_var_inner_arte}=${innerArtefact}(${temp_var_destruct})
    ${temp_var_destruct}.update(${temp_var_inner_arte})
    `;
        //console.log(s)
        gen_code = gen_code.concat(s);

        const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0];

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
      } else if (nodeSubtype === "ForEachLoop") {
        const nodeData = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[4];
        const innerArtefact = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[2];
        const temp_var_destruct = dnn_temp_var_id();
        const temp_var_inner_arte = dnn_temp_var_id();
        let resultString = "{";
        for (let key in nodeData) {
          if (nodeData.hasOwnProperty(key)) {
            resultString =
              resultString + '"' + key + '": ' + nodeData[key] + ", ";
          }
        }
        resultString = resultString.slice(0, -2);

        resultString += "}";
        let s = `
  ${temp_var_destruct} = json.loads(${resultString})
  for i in ${nodeData["iterationCount"]}
    ${temp_var_destruct}["ss_index"]=i
    ${temp_var_inner_arte}=${innerArtefact}(${temp_var_destruct})
    ${temp_var_destruct}.update(${temp_var_inner_arte})`;

        gen_code = gen_code.concat(s);

        const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0];

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
    } else if (nodeType === "UnPacker") {
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
            artefactNodesInfo.get(artefactOrder[i]).get(key)[1] === "Output"
          )
        ) {
          //console.log(`nodeType ${artefactNodesInfo.get(artefactOrder[i]).get(key)[0]}  nodeSubtype  ${artefactNodesInfo.get(artefactOrder[i]).get(key)[1]}`)
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
  model = Model(inputs=(${model_in_list}), outputs=(${model_out_list}))
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
            artefactNodesInfo.get(artefactOrder[i]).get(key)[1] === "Output"
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
def ${artefactName}()`
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
            nodeInputList
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
          nodeInputList
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
        s = s.slice(0, -2);

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
  return `${artefactName}(params)`;
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
