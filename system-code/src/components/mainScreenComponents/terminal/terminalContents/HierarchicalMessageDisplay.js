import { ControlledTreeEnvironment, Tree } from "react-complex-tree";
import openDropdownIcon from "../../../../assets/hierarchy-dropdown-open.png";
import closedDropdownIcon from "../../../../assets/hierarchy-dropdown-close.png";
import { useDispatch } from "react-redux";

// MessageDisplay: This component can be used to display a message with custom styling.
//  It will be passed the message item (item) and its context (context).
// [expandedItems, addExpandedItem, removeExpandedItem]: These are a list and 2 action
//  functions from an appropriate redux slice. The functions will be passed the index
//  i.e., ID of the item to expand/collapse. `expandedItems` must be a list of indices
//  (IDs).
function HierarchicalMessageDisplay({
  messages,
  expandedItems,
  addExpandedItem,
  removeExpandedItem,
  MessageDisplay,
}) {
  const dispatch = useDispatch();

  return (
    <div className="w-full h-max">
      <ControlledTreeEnvironment
        items={messages}
        onExpandItem={(item) => {
          dispatch(addExpandedItem(item.index));
        }}
        onCollapseItem={(item) => {
          dispatch(removeExpandedItem(item.index));
        }}
        getItemTitle={(item) => item.data.type === "file" && item.data.name}
        viewState={{
          "tree-1": { expandedItems },
        }}
        renderItem={({ title, context, children, item }) => {
          if (item.data.type === "file") {
            return (
              <div
                {...context.itemContainerWithChildrenProps}
                className="m-0 flex flex-col mb-1"
              >
                <div
                  {...context.itemContainerWithoutChildrenProps}
                  {...context.interactiveElementProps}
                  className="flex flex-row items-center mb-1 select-none cursor-pointer hover-background-darker rounded"
                >
                  {/* Arrow */}
                  <div
                    {...context.arrowProps}
                    className="h-full flex items-center"
                  >
                    {context.isExpanded ? (
                      <img src={openDropdownIcon} alt="" className="h-1 mx-1" />
                    ) : (
                      <img
                        src={closedDropdownIcon}
                        alt=""
                        className="w-1 mx-1"
                      />
                    )}
                  </div>
                  {/* Title */}
                  <span>{title}</span>
                </div>
                <div className="w-full h-max ml-1.5">{children}</div>
              </div>
            );
          } else {
            return (
              <div
                {...context.itemContainerWithChildrenProps}
                className="m-0 flex flex-col mb-1"
              >
                <div
                  {...context.itemContainerWithoutChildrenProps}
                  {...context.interactiveElementProps}
                >
                  <MessageDisplay context={context} item={item} />
                </div>
              </div>
            );
          }
        }}
        renderItemsContainer={({ children, containerProps }) => {
          return (
            <div {...containerProps} className="flex flex-col mr-2 ml-1">
              {children}
            </div>
          );
        }}
        renderTreeContainer={({ children, containerProps }) => {
          return (
            <div {...containerProps} className="w-full h-max">
              {children}
            </div>
          );
        }}
      >
        <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
      </ControlledTreeEnvironment>
    </div>
  );
}

export default HierarchicalMessageDisplay;
