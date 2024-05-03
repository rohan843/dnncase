// const jsonObject = require("./graphJson");
import {
  GenerateAdamOptimizer,
  CreateAndApplyDenseLayer,
  Flatten,
  Input,
  GetTunableInt,
  GetTunableFromList,
  RawData,
  gradientTape,
  zeros_like,
  ones_like,
  add,
  subtract,
  divide,
  BinaryCrossentropy,
  batch,
  shuffle,
  reshape,
  evaluateModel,
  getBestModelTuning,
  loadKerasDataset,
  CompileModel,
} from "./helperFunction.mjs";
const jsonObject = {
  artefacts: [
    {
      artefactMetadata: {
        name: "ClassifierModelArtefact",
        artefactType: "ModelArchitectureType",
      },
      nodes: [
        {
          id: "1",
          nodeType: "FunctionNode",
          nodeSubtype: "GetTunableInt",
        },
        {
          id: "2",
          nodeType: "DataVariableNode",
          nodeSubtype: "Input",
          name: "hp_units",
        },
        {
          id: "3",
          nodeType: "FunctionNode",
          nodeSubtype: "GetTunableInt",
        },
        {
          id: "4",
          nodeType: "DataVariableNode",
          nodeSubtype: "Input",
          name: "hp_layers",
        },
        {
          id: "5",
          nodeType: "FunctionNode",
          nodeSubtype: "Input",
        },
        {
          id: "6",
          nodeType: "FunctionNode",
          nodeSubtype: "Flatten",
        },
        {
          id: "7",
          nodeType: "DataVariableNode",
          nodeSubtype: "Output",
          name: "hp_units",
        },
        {
          id: "8",
          nodeType: "FunctionNode",
          nodeSubtype: "CreateAndApplyDenseLayer",
        },
        {
          id: "9",
          nodeType: "DataVariableNode",
          nodeSubtype: "Output",
          name: "hp_units",
        },
        {
          id: "10",
          nodeType: "PackerNode",
          nodeSubtype: "NamedPacker",
        },
        {
          id: "11",
          nodeType: "DataVariableNode",
          nodeSubtype: "Output",
          name: "hp_units",
        },
        {
          id: "12",
          nodeType: "Loop",
          nodeSubtype: "RepeatLoopNode",
          innerArtefact: "tmp1",
        },
        {
          id: "13",
          nodeType: "UnpackerNode",
          nodeSubtype: "NamedUnpacker",
        },
        {
          id: "14",
          nodeType: "FunctionNode",
          nodeSubtype: "CreateAndApplyDenseLayer",
        },
        {
          id: "15",
          nodeType: "FunctionNode",
          nodeSubtype: "Output",
        },
      ],
      edges: [
        {
          label: "",
          sourceNodeID: "1",
          sourceNodeHandleID: "out",
          targetNodeID: "2",
          targetNodeHandleID: "in",
        },
        {
          label: "",
          sourceNodeID: "3",
          sourceNodeHandleID: "out",
          targetNodeID: "4",
          targetNodeHandleID: "in",
        },
        {
          label: "",
          sourceNodeID: "5",
          sourceNodeHandleID: "out",
          targetNodeID: "6",
          targetNodeHandleID: "in",
        },
        {
          label: "",
          sourceNodeID: "7",
          sourceNodeHandleID: "out",
          targetNodeID: "8",
          targetNodeHandleID: "in",
        },
        {
          label: "",
          sourceNodeID: "6",
          sourceNodeHandleID: "out",
          targetNodeID: "8",
          targetNodeHandleID: "in",
        },
        {
          label: "hp_units",
          sourceNodeID: "9",
          sourceNodeHandleID: "out",
          targetNodeID: "10",
          targetNodeHandleID: "in",
        },
        {
          label: "payload",
          sourceNodeID: "8",
          sourceNodeHandleID: "out",
          targetNodeID: "10",
          targetNodeHandleID: "in",
        },
        {
          label: "",
          sourceNodeID: "10",
          sourceNodeHandleID: "out",
          targetNodeID: "12",
          targetNodeHandleID: "in",
        },
        {
          label: "",
          sourceNodeID: "11",
          sourceNodeHandleID: "out",
          targetNodeID: "12",
          targetNodeHandleID: "iterationCount",
        },
        {
          label: "",
          sourceNodeID: "12",
          sourceNodeHandleID: "out",
          targetNodeID: "13",
          targetNodeHandleID: "in",
        },
        {
          label: "payload",
          sourceNodeID: "13",
          sourceNodeHandleID: "out",
          targetNodeID: "14",
          targetNodeHandleID: "in",
        },
        {
          label: "",
          sourceNodeID: "14",
          sourceNodeHandleID: "out",
          targetNodeID: "15",
          targetNodeHandleID: "in",
        },
      ],
    },
  ],
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
      return: `Dense(${params["hp_units"]})(${params["payload"]})`,
    };
  },
  Input: function Input(params) {
    return {
      imports: ["from keras.layers import Input"],
      execution: "",
      return: `Input(shape = ${params["shape"]})`,
    };
  },

  Flatten: function Flatten(params) {
    return {
      imports: ["from keras.layers import Flatten"],
      execution: "",
      return: "Flatten()",
    };
  },
  GetTunableInt: function GetTunableInt(params) {
    return {
      imports: [],
      execution: "",
      return: `hp.Choice('learning_rate', "values= " ${params["value"]})`,
    };
  },
  GetTunableFromList: function GetTunableFromList(params) {
    return {
      imports: [],
      execution: "",
      return: `hp.Int(value=${params["val"]})`,
    };
  },
  RawData: function RawData(params) {
    return {
      imports: [],
      execution: "",
      return: "[1,2,3,4]",
    };
  },

  gradientTape: function gradientTape(params) {
    return {
      imports: [],
      execution: "",
      return: "tf.GradientTape()",
    };
  },

  zeros_like: function zeros_like(params) {
    return {
      imports: [],
      execution: "",
      return: `tf.zeros_like(${params["value"]})`,
    };
  },

  ones_like: function ones_like(params) {
    return {
      imports: [],
      execution: "",
      return: `tf.ones_like(${params["value"]})`,
    };
  },
  add: function add(params) {
    return {
      imports: [],
      execution: "",
      return: `tf.add(" ${params["x"]}"," ${params["y"]} ")`,
    };
  },
  subtract: function subtract(params) {
    return {
      imports: [],
      execution: "",
      return: `tf.subtract(" ${params["x"]}"," ${params["y"]} ")`,
    };
  },
  divide: function divide(params) {
    return {
      imports: [],
      execution: "",
      return: `tf.divide(" ${params["x"]}"," ${params["y"]} ")`,
    };
  },
  BinaryCrossentropy: function BinaryCrossentropy(params) {
    return {
      imports: [],
      execution: "",
      return: "tf.keras.losses.BinaryCrossentropy(from_logits=True)",
    };
  },

  batch: function batch(params) {
    return {
      imports: [],
      execution: "",
      return: `.batch(${params["batch"]})`,
    };
  },
  shuffle: function shuffle(params) {
    return {
      imports: [],
      execution: "",
      return: ".shuffle()",
    };
  },
  reshape: function reshape(params) {
    return {
      imports: [],
      execution: "",
      return: `layers.reshape(${params["shape"]})`,
    };
  },
  evaluateModel: function evaluateModel(params) {
    return {
      imports: [],
      execution: "",
      return: "",
    };
  },

  getBestModelTuning: function getBestModelTuning(params) {
    return {
      imports: [],
      execution: "",
      return: "",
    };
  },
  loadKerasDataset: function loadKerasDataset(params) {
    return {
      imports: [],
      execution: "mnist = keras.dataset.mnist",
      return: "mnist.load_data()",
    };
  },

  CompileModel: function CompileModel(params) {
    return {
      imports: [],
      execution: `${params["model"]}.compile(optimizer = ${params["optimizers"]} , loss = ${params["loss"]}, metrics =  ${params["metrics"]})`,
      return: params["model"],
    };
  },
};
let dnn_temp_id = 0;
let gen_code = "";

