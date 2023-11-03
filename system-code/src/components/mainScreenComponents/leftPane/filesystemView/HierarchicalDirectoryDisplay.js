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

// TODO: Write the artefact-only filtering algorithm.
function getOnlyArtefactDirs(fsState) {
  return fsState;
}

function HierarchicalDirectoryDisplay() {
  const dispatch = useDispatch();

  const selectFSState = (state) => state.filesystem.fsState;
  const selectOnlyShowArtefacts = (state) => state.filesystem.onlyShowArtefacts;
  const selectFilteredFSState = createSelector(
    [selectFSState, selectOnlyShowArtefacts],
    (fsState, onlyShowArtefacts) => {
      if (onlyShowArtefacts) {
        return getOnlyArtefactDirs(fsState);
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
