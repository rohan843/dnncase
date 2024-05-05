else if (nodeType === "PackerNode") {
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