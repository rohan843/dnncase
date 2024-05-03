// const jsonObject = require("./graphJson");
import {GenerateAdamOptimizer,CreateAndApplyDenseLayer,Flatten,Input,GetTunableInt,GetTunableFromList,RawData,gradientTape,zeros_like,ones_like,add,subtract,divide,BinaryCrossentropy,batch,shuffle,reshape,evaluateModel,getBestModelTuning,loadKerasDataset,CompileModel} from './helperFunction.mjs';
const jsonObject={
    "artefacts": [
        {
    "artefactMetadata": {
        "name": "Constants",
        "artefactType": "ArtefactType"
    },
    "nodes": [
        {
            "id": "1",
            "nodeType": "FunctionNode",
            "nodeSubtype": "RawData"
            
        }, 
        {
            "id": "2",
            "nodeType": "FunctionNode",
            "nodeSubtype": "RawData"
            
        }, 
        {
            "id": "3",
            "nodeType": "FunctionNode",
            "nodeSubtype": "RawData"
            
        }, 
       
        {
            "id": "4",
            "nodeType": "OutputNode",
            "name": "Batch_Size"
            
        },
        {
            "id": "5",
            "nodeType": "OutputNode",
            "name": "EPOCHS"
            
        },
        {
            "id": "6",
            "nodeType": "OutputNode",
            "name": "noise_dim"
            
        },

    ],
    "edges": [
        {
            "label": "",
            "sourceNodeID": "1",
            "sourceNodeHandleID": "out",
            "targetNodeID": "4",
            "targetNodeHandleID": "in"
        },
        {
            "label": "",
            "sourceNodeID": "2",
            "sourceNodeHandleID": "out",
            "targetNodeID": "5",
            "targetNodeHandleID": "in"
        },
        {
            "label": "",
            "sourceNodeID": "3",
            "sourceNodeHandleID": "out",
            "targetNodeID": "6",
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
            "return": `Dense(${params["hp_units"]})(${params["payload"]})`
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
            "return":  [1,2,3,4]
    
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
let gen_code="";


function generateCode(jsonObject) {
    
    // mapping is done to give id to each artefact
    const artefactIdMapping = new Map();
    const idToArtefact = new Map()
    const artefactNodesInfo = new Map(); // artefactId -> nodeId -> [nodeType,nodeSubtype,source/innerArtefact,name,nodeData] ... if codn false then their name is not in array
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
    // console.log(artefactOutDegreeCnt)
    //Creating a DAG for the artefacts

    const graph = new Map();
    createGraph(jsonObject,artefactIdMapping,graph);

  // console.log(graph);

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

   const artefactOrder=[0];
   while(stack.length>0){
    artefactOrder.push(stack.pop());
   }
   //console.log(artefactOrder)
   for(let i=0;i<artefactOrder.length;i++){
     let out_list={}
      for(const [key,value] of nodeInputEdgeMap.get(artefactOrder[i])){
         if(value.length===0){
            //outdegreeCnt=artefactOutDegreeCnt.get(artefactOrder[i])
            code_gen_dfs(artefactOrder[i],key,"",idToArtefact,artefactNodesInfo,nodeOutputEdgeMap,nodeInputEdgeMap,nodeInputList,5,out_list)
           
        }
    }
    //console.log(out_list)
     if(Object.keys(out_list).length>0){
       // console.log("outlist")
       let s =""
        for(const key in out_list){
            s= s+ key + ":" + out_list[key] +",\n"
        }

        
        gen_code=gen_code.concat(`return{\n${s}}`)
     }
   }
   
   console.log(gen_code)
   //console.log(artefactOrder);



}

function code_gen_dfs(artefact_id,curr_node_id,edge_variable,idToArtefact,artefactNodesInfo,nodeOutputEdgeMap,nodeInputEdgeMap,nodeInputList,outDegCnt,out_list){
    //  if(outDegCnt==0){
    //     return;
    //  }
     
     if(nodeInputEdgeMap.get(artefact_id).get(curr_node_id).length>0){
        nodeInputList.get(artefact_id).get(curr_node_id).push(edge_variable)
     }
     if(nodeInputEdgeMap.get(artefact_id).get(curr_node_id).length === nodeInputList.get(artefact_id).get(curr_node_id).length){
        // generate code
       
        let nodeType = artefactNodesInfo.get(artefact_id).get(curr_node_id)[0]
        let nodeSubtype = artefactNodesInfo.get(artefact_id).get(curr_node_id)[1]

        if(nodeType==="FunctionNode"){
            let nodeData = artefactNodesInfo.get(artefact_id).get(curr_node_id)[4]
            let funcCode = codeGenFuncs[nodeSubtype](nodeData).return
            let dnn_var = dnn_temp_var_id()
            let str =  `${dnn_var} = ${funcCode}\n`
            
            gen_code = gen_code.concat("" + str)
           
            const list =nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)
            if(list.length>0){

                for(let i=0;i<list.length;i++){
                    //console.log(typeof list[i][3])
                    if(list[i][3].length===0){
                        let s = list[i][0] + "=" + dnn_var+"\n"
                        
                        gen_code= gen_code.concat(s) 
                       
                        
                    }else{
                        let s = list[i][0] + "=" + dnn_var+"["+list[i][3]+"]\n"
                        
                        gen_code = gen_code.concat(s) 
                    }

                    code_gen_dfs(artefact_id,list[i][1],list[i][0],idToArtefact,artefactNodesInfo,nodeOutputEdgeMap,nodeInputEdgeMap,nodeInputList,outDegCnt,out_list)
                }


            }else{
               // console.log("hello1")
                outDegCnt--;
                return
            }
        


        }else if(nodeType=="InputNode"){
            let name = artefactNodesInfo.get(artefact_id).get(curr_node_id)[3]
            let dnn_var = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0][0]
            const nxtNodeId = nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)[0][1]
            //console.log(nxtNodeId)
            //console.log(artefactNodesInfo.get(artefact_id).get(nxtNodeId)[4])
            artefactNodesInfo.get(artefact_id).get(nxtNodeId)[4][`${name}`] = dnn_var
           
            let str = dnn_var + `= parmas["${name}"]`
            
            gen_code = gen_code.concat(str+"\n")
            
            const list =nodeOutputEdgeMap.get(artefact_id).get(curr_node_id)
            if(list.length>0){

                for(let i=0;i<list.length;i++){
                    code_gen_dfs(artefact_id,list[i][1],list[i][0],idToArtefact,artefactNodesInfo,nodeOutputEdgeMap,nodeInputEdgeMap,nodeInputList,outDegCnt,out_list)
                }


            }else{
                outDegCnt--;
                return
            }


            
        } else if(nodeType="OutputNode"){

            let name = artefactNodesInfo.get(artefact_id).get(curr_node_id)[3]
            
            out_list[`${name}`] = edge_variable
            

            return;

        }

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

