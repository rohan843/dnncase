import { useSelector } from "react-redux";
import PythonCodeGenButton from "./PythonCodeGenButton";
import { cloneDeep } from "lodash";
// import { cloneDeep, find, findIndex } from "lodash";

const permissibleFileTypes = {
  dc: true,
};
function code_generator(jsonObject) {
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
    ApplyGradientsToModelInPlace: function ApplyGradientsToModelInplace(
      params
    ) {
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
  let importList = [
    ["import tensorflow as tf", "from tensorflow import keras"],
  ];
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
    //console.log(artefactOrder);
    return generateCode(
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
      const nodeSubtype = artefactNodesInfo
        .get(artefact_id)
        .get(curr_node_id)[1];
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
        let dnn_var = nodeOutputEdgeMap
          .get(artefact_id)
          .get(curr_node_id)[0][0];

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
        const nodeData = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[4];

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
      } else {
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
      const nodeSubtype = artefactNodesInfo
        .get(artefact_id)
        .get(curr_node_id)[1];
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
        let dnn_var = nodeOutputEdgeMap
          .get(artefact_id)
          .get(curr_node_id)[0][0];

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
        const nodeData = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[4];

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
  ${list[0]}=${temp_var_destruct}["${list[3]}"]`
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
        const nodeData = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[4];

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
          gen_code = gen_code.concat(`
  ${s}:`);
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
          let nodeData = artefactNodesInfo
            .get(artefact_id)
            .get(curr_node_id)[4];
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
        const nodeData = artefactNodesInfo
          .get(artefact_id)
          .get(curr_node_id)[4];

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
        let dnn_var = nodeOutputEdgeMap
          .get(artefact_id)
          .get(curr_node_id)[0][0];

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
        gen_code = gen_code.concat(`
def ${artefactName}(hp=None):\n\t`);
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
            s = `
  ${s} "${key}":${out_list[key]},`;
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
        gen_code = gen_code.concat(`
def ${artefactName}(params):`);
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
            s = `
  ${s} "${key}":${out_list[key]},`;
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
          imports = `
${imports}
${imp}`;
        }
      }
    }
    gen_code = `
${imports}
      
${gen_code}`;

    gen_code = gen_code.concat("\n\n");
    gen_code = gen_code.concat(`
${jsonObject.executedFileName}()`);
    return gen_code;
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
  
  return main(jsonObject);
}

function flattenNodeDataHyperparams(nodeData) {
  if (!nodeData.hyperparams) {
    return nodeData;
  }
  for (let param of nodeData.hyperparams) {
    nodeData[param.id] = param.value;
  }
  return nodeData;
}

function getNodeMetadata(node) {
  const nodeType = node.type.split("/")[0];
  const nodeSubtype = node.type.split("/")[1];
  if (nodeType === "FunctionNode") {
    if (nodeSubtype === "ArtefactImporter") {
      return {
        nodeType,
        nodeSubtype,
        sourceArtefact: node.data.name,
      };
    } else if (nodeSubtype === "RawData") {
      return {
        nodeType,
        nodeSubtype,
      };
    } else if (nodeSubtype === "ArrayInput") {
      return {
        nodeType,
        nodeSubtype,
      };
    } else if (nodeSubtype === "RecordArrayOutput") {
      return {
        nodeType,
        nodeSubtype,
      };
    } else {
      return {
        nodeType,
        nodeSubtype: node.data.elementID,
      };
    }
  } else if (nodeType === "Loop") {
    return {
      nodeType,
      nodeSubtype,
      innerArtefact: node.data.name,
    };
  } else if (nodeType === "Input") {
    return {
      nodeType,
    };
  } else if (nodeType === "Output") {
    return {
      nodeType,
    };
  } else if (nodeType === "PseudoNode") {
    return {
      nodeType,
      nodeSubtype,
    };
  } else if (nodeType === "Packer") {
    return {
      nodeData: {},
      nodeType,
      nodeSubtype,
    };
  } else if (nodeType === "Unpacker") {
    return {
      nodeData: {},
      nodeType,
      nodeSubtype,
    };
  } else if (nodeType === "Callback") {
    return {
      nodeType,
      nodeSubtype,
      sourceArtefact: node.data.name,
    };
  } else if (nodeType === "DataVariable") {
    return {
      nodeType,
      nodeSubtype,
    };
  } else {
    return {
      nodeType,
      nodeSubtype,
    };
  }
}

function getBackendFormatGraphData(fileContents, executedFileName) {
  const artefactArray = [];
  for (let artefact in fileContents) {
    artefactArray.push({
      artefactMetadata: {
        name: artefact,
        artefactType: fileContents[artefact].data.artefacttype,
      },
      nodes: fileContents[artefact].data.nodes.map((node) => {
        return {
          id: node.id,
          nodeData: flattenNodeDataHyperparams(node.data),
          ...getNodeMetadata(node),
        };
      }),
      edges: fileContents[artefact].data.edges.map((edge) => {
        const label = edge.label;
        let inLabel = null;
        let outLabel = null;

        if (label && typeof label === typeof "" && label.includes(":")) {
          inLabel = label.split(":")[0];
          outLabel = label.split(":")[1];
        } else {
          inLabel = outLabel = label;
        }

        return {
          sourceNodeID: edge.source,
          sourceNodeHandleID: edge.sourceHandle,
          targetNodeID: edge.target,
          targetNodeHandleID: edge.targetHandle,
          inLabel,
          outLabel,
        };
      }),
    });
  }
  return { artefactArray, executedFileName };
}

function download(filename, text) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function DCOptions({ activeFileType, activeFileIndex }) {
  const fsState = useSelector((store) => store.filesystem.fsState);
  if (!permissibleFileTypes[activeFileType]) return null;

  return (
    <div className="h-full w-max flex items-center">
      <PythonCodeGenButton
        onPythonCodeGen={() => {
          const executedFileName = activeFileIndex
            .split("/")
            .slice(-1)[0]
            .split(".")[0];

          const tmpSplitPath = activeFileIndex.split("/");
          const tmpFolderSplitPath = tmpSplitPath.slice(0, -1);
          const folderIndex = tmpFolderSplitPath.join("/");

          const filesToProcess = fsState[folderIndex].children;

          const fileContents = {};

          for (let file of filesToProcess) {
            fileContents[file.split("/").slice(-1)[0].split(".")[0]] =
              cloneDeep(fsState[file]);
          }

          const code = code_generator(
            getBackendFormatGraphData(fileContents, executedFileName)
          );
          download("dnn_code.txt", code);
        }}
      />
    </div>
  );
}

export default DCOptions;