function generateCode(jsonObject) {
  // mapping is done to give id to each artefact
  const artefactIdMapping = new Map();
  const idToArtefact = new Map();
  const artefactNodesInfo = new Map(); // artefactId -> nodeId -> [nodeType,nodeSubtype,source/innerArtefact,name,nodeData] ... if codn false then their name is not in array
  const nodeOutputEdgeMap = new Map();
  const nodeInputEdgeMap = new Map();
  const nodeInputList = new Map();
  const artefactOutDegreeCnt = new Map();
  artefactMapping(jsonObject, artefactIdMapping, idToArtefact); // artefact id mapping
  artefactNodesMapping(jsonObject, artefactIdMapping, artefactNodesInfo); // artefact nodes mapping
  nodeOutInEdgeMapping(
    jsonObject,
    nodeOutputEdgeMap,
    artefactIdMapping,
    nodeInputEdgeMap,
    nodeInputList,
    artefactNodesInfo
  ); // artefact-> nodeId->[dnn_temp_id,targetNodeID,targetNodeHandleID,label]
  outdegreeCnt(nodeOutputEdgeMap, artefactOutDegreeCnt);
  console.log(artefactNodesInfo);
  // console.log(nodeOutputEdgeMap)
  // console.log(nodeInputEdgeMap)
  // console.log(artefactOutDegreeCnt)
  //Creating a DAG for the artefacts

  const graph = new Map();
  createGraph(jsonObject, artefactIdMapping, graph);

  // console.log(graph);

  // Now we start topological sorting

  const visited = [];
  for (let i = 0; i < graph.size; i++) {
    visited.push(false);
  }

  const stack = [];

  for (const key of graph.keys()) {
    if (!visited[key]) dfs(key, graph, stack, visited);
  }

  const artefactOrder = [0];
  while (stack.length > 0) {
    artefactOrder.push(stack.pop());
  }
  //console.log(artefactOrder)
  for (let i = 0; i < artefactOrder.length; i++) {
    let str = functionDef(idToArtefact.get(artefactOrder[i]));
    gen_code = gen_code.concat(`${str}\n\t`);
    let out_list = {};
    for (const [key, value] of nodeInputEdgeMap.get(artefactOrder[i])) {
      if (value.length === 0) {
        //outdegreeCnt=artefactOutDegreeCnt.get(artefactOrder[i])
        model_arte_dfs(
          artefactOrder[i],
          key,
          "",
          idToArtefact,
          artefactNodesInfo,
          nodeOutputEdgeMap,
          nodeInputEdgeMap,
          nodeInputList,
          5,
          out_list
        );
      }
    }
    //console.log(out_list)
    if (Object.keys(out_list).length > 0) {
      // console.log("outlist")
      let s = "";
      for (const key in out_list) {
        s = s + key + ":" + out_list[key] + ",\n\t\t";
      }

      gen_code = gen_code.concat(`return{\n\t\t${s}}`);
    }
  }

  console.log(gen_code);
  //console.log(artefactOrder);
}

