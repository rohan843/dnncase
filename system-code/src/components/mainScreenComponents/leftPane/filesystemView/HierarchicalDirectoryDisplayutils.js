import { keys } from "lodash";

function retainCompleteSubtree(rootIndex, fsState, nodesToRetain) {
  nodesToRetain[rootIndex] = true;
  for (let childIndex of fsState[rootIndex].children) {
    retainCompleteSubtree(childIndex, fsState, nodesToRetain);
  }
}

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
