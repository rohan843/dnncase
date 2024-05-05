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
          nodeData : {}
        },
        {
          id: "2",
          nodeType: "DataVariableNode",
          nodeSubtype: "Input",
          name: "hp_units",
          nodeData : {},
        },
        {
          id: "3",
          nodeType: "FunctionNode",
          nodeSubtype: "GetTunableInt",
          nodeData : {}
        },
        {
          id: "4",
          nodeType: "DataVariableNode",
          nodeSubtype: "Input",
          name: "hp_layers",
          nodeData : {},
        },
        {
          id: "5",
          nodeType: "FunctionNode",
          nodeSubtype: "Input",
          nodeData : {},
        },
        {
          id: "6",
          nodeType: "FunctionNode",
          nodeSubtype: "Flatten",
          nodeData : {},
        },
        {
          id: "7",
          nodeType: "DataVariableNode",
          nodeSubtype: "Output",
          name: "hp_units",
          nodeData : {},
        },
        {
          id: "8",
          nodeType: "FunctionNode",
          nodeSubtype: "CreateAndApplyDenseLayer",
          nodeData : {},
        },
        {
          id: "9",
          nodeType: "DataVariableNode",
          nodeSubtype: "Output",
          name: "hp_units",
          nodeData : {},
        },
        {
          id: "10",
          nodeType: "PackerNode",
          nodeSubtype: "Named",
          nodeData : {},
        },
        {
          id: "11",
          nodeType: "DataVariableNode",
          nodeSubtype: "Output",
          name: "hp_layers",
          nodeData : {},
        },
        {
          id: "12",
          nodeType: "Loop",
          nodeSubtype: "RepeatLoopNode",
          innerArtefact: "tmp1",
          nodeData : {},
        },
        {
          id: "13",
          nodeType: "UnpackerNode",
          nodeSubtype: "NamedUnpacker",
          nodeData : {},
        },
        {
          id: "14",
          nodeType: "FunctionNode",
          nodeSubtype: "CreateAndApplyDenseLayer",
          nodeData : {},
        },
        {
          id: "15",
          nodeType: "FunctionNode",
          nodeSubtype: "Output",
          nodeData : {},
        },
      ],
      edges: [
        {
          label: "",
          sourceNodeID: "1",
          sourceNodeHandleID: "out",
          targetNodeID: "2",
          targetNodeHandleID: "hp_units",
        },
        {
          label: "",
          sourceNodeID: "3",
          sourceNodeHandleID: "out",
          targetNodeID: "4",
          targetNodeHandleID: "hp_layers",
        },
        {
          label: "",
          sourceNodeID: "5",
          sourceNodeHandleID: "out",
          targetNodeID: "6",
          targetNodeHandleID: "payload",
        },
        {
          label: "",
          sourceNodeID: "7",
          sourceNodeHandleID: "out",
          targetNodeID: "8",
          targetNodeHandleID: "units",
        },
        {
          label: "",
          sourceNodeID: "6",
          sourceNodeHandleID: "out",
          targetNodeID: "8",
          targetNodeHandleID: "payload",
        },
        {
          label: "hp_units",
          sourceNodeID: "9",
          sourceNodeHandleID: "out",
          targetNodeID: "10",
          targetNodeHandleID: "multi-in",
        },
        {
          label: "payload",
          sourceNodeID: "8",
          sourceNodeHandleID: "out",
          targetNodeID: "10",
          targetNodeHandleID: "multi-in",
        },
        {
          label: "",
          sourceNodeID: "10",
          sourceNodeHandleID: "out",
          targetNodeID: "12",
          targetNodeHandleID: "payload",
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
          targetNodeHandleID: "payload",
        },
        {
          label: "payload",
          sourceNodeID: "13",
          sourceNodeHandleID: "out",
          targetNodeID: "14",
          targetNodeHandleID: "payload",
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
    {
      artefactMetadata: {
          name: "tmp1",
          artefactType: "ArtefactType"
      },
      nodes: [
          {
              id: "1",
              nodeType: "InputNode",
              nodeSubtype: "hp_units",
              nodeData:{}
              
          }, 
          {
              id: "2",
              nodeType: "InputNode",
              name: "payload",
              nodeData:{}
              
          },
           {
              id: "3",
              nodeType: "FunctionNode",
              nodeSubtype: "CreateAndApplyDenseLayer",
              nodeData:{}
              
          },
          {
              id: "4",
              nodeType: "OutputNode",
              name: "Payload",
              nodeData:{}
              
          }
      ],
      edges: [
          {
              label: "",
              sourceNodeID: "1",
              sourceNodeHandleID: "out",
              targetNodeID: "3",
              targetNodeHandleID: "units"
          },
          {
              label: "",
              sourceNodeID: "2",
              sourceNodeHandleID: "out",
              targetNodeID: "3",
              targetNodeHandleID: "payload"
          },
          {
              label: "",
              sourceNodeID: "3",
              sourceNodeHandleID: "out",
              targetNodeID: "4",
              targetNodeHandleID: "payload"
          }
      ]
  },
  {
    artefactMetadata: {
        name: "CompiledClassifierModel",
        artefactType: "ModelArchitectureType"
    },
    nodes: [
        {
            id: "1",
            nodeType: "FunctionNode",
            nodeSubtype: "ClassiferModel",
            sourceArtefact:"ClassiferModelArtefact"
        },
        {
            id: "2",
            nodeType: "FunctionNode",
            nodeSubtype: "RawData"
        },
        {
            id: "3",
            nodeType: "FunctionNode",
            nodeSubtype: "GetTunableFromList"
            
        },
        {
            id: "4",
            nodeType: "FunctionNode",
            nodeSubtype: "RawData"
        },
        {
            id: "5",
            nodeType: "FunctionNode",
            nodeSubtype: "RawData"            
        }
        ,
        {
            id: "6",
            nodeType: "FunctionNode",
            nodeSubtype: "GenerateAdamOptimizer"
        },
        {
            id: "7",
            nodeType: "FunctionNode",
            nodeSubtype: "CompileModel"
        },
        {
            id: "8",
            nodeType: "OutputNode",
            name: "CompiledModel"            
        }
    ],
    edges: [
        {
            "label": "",
            "sourceNodeID": "1",
            "sourceNodeHandleID": "out",
            "targetNodeID": "7",
            "targetNodeHandleID": "in"
        },
        {
            "label": "",
            "sourceNodeID": "2",
            "sourceNodeHandleID": "out",
            "targetNodeID": "3",
            "targetNodeHandleID": "in"
        },
        {
            "label": "",
            "sourceNodeID": "3",
            "sourceNodeHandleID": "out",
            "targetNodeID": "6",
            "targetNodeHandleID": "in"
        },
        {
            "label": "",
            "sourceNodeID": "4",
            "sourceNodeHandleID": "out",
            "targetNodeID": "7",
            "targetNodeHandleID": "in"
        },
        {
            "label": "",
            "sourceNodeID": "6",
            "sourceNodeHandleID": "out",
            "targetNodeID": "7",
            "targetNodeHandleID": "in"
        },
        {
            "label": "",
            "sourceNodeID": "6",
            "sourceNodeHandleID": "out",
            "targetNodeID": "7",
            "targetNodeHandleID": "in"
        },
        {
            "label": "",
            "sourceNodeID": "7",
            "sourceNodeHandleID": "out",
            "targetNodeID": "8",
            "targetNodeHandleID": "in"
        }
    ]
}
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
      return: `Dense(${params["units"]})(${params["payload"]})`,
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
      return: `hp.Int(value=${params["val"]})`,
    };
  },
  GetTunableFromList: function GetTunableFromList(params) {
    return {
      imports: [],
      execution: "",
      return: `hp.Choice('learning_rate', "values= " ${params["value"]})`,
    };
  },
  CreateDatasetFromNumpyArray: function CreateDatasetFromNumpyArray(params) {
    return {
      imports: [],
      execution: "",
      return: `tf.data.Dataset.from_tensor_slices(${params})`,
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
      return: ".evaluate()",
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
      execution: "(x_train,y_train,x_test,y_test)=keras.dataset.mnist.load_data()",
      return: `{"x_train" : x_train,
                "y_train" : y_train,
                "x_test" : x_test,
                "y_test" : y_test
      }`
    };
  },
  Named: function packerNamed(params){
    let resultString = '{';
      for (let key in params) {
          if (params.hasOwnProperty(key)) {
              resultString = resultString + '"' + key + '": ' + params[key] + ', ';
          }
      }
      resultString = resultString.slice(0, -2);

      resultString += '}'

      return {
        imports: [],
        execution: "",
        return: `${resultString}`,
      };


  },
  Ordered: function packerOrdered(params){
    let resultString = '[';
      for (let key in params) {
          if (params.hasOwnProperty(key)) {
              resultString = resultString + '"' + params[key] + ', ';
          }
      }
      resultString = resultString.slice(0, -2);

      resultString += ']'

      return {
        imports: [],
        execution: "",
        return: `${resultString}`,
      };


  },

  CompileModel: function CompileModel(params) {
    return {
      imports: [],
      execution: `${params["model"]}.compile(optimizer = ${params["optimizers"]} , loss = ${params["loss"]}, metrics =  ${params["metrics"]})`,
      return: params["model"],
    };
  },
  
  CallBackNode: function Callback(params) {
    return {
      imports: [],
      execution:"",
      return: `${params}`,
    };
  },

  ClassifierModel: function ClassifierModel(params) {
    return {
      imports: [],
      execution:"",
      return:`ClassifierModel(${params})`,
    };
  },
  MNSITDataLoader: function MNSITDataLoader(params) {
    return {
      imports: [],
      execution:"",
      return:`MNSITDataLoader(${params})`,
    };
  },
  CompiledClassifierModel: function CompiledClassifierModel(params) {
    return {
      imports: [],
      execution:"",
      return:`CompiledClassifierModel(${params})`,
    };
  },
  ModelTuner: function ModelTuner(params) {
    return {
      imports: [],
      execution:"",
      return:`ModelTuner(${params})`,
    };
  },
  ModelEvaluator: function ModelEvaluator(params) {
    return {
      imports: [],
      execution:"",
      return:`ModelEvaluator(${params})`,
    };
  },
  Constants: function Constants(params) {
    return {
      imports: [],
      execution:"",
      return:`Constants(${params})`,
    };
  },
  DiscriminatorLoss: function DiscriminatorLoss(params) {
    return {
      imports: [],
      execution:"",
      return:`DiscriminatorLoss(${params})`,
    };
  },
  GeneratorLoss: function GeneratorLoss(params) {
    return {
      imports: [],
      execution:"",
      return:`GeneratorLoss(${params})`,
    };
  },
  DiscriminatorModel: function DiscriminatorMdel(params) {
    return {
      imports: [],
      execution:"",
      return:`DiscriminatorModel(${params})`,
    };
  },
  GeneratorModel: function GeneratorModel(params) {
    return {
      imports: [],
      execution:"",
      return:`GeneratorModel(${params})`,
    };
  },
  TrainStep: function TrainStep(params) {
    return {
      imports: [],
      execution:"",
      return:`TrainStep(${params})`,
    };
  },
  TrainingLoop: function TrainingLoop(params) {
    return {
      imports: [],
      execution:"",
      return:`TrainingLoop(${params})`,
    };
  },
  LoadedData: function LoadedData(params) {
    return {
      imports: [],
      execution:"",
      return:`LoadedData(${params})`,
    };
  },



};
let dnn_temp_id = 0;
let gen_code = "";
let importList= [["import tensorflow as tf","from tensorflow import keras"]]
let gradientStart =false;
function main(jsonObject) {
  // mapping is done to give id to each artefact
  const artefactIdMapping = new Map();
  const idToArtefact = new Map();
  const artefactNodesInfo = new Map(); // artefactId -> nodeId -> [nodeType,nodeSubtype,source/innerArtefact,name,nodeData] ... if codn false then their name is not in array
  const nodeOutputEdgeMap = new Map();
  const nodeInputEdgeMap = new Map();
  const nodeInputList = new Map();
  const artefactOutDegreeCnt = new Map();
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
  ); // artefact-> nodeId->[dnn_temp_id,targetNodeID,targetNodeHandleID,label]
  outdegreeCnt(nodeOutputEdgeMap, artefactOutDegreeCnt);
  dataVariableNodeMapping(jsonObject, artefactIdMapping, dataVariableInpOutMap);
  console.log(idToArtefact);
  // console.log(artefactNodesInfo);
  // console.log(nodeOutputEdgeMap)
  // console.log(nodeInputEdgeMap)
  //console.log(artefactOutDegreeCnt)
  console.log(dataVariableInpOutMap)
  //Creating a DAG for the artefacts

  const graph = new Map();
  createGraph(jsonObject, artefactIdMapping, graph);

  //console.log(graph);

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
  if(graph.size>0){
  while (stack.length > 0) {
     artefactOrder.push(stack.pop());
   }
  }else {
    for(const [key,value] of artefactIdMapping){
      artefactOrder.push(value)
    }
  }
  
  generateCode(artefactNodesInfo,idToArtefact, nodeInputEdgeMap, nodeOutputEdgeMap,nodeInputList, dataVariableInpOutMap,artefactOrder)
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
    const artefactName = artefactNodesInfo.get(artefact_id).get(curr_node_id)[2]
    
    if (nodeType === "FunctionNode") {
      let nodeData = artefactNodesInfo.get(artefact_id).get(curr_node_id)[4];
      let funcCode;
      if(typeof artefactName !== "undefined"){
      funcCode = codeGenFuncs[artefactName](nodeData);
      }else{
        funcCode = codeGenFuncs[nodeSubtype](nodeData);
      }
      const funcReturn = funcCode.return
      const funcExe = funcCode.execution
      const imp = funcCode.imports
      importList.push(imp)
      let dnn_var = dnn_temp_var_id();
      let str = `
  ${funcExe} 
  ${dnn_var} = ${funcReturn}`;

      gen_code = gen_code.concat(str);

      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id);
      if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
          
          if (typeof list[i][3] === "undefined") {
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
    } else if (nodeType === "InputNode") {
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
    } else if ((nodeType === "OutputNode")) {
      let name = artefactNodesInfo.get(artefact_id).get(curr_node_id)[3];

      out_list[`${name}`] = edge_variable;

      return;
    } else if (nodeType === "Loop") {
      if (nodeSubtype === "RepeatLoopNode") {
        //console.log("RepeatLoop")
        const nodeData = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[4];
        const innerArtefact = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[2];
        const temp_var_destruct = dnn_temp_var_id();
        const temp_var_inner_arte = dnn_temp_var_id();
        let resultString = '{';
        for (let key in nodeData) {
            if (nodeData.hasOwnProperty(key)) {
                resultString = resultString + '"' + key + '": ' + nodeData[key] + ', ';
            }
        }
        resultString = resultString.slice(0, -2);
  
        resultString += '}'
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

        if (list[3].length === 0) {
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
      }else if(nodeSubtype==="ForEachLoop"){
        const nodeData = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[4];
        const innerArtefact = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[2];
        const temp_var_destruct = dnn_temp_var_id();
        const temp_var_inner_arte = dnn_temp_var_id();
        let resultString = '{';
        for (let key in nodeData) {
            if (nodeData.hasOwnProperty(key)) {
                resultString = resultString + '"' + key + '": ' + nodeData[key] + ', ';
            }
        }
        resultString = resultString.slice(0, -2);
  
        resultString += '}'
        let s = `
  ${temp_var_destruct} = json.loads(${resultString})
  for i in ${nodeData["iterationCount"]}
    ${temp_var_destruct}["ss_index"]=i
    ${temp_var_inner_arte}=${innerArtefact}(${temp_var_destruct})
    ${temp_var_destruct}.update(${temp_var_inner_arte})`;

        gen_code = gen_code.concat(s);

        const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0];

        if (list[3].length === 0) {
          gen_code = gen_code.concat(`
  ${list[0]}"="${temp_var_destruct}`);
        } else {
          gen_code = gen_code.concat(`
  ${list[0]}=temp_var_destruct"["${list[3]}"]`
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
      }
    } else if (nodeType === "PackerNode") {
      const nodeData = artefactNodesInfo.get(artefact_id).get(curr_node_id)[4];

      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0];
      let funcCode = codeGenFuncs[nodeSubtype](nodeData);
      const funcReturn = funcCode.return
      const funcExe = funcCode.execution
      const imp = funcCode.imports
      importList.push(imp)

      
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
    } else if (nodeType === "UnpackerNode") {
      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id);
      if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
          //console.log(typeof list[i][3])
          if (typeof list[i][3] === "undefined") {
            gen_code = gen_code.concat(`
  ${list[i][0]}=${edge_variable}`);
          } else {
            gen_code = gen_code.concat(`
  ${list[i][0]}= ${edge_variable}["${list[i][3]}"]`
            );
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
      const artefactName = artefactNodesInfo.get(artefact_id).get(curr_node_id)[2]
      
      if (nodeType === "FunctionNode") {
        let nodeData = artefactNodesInfo.get(artefact_id).get(curr_node_id)[4];
        let funcCode;
        if(artefactName.length>0){
        funcCode = codeGenFuncs[artefactName](nodeData);
        }else{
          funcCode = codeGenFuncs[nodeSubtype](nodeData);
        }
        const funcReturn = funcCode.return
        const funcExe = funcCode.execution
        const imp = funcCode.imports
        importList.push(imp)
        let dnn_var = dnn_temp_var_id();
        let str = `
  ${funcExe}
  ${dnn_var} = ${funcReturn}`;
  
        gen_code = gen_code.concat(str);
  
        const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id);
       if (list.length > 0) {
            for (let i = 0; i < list.length; i++) {
              //console.log(typeof list[i][3])
              if (typeof list[i][3] === "undefined") {
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
      } else if (nodeType === "InputNode") {
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
      } else if ((nodeType === "OutputNode")) {
        let name = artefactNodesInfo.get(artefact_id).get(curr_node_id)[3];
  
        out_list[`${name}`] = edge_variable;
  
        return;
      }else if (nodeType === "PackerNode") {
        const nodeData = artefactNodesInfo.get(artefact_id).get(curr_node_id)[4];
    
        const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0];
        let funcCode = codeGenFuncs[nodeSubtype](nodeData);
        const funcReturn = funcCode.return
        const funcExe = funcCode.execution
        const imp = funcCode.imports
        importList.push(imp)
    
        
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
      } else if (nodeType === "UnpackerNode") {
        const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id);
        if (list.length > 0) {
          for (let i = 0; i < list.length; i++) {
            //console.log(typeof list[i][3])
            if (typeof list[i][3] === "undefined") {
              gen_code = gen_code.concat(`
    ${list[i][0]}=${edge_variable}`);
            } else {
              gen_code = gen_code.concat(`
    ${list[i][0]}= ${edge_variable}["${list[i][3]}"]`
              );
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
  model_out_list,
  
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
      if (nodeSubtype === "Output") {
        model_out_list.push(edge_variable);
        return;
      }
      let nodeData = artefactNodesInfo.get(artefact_id).get(curr_node_id)[4];
      //console.log(`subtype   ${nodeSubtype}  Function  ${codeGenFuncs[nodeSubtype]}`)
      let funcCode = codeGenFuncs[nodeSubtype](nodeData);
      const funcReturn = funcCode.return
      const funcExe = funcCode.execution
      const imp = funcCode.imports
      importList.push(imp)
      let dnn_var = dnn_temp_var_id();
      let str = `
  ${funcExe}
  ${dnn_var} = ${funcReturn}`;

      gen_code = gen_code.concat(str);

      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id);

      if (nodeSubtype === "Input") {
        model_in_list.push(list[0][0]);
      }
      
      if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
          //console.log(typeof list[i][3])
          if (typeof list[i][3] === "undefined") {
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
            model_out_list,
            
          );
        }
      } else {
        return;
      }
    } else if (nodeType === "DataVariableNode") {
      const name = artefactNodesInfo.get(artefact_id).get(curr_node_id)[3];
      if (nodeSubtype === "Input") {
        let s = `
  ${name} = ${edge_variable}`;
        gen_code = gen_code.concat(s);

        // code to take all Output data variable node and perform dfs on them
        const Data_Var_Out_List = dataVariableInpOutMap.get(artefact_id).get(name);
        //console.log(name + "  " + Data_Var_Out_List)
        for(const nodeId of Data_Var_Out_List){
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
            model_out_list,
            
          )
        }
      } else if (nodeSubtype === "Output") {
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
          model_out_list,
          
        );
      }
    } else if (nodeType === "Loop") {
      if (nodeSubtype === "RepeatLoopNode") {
        //console.log("RepeatLoop")
        const nodeData = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[4];
        const innerArtefact = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[2];
        const temp_var_destruct = dnn_temp_var_id();
        const temp_var_inner_arte = dnn_temp_var_id();
        let resultString = '{';
        for (let key in nodeData) {
            if (nodeData.hasOwnProperty(key)) {
                resultString = resultString + '"' + key + '": ' + nodeData[key] + ', ';
            }
        }
        resultString = resultString.slice(0, -2);
  
        resultString += '}'
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

        if (list[3].length === 0) {
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
          model_out_list,
          
        );
      }else if(nodeSubtype==="ForEachLoop"){
        const nodeData = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[4];
        const innerArtefact = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[2];
        const temp_var_destruct = dnn_temp_var_id();
        const temp_var_inner_arte = dnn_temp_var_id();
        let resultString = '{';
        for (let key in nodeData) {
            if (nodeData.hasOwnProperty(key)) {
                resultString = resultString + '"' + key + '": ' + nodeData[key] + ', ';
            }
        }
        resultString = resultString.slice(0, -2);
  
        resultString += '}'
        let s = `
  ${temp_var_destruct} = json.loads(${resultString})
  for i in ${nodeData["iterationCount"]}
    ${temp_var_destruct}["ss_index"]=i
    ${temp_var_inner_arte}=${innerArtefact}(${temp_var_destruct})
    ${temp_var_destruct}.update(${temp_var_inner_arte})`;

        gen_code = gen_code.concat(s);

        const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0];

        if (list[3].length === 0) {
          gen_code = gen_code.concat(`
  ${list[0]}"="${temp_var_destruct}`);
        } else {
          gen_code = gen_code.concat(`
  ${list[0]}=temp_var_destruct"["${list[3]}"]`
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
          model_out_list,
          
        );
      }
    } else if (nodeType === "PackerNode") {
      const nodeData = artefactNodesInfo.get(artefact_id).get(curr_node_id)[4];

      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0];
      let funcCode = codeGenFuncs[nodeSubtype](nodeData);
      const funcReturn = funcCode.return
      const funcExe = funcCode.execution
      const imp = funcCode.imports
      importList.push(imp)

      
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
        model_out_list,
        
      );
    } else if (nodeType === "UnpackerNode") {
      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id);
      if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
          //console.log(typeof list[i][3])
          if (typeof list[i][3] === "undefined") {
            gen_code = gen_code.concat(`
  ${list[i][0]}=${edge_variable}`);
          } else {
            gen_code = gen_code.concat(`
  ${list[i][0]}= ${edge_variable}["${list[i][3]}"]`
            );
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
            model_out_list,
            
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
  dataVariableInpOutMap,
   
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
      if(nodeSubtype==="EndTapeMonitoring"){
        gradientStart=false;
        let dnn_var = dnn_temp_var_id();
        let str;
        if(gradientStart){
         str = `
    ${dnn_var} = ${edge_variable}`;
        }else{
          str =`
    
  ${dnn_var} = ${edge_variable}`;
        }
        gen_code=gen_code.concat(str)

        const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id);
        if (list.length > 0) {
          for (let i = 0; i < list.length; i++) {
            //console.log(typeof list[i][3])
            let s;
            if (typeof list[i][3] === "undefined") {
              if(gradientStart){
                s = `
    ${list[i][0]}=${dnn_var}`;
  
            }else {
              s=`
  ${list[i][0]}=${dnn_var}` 
            }  
            } else {
              if(gradientStart){
                s = `
    ${list[i][0]}=${dnn_var}["${list[i][3]}"]`;
  
            }else {
              s=`
  ${list[i][0]}=${dnn_var}["${list[i][3]}"]` 
            }  
            }
  gen_code=gen_code.concat(s)
            train_step_dfs(
              artefact_id,
              list[i][1],
              list[i][0],
              idToArtefact,
              artefactNodesInfo,
              nodeOutputEdgeMap,
              nodeInputEdgeMap,
              nodeInputList,
               dataVariableInpOutMap,
              
            );
          }
        } else {
          return;
        }

      }else {
      let nodeData = artefactNodesInfo.get(artefact_id).get(curr_node_id)[4];
      //console.log(`subtype   ${nodeSubtype}  Function  ${codeGenFuncs[nodeSubtype]}`)
      
      let funcCode = codeGenFuncs[nodeSubtype](nodeData);
      const funcReturn = funcCode.return
      const funcExe = funcCode.execution
      const imp = funcCode.imports
      importList.push(imp)
      let dnn_var = dnn_temp_var_id();

      let str;
      if(gradientStart){
       str = `
    ${funcExe}
    ${dnn_var} = ${funcReturn}`;
      }else{
        str =`
  ${funcExe}
  ${dnn_var} = ${funcReturn}`;

    
       

      gen_code = gen_code.concat(str);
  }

      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id);

      if(nodeSubtype==="BeginGradientMonitoring"){
        gradientStart=true;
        // start with here
        let grad_list=[]
        let other_list=[]
        for(let i=0;i<list.length;i++){
          const targId = list[i][1];
          if(artefactNodesInfo.get(artefact_id).get(targId)[0]==="DataVariableNode" && artefactNodesInfo.get(artefact_id).get(targId)[1]==="Input"){
            grad_list.push(targId)
          }else {
            other_list.push(list[i])
          }
        }

        let s =""
        for(const targId of grad_list){
          const name = artefactNodesInfo.get(artefact_id).get(targId)[3]
          s=`
    ${s}, with tf.GradientTape as ${name}`
        }
        gen_code=gen_code.concat(s)

        for(let i=0;i<other_list.length;i++){

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
             dataVariableInpOutMap,
            
          );
          
        }

        
      }else {
        if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
          //console.log(typeof list[i][3])
          let s;
          if (typeof list[i][3] === "undefined") {
            if(gradientStart){
              s = `
  ${list[i][0]}=${dnn_var}`;

          }else {
            s=`
${list[i][0]}=${dnn_var}` 
          }  
          } else {
            if(gradientStart){
              s = `
  ${list[i][0]}=${dnn_var}["${list[i][3]}"]`;

          }else {
            s=`
${list[i][0]}=${dnn_var}["${list[i][3]}"]` 
          }  
          }
gen_code=gen_code.concat(s)

          train_step_dfs(
            artefact_id,
            list[i][1],
            list[i][0],
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,
             dataVariableInpOutMap,
            
          );
          
        }
      } else {
        return;
      }
    }}} else if (nodeType === "DataVariableNode") {
      const name = artefactNodesInfo.get(artefact_id).get(curr_node_id)[3];
      if (nodeSubtype === "Input") {
        let s;
        if(gradientStart){
          s = `
    ${name} = ${edge_variable}`;
        }else {
          s = `
  ${name} = ${edge_variable}`;
        }
        gen_code = gen_code.concat(s);

        // code to take all Output data variable node and perform dfs on them
        const Data_Var_Out_List = dataVariableInpOutMap.get(artefact_id).get(name);
        //console.log(name + "  " + Data_Var_Out_List)
        for(const nodeId of Data_Var_Out_List){
          train_step_dfs(
            artefact_id,
            nodeId,
            "",
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,
            dataVariableInpOutMap,
           
            
          )
        }
      } else if (nodeSubtype === "Output") {
        // assuming only one output
        const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0];
        let s;
        if(gradientStart){
          s = `
    ${list[0]} = ${name}`;
        }else {
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
          dataVariableInpOutMap,
       
        );
      }
    } else if (nodeType === "Loop") {
      if (nodeSubtype === "RepeatLoopNode") {
        //console.log("RepeatLoop")
        const nodeData = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[4];
        const innerArtefact = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[2];
        const temp_var_destruct = dnn_temp_var_id();
        const temp_var_inner_arte = dnn_temp_var_id();
        let resultString = '{';
        for (let key in nodeData) {
            if (nodeData.hasOwnProperty(key)) {
                resultString = resultString + '"' + key + '": ' + nodeData[key] + ', ';
            }
        }
        resultString = resultString.slice(0, -2);
  
        resultString += '}'
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

        if (list[3].length === 0) {
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
          dataVariableInpOutMap,
        
          
        );
      }else if(nodeSubtype==="ForEachLoop"){
        const nodeData = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[4];
        const innerArtefact = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[2];
        const temp_var_destruct = dnn_temp_var_id();
        const temp_var_inner_arte = dnn_temp_var_id();
        let resultString = '{';
        for (let key in nodeData) {
            if (nodeData.hasOwnProperty(key)) {
                resultString = resultString + '"' + key + '": ' + nodeData[key] + ', ';
            }
        }
        resultString = resultString.slice(0, -2);
  
        resultString += '}'
        let s = `
  ${temp_var_destruct} = json.loads(${resultString})
  for i in ${nodeData["iterationCount"]}
    ${temp_var_destruct}["ss_index"]=i
    ${temp_var_inner_arte}=${innerArtefact}(${temp_var_destruct})
    ${temp_var_destruct}.update(${temp_var_inner_arte})`;

        gen_code = gen_code.concat(s);

        const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0];

        if (list[3].length === 0) {
          gen_code = gen_code.concat(`
  ${list[0]}"="${temp_var_destruct}`);
        } else {
          gen_code = gen_code.concat(`
  ${list[0]}=temp_var_destruct"["${list[3]}"]`
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
          
          dataVariableInpOutMap,
     
          
        );
      }
    } else if (nodeType === "PackerNode") {
      const nodeData = artefactNodesInfo.get(artefact_id).get(curr_node_id)[4];

      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0];
      let funcCode = codeGenFuncs[nodeSubtype](nodeData);
      const funcReturn = funcCode.return
      const funcExe = funcCode.execution
      const imp = funcCode.imports
      importList.push(imp)
     let s;
     if(gradientStart){
   s=`
    ${funcExe}
    ${list[0]}= ${funcReturn}`
     }else {
      s=`
  ${funcExe}
  ${list[0]}= ${funcReturn}`
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
        dataVariableInpOutMap,
   
        
      );
    } else if (nodeType === "UnpackerNode") {
      const list = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id);
      if (list.length > 0) {
        for (let i = 0; i < list.length; i++) {
          //console.log(typeof list[i][3])
       let s;
          if (typeof list[i][3] === "undefined") {
            if(gradientStart){
              s=`
    ${list[i][0]}=${edge_variable}`
            }else {
              s=`
  ${list[i][0]}=${edge_variable}`
              
            }
            
          } else {
            if(gradientStart){
                s=`
    ${list[i][0]}= ${edge_variable}["${list[i][3]}"]`
            }else {
              s=`
  ${list[i][0]}= ${edge_variable}["${list[i][3]}"]`
            }
           
          }
  gen_code = gen_code.concat(s)
          train_step_dfs(
            artefact_id,
            list[i][1],
            list[i][0],
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,
            
            dataVariableInpOutMap,
        
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

function generateCode(artefactNodesInfo,idToArtefact, nodeInputEdgeMap, nodeOutputEdgeMap,nodeInputList, dataVariableInpOutMap,artefactOrder) {

  for(let i=0;i<artefactOrder.length;i++){
    
    const artefactName = idToArtefact.get(artefactOrder[i])[0];
    const artefactType = idToArtefact.get(artefactOrder[i])[1];

    if (artefactType === "ModelArchitectureType") {
      gen_code= gen_code.concat(`
def ${artefactName}(hp=None):
      `)
      const model_in_list=[]
      const model_out_list=[]

      for (const [key, value] of nodeInputEdgeMap.get(artefactOrder[i])) {
        if (value.length === 0 && !(artefactNodesInfo.get(artefactOrder[i]).get(key)[0]==="DataVariableNode" && artefactNodesInfo.get(artefactOrder[i]).get(key)[1]==="Output")) {
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
      
      gen_code=gen_code.concat(`
  model = Model(inputs=(${model_in_list}), outputs=(${model_out_list}))
  return model`)

    } else if (artefactType === "ModelClassifierType") {
      gen_code=gen_code.concat(`def${artefactName}(hp=None):\n\t`);
      const out_list=[]
      for (const [key, value] of nodeInputEdgeMap.get(artefactOrder[i])) {
        if (value.length === 0 && !(artefactNodesInfo.get(artefactOrder[i]).get(key)[0]==="DataVariableNode" && artefactNodesInfo.get(artefactOrder[i]).get(key)[1]==="Output")) {
        
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
          )
        }
      }
      if (Object.keys(out_list).length > 0) {
        let s = "";
        for (const key in out_list) {
          s = `${s} "${key}":${out_list[key]},`;
        }
        s = s.slice(0, -2)
  
        gen_code = gen_code.concat(`
  return{
    ${s}
  }`);

      }

    } else if (artefactType === "TrainStepArtefact") {
      gen_code=gen_code.concat(`@tf.function\ndef ${artefactName}()`);
      const gradient_tape_list=[]
      for (const [key, value] of nodeInputEdgeMap.get(artefactOrder[i])) {
        if(artefactNodesInfo.get(artefactOrder[i]).get(key)[1]=="BeginGradientMonitoring"){
          gradient_tape_list.push(key)
        }else if (value.length === 0 && !(artefactNodesInfo.get(artefactOrder[i]).get(key)[0]==="DataVariableNode" && artefactNodesInfo.get(artefactOrder[i]).get(key)[1]==="Output")) {
        
          train_step_dfs(
            artefactOrder[i],
            key,
            "",
            idToArtefact,
            artefactNodesInfo,
            nodeOutputEdgeMap,
            nodeInputEdgeMap,
            nodeInputList,
            
          )
        }
      }

      for(const key of gradient_tape_list){

        train_step_dfs(
          artefactOrder[i],
          key,
          "",
          idToArtefact,
          artefactNodesInfo,
          nodeOutputEdgeMap,
          nodeInputEdgeMap,
          nodeInputList,
          
        )

      }

    } else {
      gen_code = gen_code.concat(`def ${artefactName}(params):`)
      const out_list=[]
      for (const [key, value] of nodeInputEdgeMap.get(artefactOrder[i])) {
        if (value.length === 0 && !(artefactNodesInfo.get(artefactOrder[i]).get(key)[0]==="DataVariableNode" && artefactNodesInfo.get(artefactOrder[i]).get(key)[1]==="Output")) {
        
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
          )
        }
      }
      if (Object.keys(out_list).length > 0) {
        // console.log("outlist")
        let s = "";
        for (const key in out_list) {
          s = `${s} "${key}":${out_list[key]},`;
        }
        s = s.slice(0, -2)
  
        gen_code = gen_code.concat(`
  return{
    ${s}
  }`);

      }
    }
    
    gen_code=gen_code.concat("\n\n")
  }

  //console.log(importList)
  let union_import_list =[]
  let imports ="";
  for(const list of importList){
    for(const imp of list){
      if(imp.length>0 && !union_import_list.includes(imp)){
        union_import_list.push(imp)
        imports = `
${imports}
${imp}`
      }
    }
  }
  gen_code = `
${imports}

${gen_code}`
  console.log(gen_code)

 
  
}
function dataVariableNodeMapping(
  jsonObject,
  artefactIdMapping,
  dataVariableInpOutMap
) {
  for (const artefact of jsonObject.artefacts) {
    const id = artefactIdMapping.get(artefact.artefactMetadata.name);
    
    dataVariableInpOutMap.set(id, new Map());
    for (const node of artefact.nodes) {
      if (node.nodeType === "DataVariableNode" && node.nodeSubtype === "Input") {
        //console.log(`Input   ${node.name}`)
        dataVariableInpOutMap.get(id).set(node.name, []);
      }
      if (node.nodeType === "DataVariableNode" && node.nodeSubtype === "Output") {
        if (dataVariableInpOutMap.get(id).has(node.name)) {
          //console.log(`Output   ${node.name}`)
          dataVariableInpOutMap.get(id).get(node.name).push(node.id);
        }
      }
    }
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
            node.nodeData,
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
  // TODO : Check ogic for call back also
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
        if(typeof nodeB !== 'undefined'){
        if (graph.has(nodeB)) {
          graph.get(nodeB).push(nodeA);
        } else {
          graph.set(nodeB, [nodeA]);
        }
      }
      }else if(node.type === "CallBackNode"){
        let nodeA = artefactIdMapping.get(artefact.artefactMetadata.name)
        let nodeB = artefactIdMapping.get(node.name)

        if(typeof nodeB !== 'undefined'){
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

main(jsonObject);
