/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-keys */
const node = {
  id: "nodeID",
  type: "nodeType",

  // if type === "LayerNode"
  layerName: "Layer",
  hyperparams: [{ id: "activation", value: "relu" }],
  commentText: "comment",
  inputHandles: [],
  outputHandles: [],

  // if type === "ReuseNode"
  layerName: "Layer",
  hyperparams: [{ id: "activation", value: "relu" }],
  commentText: "comment",
  inputHandles: [],
  outputHandles: [],
  reuseCount: 2,

  // if type === "InputNode"
  hyperparams: [{ id: "input_shape", value: "(26, 26)" }],
  commentText: "comment",

  // if type === "OutputNode"
  commentText: "comment",

  // if type === "PackerNode"
  hyperparams: [{ id: "packingCount", value: 3 }],
  inputHandles: [],

  // if type === "UnpackerNode"
  hyperparams: [{ id: "unpackingCount", value: 3 }],
  outputHandles: [],
};
