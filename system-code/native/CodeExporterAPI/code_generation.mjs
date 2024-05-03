// const jsonObject = require("./graphJson");
import {GenerateAdamOptimizer,CreateAndApplyDenseLayer,Flatten,Input,GetTunableInt,GetTunableFromList,RawData,gradientTape,zeros_like,ones_like,add,subtract,divide,BinaryCrossentropy,batch,shuffle,reshape,evaluateModel,getBestModelTuning,loadKerasDataset,CompileModel} from './helperFunction.mjs';
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
            "sourceNodeID": "5",
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
            "name": "hp_units"
            
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

const codeGenFuncs = {
    GenerateAdamOptimizer : function GenerateAdamOptimizer(params){

        return{
            "imports": [],
            "execution": "",
            "return": `keras.optimizers.Adam(learning_rate = ${params["learning_rate"]})` 
        }
    
    }
    
    ,CreateAndApplyDenseLayer:function CreateAndApplyDenseLayer(params){

        return{
            "imports": ["from keras.layers import Dense"],
            "execution": "",
            "return": `Dense(${params["units"]})(${params["payload"]})`
        }
    
    }
    ,Input:function Input(params){
        return{
            "imports": ["from keras.layers import Input"],
            "execution": "",
            "return": `Input(shape = ${params["shape"]})`
        }
    },
    
    Flatten : function Flatten(params){
    
        return{
            "imports": ["from keras.layers import Flatten"],
            "execution": "",
            "return": "Flatten()"
        }
    
    },
    GetTunableInt:function GetTunableInt(params){

        return{
            "imports": [],
            "execution": "",
            "return": `hp.Choice('learning_rate', "values= " ${params["value"]})`
        }
    }
    ,GetTunableFromList:function GetTunableFromList(params){

        return{
            "imports": [],
            "execution": "",
            "return": `hp.Int(value=${params["val"]})`
        }
    }
    ,RawData:function RawData(params){

        return{
            "imports": [],
            "execution": "",
            "return":  params["inp"]
    
        }
    }
    
    ,gradientTape:function gradientTape(params){
        return{
            "imports": [],
            "execution": "",
            "return": "tf.GradientTape()"
        }
    
    }
    
    ,zeros_like:function zeros_like(params) {

        return{
            "imports": [],
            "execution": "",
            "return": `tf.zeros_like(${params["value"]})`
        }
    
    
    }
    
    ,ones_like:function ones_like(params) {

        return{
            "imports": [],
            "execution": "",
            "return": `tf.ones_like(${params["value"]})`
        }
    }
    ,add:function add(params) {

        return{
            "imports": [],
            "execution": "",
            "return": `tf.add(" ${params["x"]}"," ${params["y"]} ")`
        }
    
    
    }
    ,subtract:function subtract(params) {

        return{
            "imports": [],
            "execution": "",
            "return": `tf.subtract(" ${params["x"]}"," ${params["y"]} ")`
        }
    
    
    }
    ,divide:function divide(params) {

        return{
            "imports": [],
            "execution": "",
            "return": `tf.divide(" ${params["x"]}"," ${params["y"]} ")`
        }
    
    
    }
    ,BinaryCrossentropy:function BinaryCrossentropy(params) {

        return{
            "imports": [],
            "execution": "",
            "return": "tf.keras.losses.BinaryCrossentropy(from_logits=True)"
        }
    
    }
    
    ,batch:function batch(params) {

        return{
            "imports": [],
            "execution": "",
            "return": `.batch(${params["batch"]})`
        }
    
    
    }
    ,shuffle:function shuffle(params) {

        return{
            "imports": [],
            "execution": "",
            "return": ".shuffle()"
        }
    
    
    }
    ,reshape:function reshape(params) {

        return{
            "imports": [],
            "execution": "",
            "return": `layers.reshape(${params["shape"]})`
        }
    
    
    }
    ,evaluateModel:function evaluateModel(params) {

        return{
            "imports": [],
            "execution": "",
            "return": ""
        }
    
    
    }
    
    ,getBestModelTuning:function getBestModelTuning(params) {

        return{
            "imports": [],
            "execution": "",
            "return": ""
        }
    
    
    }
    ,loadKerasDataset:function loadKerasDataset(params) {

        return{
            "imports": [],
            "execution": "mnist = keras.dataset.mnist",
            "return": "mnist.load_data()"
        }
    
    
    }
    
    ,CompileModel : function CompileModel(params) {

        return{
            "imports": [],
            "execution": `${params["model"]}.compile(optimizer = ${params["optimizers"]} , loss = ${params["loss"]}, metrics =  ${params["metrics"]})`,
            "return": params["model"] 
        }
    
    
    }

}
let dnn_temp_id =0;
let gen_code=""


