// const jsonObject = require("./graphJson");
const jsonObject={
    "artefacts": [
        {
    "artefactMetadata": {
        "name": "Compiled Classifier Model",
        "artefactType": "ModelArchitectureType"
    },
    "nodes": [
        {
            "id": "1",
            "nodeType": "FunctionNode",
            "nodeSubtype": "ClassiferModel",
            "sourceArtefact":"ClassifierModelArtefact"
        },
        {
            "id": "2",
            "nodeType": "FunctionNode",
            "nodeSubtype": "RawData"
        },
        {
            "id": "3",
            "nodeType": "FunctionNode",
            "nodeSubtype": "GetTunableFromList"
            
        },
        {
            "id": "4",
            "nodeType": "FunctionNode",
            "nodeSubtype": "RawData"
        },
        {
            "id": "5",
            "nodeType": "FunctionNode",
            "nodeSubtype": "RawData"            
        }
        ,
        {
            "id": "6",
            "nodeType": "FunctionNode",
            "nodeSubtype": "GenerateAdamOptimizer"
        },
        {
            "id": "7",
            "nodeType": "FunctionNode",
            "nodeSubtype": "CompileModel"
        },
        {
            "id": "8",
            "nodeType": "OutputNode",
            "name": "CompiledModel"            
        }
    ],
    "edges": [
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
},
{
    "artefactMetadata": {
        "name": "ClassifierModelArtefact",
        "artefactType": "ModelArchitectureType"
    },
    "nodes": [
        {
            "id": "1",
            "nodeType": "FunctionNode",
            "nodeSubtype": "GetTunableInt"
            
        },
        {
            "id": "2",
            "nodeType": "DataVariableNode",
            "nodeSubtype": "Input",
            "name": "hp_units"
        },
        {
            "id": "3",
            "nodeType": "FunctionNode",
            "nodeSubtype": "GetTunableInt"
            
        },
        {
            "id": "4",
            "nodeType": "DataVariableNode",
            "nodeSubtype": "Input",
            "name": "hp_layers"
        },
        {
            "id": "5",
            "nodeType": "FunctionNode",
            "nodeSubtype": "Input"
            
        }
        ,
        {
            "id": "6",
            "nodeType": "FunctionNode",
            "nodeSubtype": "Flatten"
        },
        {
            "id": "7",
            "nodeType": "DataVariableNode",
            "nodeSubtype": "Output",
            "name": "hp_units"
        },
        {
            "id": "8",
            "nodeType": "FunctionNode",
            "nodeSubtype": "CreateAndApplyDenseLayer"
            
        },
        {
            "id": "9",
            "nodeType": "DataVariableNode",
            "nodeSubtype": "Output",
            "name": "hp_units"
        },
        {
            "id": "10",
            "nodeType": "PackerNode",
            "nodeSubtype": "NamedPacker"
            
        },
        {
            "id": "11",
            "nodeType": "DataVariableNode",
            "nodeSubtype": "Output",
            "name": "hp_units"
        },
        {
            "id": "12",
            "nodeType": "Loop",
            "nodeSubtype": "RepeatLoopNode",
            "innerArtefact": "tmp1"
        },
        {
            "id": "13",
            "nodeType": "UnpackerNode",
            "nodeSubtype": "NamedUnpacker"
        },
        {
            "id": "14",
            "nodeType": "FunctionNode",
            "nodeSubtype": "CreateAndApplyDenseLayer"
        },
        {
            "id": "15",
            "nodeType": "FunctionNode",
            "nodeSubtype": "Output"
        }
    ],
    "edges": [
        {
            "label": "",
            "sourceNodeID": "1",
            "sourceNodeHandleID": "out",
            "targetNodeID": "2",
            "targetNodeHandleID": "in"
        },
        {
            "label": "",
            "sourceNodeID": "3",
            "sourceNodeHandleID": "out",
            "targetNodeID": "4",
            "targetNodeHandleID": "in"
        },
        {
            "label": "",
            "sourceNodeID": "5",
            "sourceNodeHandleID": "out",
            "targetNodeID": "6",
            "targetNodeHandleID": "in"
        },
        {
            "label": "",
            "sourceNodeID": "7",
            "sourceNodeHandleID": "out",
            "targetNodeID": "8",
            "targetNodeHandleID": "in"
        },
        {
            "label": "",
            "sourceNodeID": "6",
            "sourceNodeHandleID": "out",
            "targetNodeID": "8",
            "targetNodeHandleID": "in"
        },
        {
            "label": "hp_units",
            "sourceNodeID": "9",
            "sourceNodeHandleID": "out",
            "targetNodeID": "10",
            "targetNodeHandleID": "in"
        },
        {
            "label": "payload",
            "sourceNodeID": "8",
            "sourceNodeHandleID": "out",
            "targetNodeID": "10",
            "targetNodeHandleID": "in"
        },
        {
            "label": "",
            "sourceNodeID": "10",
            "sourceNodeHandleID": "out",
            "targetNodeID": "12",
            "targetNodeHandleID": "in"
        },
        {
            "label": "",
            "sourceNodeID": "11",
            "sourceNodeHandleID": "out",
            "targetNodeID": "12",
            "targetNodeHandleID": "iterationCount"
        },
        {
            "label": "",
            "sourceNodeID": "12",
            "sourceNodeHandleID": "out",
            "targetNodeID": "13",
            "targetNodeHandleID": "in"
        },
        {
            "label": "payload",
            "sourceNodeID": "13",
            "sourceNodeHandleID": "out",
            "targetNodeID": "14",
            "targetNodeHandleID": "in"
        },
        {
            "label": "",
            "sourceNodeID": "14",
            "sourceNodeHandleID": "out",
            "targetNodeID": "15",
            "targetNodeHandleID": "in"
        }
    ]
},{
    "artefactMetadata": {
        "name": "tmp1",
        "artefactType": "ArtefactType"
    },
    "nodes": [
        {
            "id": "1",
            "nodeType": "InputNode",
            "nodeSubtype": "hp_units"
            
        }, 
        {
            "id": "2",
            "nodeType": "InputNode",
            "name": "payload"
            
        },
         {
            "id": "3",
            "nodeType": "FunctionNode",
            "nodeSubtype": "CreateAndApplyDenseLayer"
            
        },
        {
            "id": "4",
            "nodeType": "OutputNode",
            "name": "Payload"
            
        }
    ],
    "edges": [
        {
            "label": "",
            "sourceNodeID": "1",
            "sourceNodeHandleID": "out",
            "targetNodeID": "3",
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
            "targetNodeID": "4",
            "targetNodeHandleID": "in"
        }
    ]
}

   ]

};

function generateCode(jsonObject) {
    
    // mapping is done to give id to each artefact
    const artefactIdMapping = new Map();
    artefactMapping(jsonObject,artefactIdMapping); 

    console.log(artefactIdMapping);
    //Creating a DAG for the artefacts

    const graph = new Map();
    createGraph(jsonObject,artefactIdMapping,graph);

   console.log(graph);

   // Now we start topological sorting

   const visited =[]
   for(let i=0;i<graph.size;i++){
    visited.push(false);
   }

   const stack = [];
   
   for(const key of graph.keys()){
    if(!visited[key])
        dfs(key,graph,stack,visited);
   }

   const artefactOrder=[];
   while(stack.length>0){
    artefactOrder.push(stack.pop());
   }

   console.log(artefactOrder);

}

function dfs(node, graph, stack,visited){
    visited[node] = true;
    
    if(graph.has(node)){
    for(const neigh of graph.get(node)){
        if(!visited[neigh]){
            dfs(neigh,graph,stack,visited);
        }
    }
}

    stack.push(node);
}

function artefactMapping(jsonObject,artefactIdMapping){
    let id =0;
   
    for(const artefact of jsonObject.artefacts){
          
        if(!artefactIdMapping.has(artefact.artefactMetadata.name)){
            artefactIdMapping.set(artefact.artefactMetadata.name,id);
            id++;
        }
    }
}

function createGraph(jsonObject,artefactIdMapping,graph){

    for(const artefact of jsonObject.artefacts){

        for(const node of artefact.nodes){
            if("sourceArtefact" in node || "innerArtefact" in node){
                let nodeA = artefactIdMapping.get(artefact.artefactMetadata.name);
                let nodeB;
                if("sourceArtefact" in node){
                nodeB = artefactIdMapping.get(node.sourceArtefact);
                 }else {
                nodeB = artefactIdMapping.get(node.innerArtefact);
               
                }
               
                if(graph.has(nodeB)){
                    graph.get(nodeB).push(nodeA);
                }else {
                    graph.set(nodeB,[nodeA]);
                }
            }
        }
    }

}

generateCode(jsonObject);

