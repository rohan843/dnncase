//pushing all input layers to a queue

//const jsonString = '{"layers":[{"id":1,"type":"Graphinput"},{"id":2,"type":"dense"}]}';
const response = await fetch("/api/names");
const names = await response.json();

const jsonObject = {
  nodes: [
    {
      id: "10",
      type: "graphinput",
      inputCount: 0,
      outputCount: 1,
    },
    {
      id: "11",
      type: "graphinput",
      inputCount: 0,
      outputCount: 1,
    },
    {
      id: "12",
      type: "layer",
      inputCount: 2,
      outputCount: 2,
    },
    {
      id: "13",
      type: "repeater",
      inputCount: 1,
      outputCount: 2,
    },
    {
      id: "14",
      type: "layer",
      inputCount: 2,
      outputCount: 2,
    },
    {
      id: "15",
      type: "reuse",
      inputCount: 1,
      outputCount: 1,
    },

    {
      id: "16",
      type: "graphoutput",
      inputCount: 1,
      outputCount: 0,
    },
    {
      id: "17",
      type: "graphoutput",
      inputCount: 1,
      outputCount: 0,
    },
    {
      id: "18",
      type: "graphoutput",
      inputCount: 1,
      outputCount: 0,
    },
  ],
  edges: [
    {
      sourceNode: "10",
      sourceNodeHandle: 0,
      targetNode: "12",
      targetNodeHandle: 0,
    },
    {
      sourceNode: "11",
      sourceNodeHandle: 0,
      targetNode: "12",
      targetNodeHandle: 1,
    },
    {
      sourceNode: "12",
      sourceNodeHandle: 0,
      targetNode: "13",
      targetNodeHandle: 0,
    },
    {
      sourceNode: "12",
      sourceNodeHandle: 1,
      targetNode: "14",
      targetNodeHandle: 0,
    },
    {
      sourceNode: "13",
      sourceNodeHandle: 0,
      targetNode: "15",
      targetNodeHandle: 0,
    },
    {
      sourceNode: "13",
      sourceNodeHandle: 1,
      targetNode: "14",
      targetNodeHandle: 1,
    },
    {
      sourceNode: "14",
      sourceNodeHandle: 0,
      targetNode: "15",
      targetNodeHandle: 1,
    },
    {
      sourceNode: "14",
      sourceNodeHandle: 1,
      targetNode: "18",
      targetNodeHandle: 0,
    },
    {
      sourceNode: "15",
      sourceNodeHandle: 0,
      targetNode: "16",
      targetNodeHandle: 0,
    },
    {
      sourceNode: "15",
      sourceNodeHandle: 1,
      targetNode: "17",
      targetNodeHandle: 0,
    },
  ],
};

// pushing input layer in a list
const inpt_layers = [];

const node = new Map();
const node_inp = new Map();
const node_out = new Map();
const nde_inpt_list = new Map();
const nde_out_list = new Map();
for (const layer of jsonObject.nodes) {
  if (layer.type == "graphinput") {
    inpt_layers.push(layer.id);
  }
  node.set(layer.id, layer.type);
  node_inp.set(layer.id, layer.inputCount);
  node_out.set(layer.id, layer.outputCount);
  nde_inpt_list.set(layer.id, new Array(layer.inputCount));
  nde_out_list.set(layer.id, []);
}
// console.log(inpt_layers)
console.log(nde_inpt_list);

// adjacency list
const adjList = new Map();

for (const layer of jsonObject.edges) {
  const submap = new Map();
  const target_list = [];
  target_list.push(layer.targetNode);
  target_list.push(layer.targetNodeHandle);
  //console.log(target_list)
  if (adjList.has(layer.sourceNode)) {
    adjList.get(layer.sourceNode).set(layer.sourceNodeHandle, target_list);
  } else {
    submap.set(layer.sourceNodeHandle, target_list);
    adjList.set(layer.sourceNode, submap);
  }
}
// console.log("start")
console.log(adjList);

let global_cnt = 1;

for (let i = 0; i < inpt_layers.length; i++) {
  var temp = temp_var();
  var code_gen = temp + "=" + node.get(inpt_layers[i]) + "()";
  console.log(code_gen);
  dfs(
    adjList.get(inpt_layers[i]).get(0)[0],
    adjList.get(inpt_layers[i]).get(0)[1],
    temp
  );
  //console.log(adjList)
}

function dfs(node_id, node_idx, curr_inp) {
  if (node.get(node_id) == "graphoutput") {
    code_gen = "model_output(" + curr_inp + ")";
    console.log(code_gen);
    return;
  }
  if (node.get(node_id) == "reuse") {
    nde_inpt_list.get(node_id).shift();
    nde_inpt_list.get(node_id).splice(node_idx, 0, curr_inp); // ** may give error **
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
  //adding tne input to respective node
  nde_inpt_list.get(node_id).splice(node_idx, 1, curr_inp); // ** may give error **
  var cnt = node_inp.get(node_id) - 1;
  node_inp.set(node_id, cnt);

  // checking if all inpts are there for a particular layer
  if (cnt == 0) {
    const keyIterator = Array.from(adjList.get(node_id).keys());
    //console.log(keyIterator)
    for (let i = 0; i < keyIterator.length; i++) {
      if (node.get(node_id) == "repeater") {
        nde_out_list.get(node_id).push(curr_inp);
        adjList.get(node_id).get(keyIterator[i]).push(curr_inp);
      } else {
        var temp = temp_var();
        nde_out_list.get(node_id).push(temp);
        adjList.get(node_id).get(keyIterator[i]).push(temp);
      }
    }

    var code_gen =
      nde_out_list.get(node_id) +
      "=" +
      node.get(node_id) +
      "(" +
      nde_inpt_list.get(node_id) +
      ")";
    console.log(code_gen);

    var output_idx = adjList.get(node_id);
    for (const [key, value] of output_idx) {
      dfs(value[0], value[1], value[2]);
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