function generateCode(jsonObject) {
    
    // mapping is done to give id to each artefact
    const artefactIdMapping = new Map();
    const idToArtefact = new Map()
    const artefactNodesInfo = new Map(); // artefactId -> nodeId -> [nodeType,nodeSubtype,source/innerArtefact,name] ... if codn false then their name is not in array
    const nodeOutputEdgeMap = new Map()
    const nodeInputEdgeMap = new Map();
    const nodeInputList = new Map();
    const artefactOutDegreeCnt = new Map();
    artefactMapping(jsonObject,artefactIdMapping,idToArtefact); // artefact id mapping
    artefactNodesMapping(jsonObject,artefactIdMapping,artefactNodesInfo) // artefact nodes mapping
    nodeOutInEdgeMapping(jsonObject,nodeOutputEdgeMap,artefactIdMapping,nodeInputEdgeMap,nodeInputList) // artefact-> nodeId->[dnn_temp_id,targetNodeID,targetNodeHandleID,label]
    outdegreeCnt(nodeOutputEdgeMap,artefactOutDegreeCnt)
    // console.log(artefactIdMapping)
    // console.log(nodeOutputEdgeMap)
    // console.log(nodeInputEdgeMap)
    console.log(artefactOutDegreeCnt)
    //Creating a DAG for the artefacts

    const graph = new Map();
    createGraph(jsonObject,artefactIdMapping,graph);

   //console.log(graph);

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

   //console.log(artefactOrder);



}

function code_gen_dfs(artefact_id,curr_node_id,edge_variable,idToArtefact,artefactNodesInfo,nodeOutputEdgeMap,nodeInputEdgeMap,nodeInputList,outDegCnt){
     if(outDegCnt==0){
        return;
     }
     if(nodeInputEdgeMap.get(curr_node_id).length>0){
        nodeInputList.get(artefact_id).get(curr_node_id).push(edge_variable)
     }
     if(nodeInputEdgeMap.get(curr_node_id).length === nodeInputList.get(artefact_id).get(curr_node_id)){
        // generate code

        let nodeType = artefactNodesInfo.get(artefact_id).get(curr_node_id)[0]
        let nodeSubtype = artefactNodesInfo.get(artefact_id).get(curr_node_id)[1]

        if(nodeType==="FunctionNode"){
            let nodeData = artefactNodesInfo.get(artefact_id).get(curr_node_id)[-1]
            let funcCode = codeGenFuncs[nodeSubtype](nodeData).return
            let dnn_var = dnn_temp_var_id()
            let str =  `${dnn_var} = ${funcCode}`

            gen_code.append(str +"\n")

            const list =nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)
            if(list.length>0){

                for(const i=0;i<list.length;i++){
                    if(list[i][-1] != undefined){
                        let s = list[i][0] + "=" + dnn_var+"["+list[i][-1]+"]"
                        gen_code.append(s+ "\n") 
                        
                    }else{
                        let s = list[i][0] + "=" + dnn_var
                        gen_code.append(s+ "\n") 
                    }
                    dfs(artefact_id,list[i][1],list[i][0],idToArtefact,artefactNodesInfo,nodeOutputEdgeMap,nodeInputEdgeMap,nodeInputList,outDegCnt)
                }


            }else{
                outDegCnt--;
                return
            }
        


        }else if(nodeType=="InputNode"){
            let name = artefactNodesInfo.get(artefact_id).get(curr_node_id)[3]
            let dnn_var = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0][0]
            const nxtNodeId = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0][1]
            artefactNodesInfo.get(artefact_id).get(nxtNodeId)[-1][`${name}`] = dnn_var
           
            let str = dnn_var + `= parmas[${name}]`
            gen_code.append(str+"\n")
            
            const list =nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)
            if(list.length>0){

                for(const i=0;i<list.length;i++){
                    dfs(artefact_id,list[i][1],list[i][0],idToArtefact,artefactNodesInfo,nodeOutputEdgeMap,nodeInputEdgeMap,nodeInputList,outDegCnt)
                }


            }else{
                outDegCnt--;
                return
            }


            
        }


        //check if curr not output edge is zero

        // call dfs.
     }else {
        return;
     }






}

