import { ControlledTreeEnvironment, Tree } from "react-complex-tree";
import openDropdownIcon from "../../../../assets/hierarchy-dropdown-open.png";
import closedDropdownIcon from "../../../../assets/hierarchy-dropdown-close.png";
import fileIcon from "../../../../assets/file.png";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  removeExpandedItem,
  addExpandedItem,
  setSelectedItems,
  setFocusedItem,
} from "../../../../store";
import { createSelector } from "@reduxjs/toolkit";
import { cloneDeep, keys } from "lodash";

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
      rootHasAnyArtefactDescendant =
        rootHasAnyArtefactDescendant ||
        populateNodesToRetain(childIndex, fsState, nodesToRetain);
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
}

function HierarchicalDirectoryDisplay() {
  const dispatch = useDispatch();

  const selectFSState = (state) => state.filesystem.fsState;
  const selectOnlyShowArtefacts = (state) => state.filesystem.onlyShowArtefacts;
  const selectRootIndex = (state) => state.filesystem.rootIndex;
  const selectFilteredFSState = createSelector(
    [selectFSState, selectOnlyShowArtefacts, selectRootIndex],
    (fsState, onlyShowArtefacts, rootIndex) => {
      fsState = cloneDeep(fsState);
      if (onlyShowArtefacts) {
        return getOnlyArtefactDirs(fsState, rootIndex);
      } else {
        return fsState;
      }
    }
  );
  const { fsState, focusedItem, expandedItems, selectedItems } = useSelector(
    (state) => {
      const fsState = selectFilteredFSState(state);
      return {
        fsState,
        focusedItem: state.filesystem.focusedItem,
        expandedItems: state.filesystem.expandedItems,
        selectedItems: state.filesystem.selectedItems,
      };
    }
  );

  return (
    <div
      style={{ scrollbarGutter: "stable" }}
      className="w-full h-full overflow-scroll thin-scrollbar-xy stable-scrollbar-gutter pt-1 select-none"
    >
      <ControlledTreeEnvironment
        items={fsState}
        getItemTitle={(item) => item.data.name}
        viewState={{
          "fs-tree": {
            focusedItem,
            expandedItems,
            selectedItems,
          },
        }}
        canDragAndDrop={false}
        canDropOnFolder={false}
        canReorderItems={false}
        onFocusItem={(item) => {
          dispatch(setFocusedItem(item.index));
        }}
        onExpandItem={(item) => dispatch(addExpandedItem(item.index))}
        onCollapseItem={(item) => dispatch(removeExpandedItem(item.index))}
        onSelectItems={(items) => dispatch(setSelectedItems(items))}
        renderItemTitle={({ title, context }) => (
          <span
            className={classNames({
              "font-medium": context.isFocused,
            })}
          >
            {title}
          </span>
        )}
        renderItemArrow={({ item, context }) =>
          item.isFolder ? (
            <div {...context.arrowProps} className="h-full flex items-center">
              {context.isExpanded ? (
                <img src={openDropdownIcon} alt="" className="h-1 mx-1" />
              ) : (
                <img src={closedDropdownIcon} alt="" className="w-1 mx-1" />
              )}
            </div>
          ) : (
            <div {...context.arrowProps} className="h-full flex items-center">
              <img src={fileIcon} alt="" className="h-5 w-5 mx-1" />
            </div>
          )
        }
        renderItem={({ title, arrow, depth, context, children }) => (
          <div {...context.itemContainerWithChildrenProps} className="">
            <div
              {...context.itemContainerWithoutChildrenProps}
              {...context.interactiveElementProps}
              className={classNames(
                "flex flex-row h-7 items-center mb-1 pb-1 cursor-pointer hover-background-dark rounded mt-px"
              )}
            >
              {arrow}
              {title}
            </div>
            <div className="ml-1.5 border-left-darker pl-2">{children}</div>
          </div>
        )}
        renderItemsContainer={({ children, containerProps }) => (
          <div {...containerProps} className="flex flex-col mr-2 ml-1">
            {children}
          </div>
        )}
        renderTreeContainer={({ children, containerProps }) => (
          <div {...containerProps} className="h-full w-full">
            {children}
          </div>
        )}
      >
        <Tree treeId="fs-tree" rootItem="/Project1" treeLabel="Tree Example" />
      </ControlledTreeEnvironment>
    </div>
  );
}

export default HierarchicalDirectoryDisplay;
