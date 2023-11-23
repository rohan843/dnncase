//const jsonObject = require("./reuse_test");
// const fs = require("fs");
// const artifact = require("./artifacts_test");

var str = "";
// Importing layer used
const layer_list = [];
const inpt_layers = [];

const node = new Map(); // layerid Vs imp infor
const node_inp = new Map(); // layerid Vs number of inputs
const node_out = new Map(); // layerid vs outputs
const nde_inpt_list = new Map(); // layerdid vs inputList
const nde_out_list = new Map(); // output list
const resuse_node = new Map();

const out_list = [];
// adjacency list
const adjList = new Map();
let global_cnt = 1;
let reuse_cnt=1;
function getCodeFrom(jsonObject) {
  for (const layer of jsonObject.nodes) {
    if (!layer_list.includes(layer.layerName)) {
      var imp = "";
      if (layer.type == "LayerNode" || layer.type == "ReuseNode") {
        imp = "from keras.layer import " + layer.layerName + "\n";
        str = str.concat(imp);
        layer_list.push(layer.layerName);
      }
      if (layer.type == "InputNode") {
        imp = "from keras.layer import Input" + "\n";
        str = str.concat(imp);
        layer_list.push(layer.layerName);
      }
    }
  }

  for (const layer of jsonObject.nodes) {
    if (layer.type == "InputNode") {
      inpt_layers.push(layer.id);
      node.set(layer.id, [layer.type, layer.hyperparams, layer.commentText]);
      node_inp.set(layer.id, 0);
      node_out.set(layer.id, 1);
      nde_inpt_list.set(layer.id, new Array(0));
      nde_out_list.set(layer.id, []);
    } else if (layer.type == "LayerNode") {
      node.set(layer.id, [
        layer.type,
        layer.layerName,
        layer.hyperparams,
        layer.commentText,
      ]);
      node_inp.set(layer.id, layer.inputHandles.length);
      node_out.set(layer.id, layer.outputHandles.length);
      nde_inpt_list.set(layer.id, new Array(layer.inputHandles.length));
      nde_out_list.set(layer.id, []);
    } else if (layer.type == "ReuseNode") {
      node.set(layer.id, [
        layer.type,
        layer.layerName,
        layer.hyperparams,
        layer.commentText,
      ]);
      node_inp.set(layer.id, layer.inputHandles.length);
      node_out.set(layer.id, layer.outputHandles.length);
      nde_inpt_list.set(layer.id, new Array(layer.inputHandles.length));
      nde_out_list.set(layer.id, []);
      
    } else if (layer.type == "PackerNode") {
      node.set(layer.id, [layer.type]);
      node_inp.set(layer.id, layer.inputHandles.length);
      node_out.set(layer.id, 1);
      nde_inpt_list.set(layer.id, new Array(layer.inputHandles.length));
      nde_out_list.set(layer.id, []);
    } else if (layer.type == "UnpackerNode") {
      node.set(layer.id, [layer.type]);
      node_inp.set(layer.id, 1);
      node_out.set(layer.id, layer.outputHandles.length);
      nde_inpt_list.set(layer.id, new Array(1));
      nde_out_list.set(layer.id, []);
    } else if (layer.type == "OutputNode") {
      node.set(layer.id, [layer.type, layer.commentText]);
      node_inp.set(layer.id, 1);
      node_out.set(layer.id, 0);
      nde_inpt_list.set(layer.id, new Array(1));
      nde_out_list.set(layer.id, []);
    }
  }
  console.log(inpt_layers);
  console.log(nde_inpt_list);

  for (const layer of jsonObject.edges) {
    const submap = new Map(); // for storing sourceHandles
    const target_list = [];
    target_list.push(layer.target);
    target_list.push(layer.targetHandle);
    //console.log(target_list)
    //console.log(layer.source)
    if (adjList.has(layer.source)) {
      const sourceMap = adjList.get(layer.source);
      if (sourceMap.has(layer.sourceHandle)) {
        sourceMap.get(layer.sourceHandle).push(target_list);
      } else {
        sourceMap.set(layer.sourceHandle, [target_list]);
      }
    } else {
      if(node.get(layer.source)[0]=="InputNode"){
        adjList.set(layer.source,target_list);
      }else {
      submap.set(layer.sourceHandle, []);
      submap.get(layer.sourceHandle).push(target_list);
      adjList.set(layer.source, submap);
      }
    }
    //console.log(adjList);
  }
  // console.log("start")
  console.log(adjList);

  const ipList = [];

  for (let i = 0; i < inpt_layers.length; i++) {
    var temp = temp_var();
    ipList.push(temp);
    //console.log(node.get(inpt_layers[i]));
    const hyperparam = printHyperparams(inpt_layers[i]);
    var code_gen = temp + "= Input" + "(" + hyperparam + ")\n";
    str = str.concat(code_gen);
    console.log(code_gen);
    //fs.write("code_generated.txt",code_gen);
    dfs(
      adjList.get(inpt_layers[i])[0], // target id
      adjList.get(inpt_layers[i])[1], // target handle
      temp
    );
    //console.log(adjList)
  }
  var op =
    "model_output(inputs= (" + ipList + ") , outputs= (" + out_list + "))\n";
  str = str.concat(op);
  return str;
}
console.log(getCodeFrom());
function dfs(node_id, node_idx, curr_inp) {
  //console.log("hello" + node_id);
  //console.log(node.get(node_id))
  if (node.get(node_id)[0] == "OutputNode") {
    //TODO: cretae output list
    out_list.push(curr_inp);
    return;
  }
  
  if (node.get(node_id)[0] == "ReuseNode") {
      var comment = "```" + node.get(node_id)[3] + "```\n";
      if(!resuse_node.has(node_id)){
        var reuse_temp = temp_var_reuse();
        resuse_node.set(node_id,reuse_temp);
        var hyperparam = printHyperparams(node_id)
        var code_gen = reuse_temp + "=" + node.get(node_id)[1] + "(" + hyperparam + ")\n";
        //console.log(code_gen);
        str =str.concat(code_gen);
      }
      // unpacker
      const unpacker_list=[];
      for(let i=1;i<=node_inp.get(node_id);i++){
        unpacker_list.push(temp_var());
      }
      var temp_str= unpacker_list + "=" + "(" + curr_inp + ")\n";
      //console.log(temp_str);
      str = str.concat(temp_str);

      // layer ouputs or packer inputs
      const packer_list=[];
      for(let i=1;i<=node_out.get(node_id);i++){
        packer_list.push(temp_var());
      }
      var temp_str1 = packer_list + "=" + resuse_node.get(node_id) + "(" + unpacker_list + ")\n";
      //console.log(temp_str1);
      str=str.concat(temp_str1);
   
      // packer output
      var temp = temp_var();

      var temp_str2 = temp + "=" + "("+ packer_list +")\n";
      //console.log(temp_str2);
      str = str.concat(temp_str2);
      
      adjList.get(node_id).get(node_idx)[0].push(temp);

      const target_arr = adjList.get(node_id).get(node_idx);
      //console.log(target_arr)
      //console.log(target_arr[0]);

      //console.log("Intermediate String :"  + str);
      dfs(target_arr[0][0],target_arr[0][1],target_arr[0][2]);

      return;
        

  }
  

  //adding tne input to respective node
  nde_inpt_list.get(node_id).splice(node_idx, 1, curr_inp);
  var cnt = node_inp.get(node_id) - 1;
  node_inp.set(node_id, cnt);

  // checking if all inpts are there for a particular layer
  if (cnt == 0) {
    const keyIterator = Array.from(adjList.get(node_id).keys());
    //console.log(keyIterator)
    for (let i = 0; i < keyIterator.length; i++) {
      const targetArray = adjList.get(node_id).get(keyIterator[i]);
      for (let i = 0; i < targetArray.length; i++) {
        var temp = temp_var();
        nde_out_list.get(node_id).push(temp);
        targetArray[i].push(temp);
      }
    }

    if (node.get(node_id)[0] == "LayerNode") {
      var comment = "```" + node.get(node_id)[3] + "```\n";
      str = str.concat(comment);
      var hyperparam = printHyperparams(node_id);
      
      var code_gen =
        nde_out_list.get(node_id) +
        "=" +
        node.get(node_id)[1] +
        "(" +
        hyperparam +
        ")" +
        "(" +
        nde_inpt_list.get(node_id) +
        ")\n";
      str = str.concat(code_gen);
    } else if (node.get(node_id)[0] == "PackerNode") {
      var code_gen =
        nde_out_list.get(node_id) +
        "=" +
        "(" +
        nde_inpt_list.get(node_id) +
        ")\n";
      str = str.concat(code_gen);
    } else if (node.get(node_id)[0] == "UnpackerNode") {
      nde_out_list.get(node_id) +
        "=" +
        "(" +
        nde_inpt_list.get(node_id) +
        ")\n";
      str = str.concat(code_gen);
    }

    //console.log(comment);
    var output_idx = adjList.get(node_id);
    for (const [key, value] of output_idx) {
      for (let i = 0; i < value.length; i++) {
        dfs(value[i][0], value[i][1], value[i][2]);
      }
    }
  } else {
    return;
  }
}

function temp_var() {
  var str = "t" + global_cnt;
  global_cnt++;

  return str;
}

function temp_var_reuse() {
  var str = "l" + reuse_cnt;
  reuse_cnt++;

  return str;
}

function printHyperparams(node_id) {
  let hyperparams = [];
  if (node.get(node_id)[0] == "InputNode") {
    hyperparams = node.get(node_id)[1];
  } else if (
    node.get(node_id)[0] == "LayerNode" ||
    node.get(node_id)[0] == "ReuseNode"
  ) {
    hyperparams = node.get(node_id)[2];
  }
  //console.log(hyperparams);
  var hypram = "";
  hyperparams.forEach((items) => {
    const id = items.id;
    let value = items.value;
    if(value!=null){
    if (value[0] >= "0" && value[0] <= "9") {
      value = parseInt(value);
    } else if (
      (value[0] >= "a" && value[0] <= "z") ||
      (value[0] >= "A" && value[0] <= "Z")
    ) {
      value = "'" + value + "'";
    }
    
    var abc = id + "=" + value + ",";
    hypram= hypram.concat(abc);
  }
  });

  hypram = hypram.slice(0, -1);
  
  return hypram;
}