function outdegreeCnt(nodeOutputEdgeMap,artefactOutDegreeCnt){

    for( const [key,values] of nodeOutputEdgeMap){
        let cnt=0;
        for(const [subkey,subvalues] of values){
            if(subvalues.length===0){
                cnt++;
            }
        }

        artefactOutDegreeCnt.set(key,cnt);

    }
}
function dnn_temp_var_id(){
    dnn_temp_id++;
    return  "dnnt_var"+ dnn_temp_id
}

function nodeOutInEdgeMapping(jsonObject,nodeOutputEdgeMap,artefactIdMapping,nodeInputEdgeMap,nodeInputList){



    for(const artefact of jsonObject.artefacts){
        let id = artefactIdMapping.get(artefact.artefactMetadata.name);
        nodeOutputEdgeMap.set(id,new Map());
        nodeInputEdgeMap.set(id,new Map());
        nodeInputList.set(id,new Map())
        for(const node of artefact.nodes){
            nodeOutputEdgeMap.get(id).set(node.id,[]);
            nodeInputEdgeMap.get(id).set(node.id,[])
            nodeInputList.get(id).set(node.id,[])
            
        }
        for(const edge of artefact.edges){
           
            if(nodeOutputEdgeMap.get(id).has(edge.sourceNodeID)){
                nodeOutputEdgeMap.get(id).get(edge.sourceNodeID).push([dnn_temp_var_id(),edge.targetNodeID,edge.targetNodeHandleID,edge.label])
            }else {
                nodeOutputEdgeMap.get(id).set(edge.sourceNodeID,[[dnn_temp_var_id(),edge.targetNodeID,edge.targetNodeHandleID,edge.label]])
            }

             nodeInputEdgeMap.get(id).get(edge.targetNodeID).push(edge.targetNodeHandleID)
            


        }
    }
}
function artefactNodesMapping(jsonObject,artefactIdMapping,artefactNodesInfo){

    for(const artefact of jsonObject.artefacts){
        let id = artefactIdMapping.get(artefact.artefactMetadata.name);
        artefactNodesInfo.set(id,new Map())
        for(const node of artefact.nodes){
            if("sourceArtefact" in node){
            artefactNodesInfo.get(id).set(node.id,[node.nodeType,node.nodeSubtype,node.sourceArtefact,node.name,{}])
            }else {
                artefactNodesInfo.get(id).set(node.id,[node.nodeType,node.nodeSubtype,node.innerArtefact,node.name,{}])
            }
            
        }
    }
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

function artefactMapping(jsonObject,artefactIdMapping,idToArtefact){
    let id =0;
   
    for(const artefact of jsonObject.artefacts){
          
        if(!artefactIdMapping.has(artefact.artefactMetadata.name)){
            artefactIdMapping.set(artefact.artefactMetadata.name,id);
            idToArtefact.set(id,[artefact.artefactMetadata.name,artefact.artefactMetadata.artefactType])
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