function gen_arte_dfs(
  artefact_id,
  curr_node_id,
  edge_variable,
  idToArtefact,
  artefactNodesInfo,
  nodeOutputEdgeMap,
  nodeInputEdgeMap,
  nodeInputList,
  outDegCnt,
  out_list
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

    let nodeType = artefactNodesInfo.get(artefact_id).get(curr_node_id)[0];
    let nodeSubtype = artefactNodesInfo.get(artefact_id).get(curr_node_id)[1];

    if (nodeType === "FunctionNode") {
      let nodeData = artefactNodesInfo.get(artefact_id).get(curr_node_id)[4];
      let funcCode = codeGenFuncs[nodeSubtype](nodeData).return;
      let dnn_var = dnn_temp_var_id();
      let str = `${dnn_var} = ${funcCode}\n\t`;

      gen_code = gen_code.concat("" + str);

      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id);
      if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
          //console.log(typeof list[i][3])
          if (list[i][3].length === 0) {
            let s = list[i][0] + "=" + dnn_var + "\n\t";

            gen_code = gen_code.concat(s);
          } else {
            let s = list[i][0] + "=" + dnn_var + "[" + list[i][3] + "]\n\t";

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
            outDegCnt,
            out_list
          );
        }
      } else {
        // console.log("hello1")
        outDegCnt--;
        return;
      }
    } else if (nodeType == "InputNode") {
      let name = artefactNodesInfo.get(artefact_id).get(curr_node_id)[3];
      let dnn_var = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0][0];

      let str = dnn_var + `= parmas["${name}"]`;

      gen_code = gen_code.concat(str + "\n\t");

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
            outDegCnt,
            out_list
          );
        }
      } else {
        outDegCnt--;
        return;
      }
    } else if ((nodeType = "OutputNode")) {
      let name = artefactNodesInfo.get(artefact_id).get(curr_node_id)[3];

      out_list[`${name}`] = edge_variable;

      return;
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
  outDegCnt,
  out_list
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

    let nodeType = artefactNodesInfo.get(artefact_id).get(curr_node_id)[0];
    let nodeSubtype = artefactNodesInfo.get(artefact_id).get(curr_node_id)[1];

    if (nodeType === "FunctionNode") {
      let nodeData = artefactNodesInfo.get(artefact_id).get(curr_node_id)[4];
      let funcCode = codeGenFuncs[nodeSubtype](nodeData).return;
      let dnn_var = dnn_temp_var_id();
      let str = `${dnn_var} = ${funcCode}\n\t`;

      gen_code = gen_code.concat("" + str);

      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id);
      if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
          //console.log(typeof list[i][3])
          if (list[i][3].length === 0) {
            let s = list[i][0] + "=" + dnn_var + "\n\t";

            gen_code = gen_code.concat(s);
          } else {
            let s = list[i][0] + "=" + dnn_var + "[" + list[i][3] + "]\n\t";

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
            outDegCnt,
            out_list
          );
        }
      } else {
        // console.log("hello1")
        outDegCnt--;
        return;
      }
    } else if (nodeType === "InputNode") {
      let name = artefactNodesInfo.get(artefact_id).get(curr_node_id)[3];
      let dnn_var = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0][0];

      let str = dnn_var + `= parmas["${name}"]`;

      gen_code = gen_code.concat(str + "\n\t");

      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id);
      if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
          model_arte_dfs(
            artefact_id,
            list[i][1],
            list[i][0],
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,
            outDegCnt,
            out_list
          );
        }
      } else {
        outDegCnt--;
        return;
      }
    } else if (nodeType === "OutputNode") {
      let name = artefactNodesInfo.get(artefact_id).get(curr_node_id)[3];

      out_list[`${name}`] = edge_variable;

      return;
    } else if (nodeType === "DataVariableNode") {
      const name = artefactNodesInfo.get(artefact_id).get(curr_node_id)[3];
      if (nodeSubtype === "Input") {
        let s = `${name} = ${dnn_var}`;
        gen_code = gen_code.concat(s + "\n\t");

        // code to take all Output data variable node and perform dfs on them
      } else if (nodeSubtype === "Output") {
        // assuming only one output
        const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0];

        let s = `${list[0]} = name`;
        gen_code = gen_code.concat(s + "\n\t");

        model_arte_dfs(
          artefact_id,
          list[1],
          list[0],
          idToArtefact,
          artefactNodesInfo,
          nodeOutputEdgeMap,
          nodeInputEdgeMap,
          nodeInputList,
          outDegCnt,
          out_list
        );
      }
    } else if (nodeType === "Loop") {
      if (nodeSubtype === "RepeatLoop") {
        const nodeData = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[4];
        const innerArtefact = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[2];
        const temp_var_destruct = dnn_temp_var_id();
        const temp_var_inner_arte = dnn_temp_var_id();

        let s = `
                ${temp_var_destruct} = {**${nodeData["payload"]}}\n\t 
                for i in range(${node["iterationCount"]})\n\t\t 
                    ${temp_var_destruct}[ss_index]=i\n\t\t
                    ${temp_var_inner_arte}=${innerArtefact}(${temp_var_destruct})\n\t\t
                    ${temp_var_destruct}.update(${temp_var_inner_arte})\n\t
                      

                `;

        gen_code = gen_code.concat(s);

        const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0];

        if (list[3].length === 0) {
          gen_code = gen_code.concat(`${list[0]}"="${temp_var_destruct}\n\t`);
        } else {
          gen_code = gen_code.concat(
            `${list[0]}=temp_var_destruct"["${list[3]}"]\n\t"`
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
          outDegCnt,
          out_list
        );
      }
    }else if(nodeType=="PackerNode"){
        const nodeData = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[4];

          const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0];

          gen_code = gen_code.concat(`
              ${list[0]}= ${nodeData}\n\t
          `)

          model_arte_dfs(
            artefact_id,
            list[1],
            list[0],
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,
            outDegCnt,
            out_list
          );



    } 
  } else {
    return;
  }
}

