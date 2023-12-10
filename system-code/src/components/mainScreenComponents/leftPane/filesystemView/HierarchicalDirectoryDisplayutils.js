import { keys } from "lodash";

// Marks an entire subtree for retention.
function retainCompleteSubtree(rootIndex, fsState, nodesToRetain) {
  nodesToRetain[rootIndex] = true;
  for (let childIndex of fsState[rootIndex].children) {
    retainCompleteSubtree(childIndex, fsState, nodesToRetain);
  }
}

// Traverses nodes recursively (depth-first) and marks any artefact nodes / their
// ancestors / their descendants for retention. Returns true if the current root
// (rootIndex) has any artefact nodes in its subtree.
function populateNodesToRetain(rootIndex, fsState, nodesToRetain) {
  // If the current root itself is an artefact, retain its complete subtree.
  if (fsState[rootIndex].data.artefact) {
    retainCompleteSubtree(rootIndex, fsState, nodesToRetain);
    return true;
  } else if (fsState[rootIndex].data.folder) {
    let rootHasAnyArtefactDescendant = false;
    for (let childIndex of fsState[rootIndex].children) {
      const childHasAnyArtefactDescendant = populateNodesToRetain(
        childIndex,
        fsState,
        nodesToRetain
      );
      rootHasAnyArtefactDescendant =
        rootHasAnyArtefactDescendant || childHasAnyArtefactDescendant;
    }
    if (rootHasAnyArtefactDescendant) {
      nodesToRetain[rootIndex] = true;
    }
    return rootHasAnyArtefactDescendant;
  }
}

// Takes as input the filesystem state (fsState) and an identifier for the
// root directory (rootIndex). Returns a modified fsState with only artefact
// nodes, their descendants and ancestors.
function getOnlyArtefactDirs(fsState, rootIndex) {
  const nodesToRetain = {};
  populateNodesToRetain(rootIndex, fsState, nodesToRetain);
  const resFSState = {};
  for (let nodeIndex of keys(nodesToRetain)) {
    resFSState[nodeIndex] = fsState[nodeIndex];
    resFSState[nodeIndex].children = resFSState[nodeIndex].children.filter(
      (nodeIndex) => !!nodesToRetain[nodeIndex]
    );
  }
  return resFSState;
}

export { getOnlyArtefactDirs };
