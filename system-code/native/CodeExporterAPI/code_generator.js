const jsonObject = require("./grahJson");
const fs = require("fs");
const artifact = require("./artifacts_test");
fs.open("code_generated.txt", "w", (err, file) => {
  if (err) throw err;
  console.log(file);
});
// Importing layer used
layer_list = [];
for (const layer of jsonObject.nodes) {
  if (!layer_list.includes(layer.data.artefactID)) {
    var imp = "from keras.layer import " + layer.data.artefactID + "\n";
    fs.appendFileSync("code_generated.txt",imp, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      }
    });
    console.log(imp);
    layer_list.push(layer.data.artefactID);
  }
}

// old code

const inpt_layers = [];

const node = new Map();
const node_inp = new Map();
const node_out = new Map();
const nde_inpt_list = new Map();
const nde_out_list = new Map();
for (const layer of jsonObject.nodes) {
  if (layer.type == "InputNode") {
    inpt_layers.push(layer.id);
  }
  node.set(layer.id, [
    layer.type,
    layer.data.artefactID,
    layer.data.hyperparams,
    layer.data.commentText,
    layer.data.reusable,
    layer.data.reuseCount,
  ]);
  node_inp.set(layer.id, layer.data.inputHandles.length);
  node_out.set(layer.id, layer.data.outputHandles.length);
  nde_inpt_list.set(layer.id, new Array(layer.data.inputHandles.length));
  nde_out_list.set(layer.id, []);
}
console.log(inpt_layers);
console.log(nde_inpt_list);

// adjacency list
const adjList = new Map();

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
    submap.set(layer.sourceHandle, []);
    submap.get(layer.sourceHandle).push(target_list);
    adjList.set(layer.source, submap);
  }
  //console.log(adjList);
}
// console.log("start")
console.log(adjList);

let global_cnt = 1;
const ipList =[]
for (let i = 0; i < inpt_layers.length; i++) {
  var temp = temp_var();
  ipList.push(temp);
  //console.log(node.get(inpt_layers[i]));
  var code_gen = temp + "=" + node.get(inpt_layers[i])[1] + "()\n";
  fs.appendFileSync("code_generated.txt",code_gen, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    }
  });
  console.log(code_gen);
  //fs.write("code_generated.txt",code_gen);
  dfs(
    adjList.get(inpt_layers[i]).get("0")[0][0], // target id
    adjList.get(inpt_layers[i]).get("0")[0][1], // target handle
    temp
  );
  //console.log(adjList)
}

function dfs(node_id, node_idx, curr_inp) {
  //console.log(node_id)
  if (node.get(node_id)[0] == "OutputNode") {
    code_gen = "Model(" + "inputs="+ ipList +", outputs=" + curr_inp + ")\n";
    fs.appendFileSync("code_generated.txt",code_gen, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      }
    });
    console.log(code_gen);
    return;
  }
  /**
  if (node.get(node_id) == "reuse") {
    nde_inpt_list.get(node_id).shift()
    nde_inpt_list.get(node_id).splice(node_idx,0, curr_inp); // ** may give error **
    var cnt = node_inp.get(node_id) - 1;
    node_inp.set(node_id, cnt);
    //console.log(nde_inpt_list.get(node_id));
    var temp = temp_var();
    //nde_out_list.get(node_id).push(temp)
    adjList.get(node_id).get(node_idx).push(temp);
    var code_gen =
      temp + "=" + node.get(node_id) + "(" + nde_inpt_list.get(node_id) + ")";
    console.log(code_gen);

    dfs(
      adjList.get(node_id).get(node_idx)[0],
      adjList.get(node_id).get(node_idx)[1],
      adjList.get(node_id).get(node_idx)[2]
    );
    return;
  }
  */
  //adding tne input to respective node
  nde_inpt_list.get(node_id).splice(node_idx, 1, curr_inp); // ** may give error **
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
    var comment = "/**" + node.get(node_id)[3] + "*/\n"
    fs.appendFileSync("code_generated.txt",comment, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      }
    });
    console.log(comment);
    var code_gen =
      nde_out_list.get(node_id) +
      "=" +
      node.get(node_id)[1] +
      "(" +
      node.get(node_id)[2]+
      ")" +
      "(" +
      nde_inpt_list.get(node_id) +
      ")\n";
      fs.appendFileSync("code_generated.txt",code_gen, (err) => {
        if (err) {
          console.error('Error writing to file:', err);
        }
      });
    console.log(code_gen);

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