function functionDef(artefact_list) {
  const artefactName = artefact_list[0];
  const artefactType = artefact_list[1];

  if (artefactType === "ModelArchitectureType") {
    return `def ${artefactName}(hp=None)`;
  } else if (artefactType === "ModelClassifierType") {
    return `def${artefactName}(hp=None)`;
  } else if (artefactType === "TrainStepArtefact") {
    return `@tf.function\ndef ${artefactName}()`;
  } else {
    return `def ${artefactName}(params)`;
  }
}
function outdegreeCnt(nodeOutputEdgeMap, artefactOutDegreeCnt) {
  for (const [key, values] of nodeOutputEdgeMap) {
    let cnt = 0;
    for (const [subkey, subvalues] of values) {
      if (subvalues.length === 0) {
        cnt++;
      }
    }

    artefactOutDegreeCnt.set(key, cnt);
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
  for (const artefact of jsonObject.artefacts) {
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
            edge.label,
          ]);
      } else {
        nodeOutputEdgeMap
          .get(id)
          .set(edge.sourceNodeID, [
            [temp_var, edge.targetNodeID, edge.targetNodeHandleID, edge.label],
          ]);
      }
      // info of number of input handles in a node.
      nodeInputEdgeMap
        .get(id)
        .get(edge.targetNodeID)
        .push(edge.targetNodeHandleID);

      // info of temp_var associated with each handle of node

      if (edge.targetNodeHandleID === "multi-in") {
        artefactNodesInfo.get(id).get(edge.targetNodeID)[4][`${edge.label}`] =
          temp_var;
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
  for (const artefact of jsonObject.artefacts) {
    let id = artefactIdMapping.get(artefact.artefactMetadata.name);
    artefactNodesInfo.set(id, new Map());
    for (const node of artefact.nodes) {
      if ("sourceArtefact" in node) {
        artefactNodesInfo
          .get(id)
          .set(node.id, [
            node.nodeType,
            node.nodeSubtype,
            node.sourceArtefact,
            node.name,
            {},
          ]);
      } else {
        artefactNodesInfo
          .get(id)
          .set(node.id, [
            node.nodeType,
            node.nodeSubtype,
            node.innerArtefact,
            node.name,
            {},
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

  for (const artefact of jsonObject.artefacts) {
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
  for (const artefact of jsonObject.artefacts) {
    for (const node of artefact.nodes) {
      if ("sourceArtefact" in node || "innerArtefact" in node) {
        let nodeA = artefactIdMapping.get(artefact.artefactMetadata.name);
        let nodeB;
        if ("sourceArtefact" in node) {
          nodeB = artefactIdMapping.get(node.sourceArtefact);
        } else {
          nodeB = artefactIdMapping.get(node.innerArtefact);
        }

        if (graph.has(nodeB)) {
          graph.get(nodeB).push(nodeA);
        } else {
          graph.set(nodeB, [nodeA]);
        }
      }
    }
  }
}

generateCode(jsonObject);
