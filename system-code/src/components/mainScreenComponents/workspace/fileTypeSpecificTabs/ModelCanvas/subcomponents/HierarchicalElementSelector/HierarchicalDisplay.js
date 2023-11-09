import { ControlledTreeEnvironment, Tree } from "react-complex-tree";
import openDropdownIcon from "../../../../../../../assets/hierarchy-dropdown-open.png";
import closedDropdownIcon from "../../../../../../../assets/hierarchy-dropdown-close.png";
import classNames from "classnames";
import { useImmer } from "use-immer";

function HierarchicalDisplay({ onSelect, items }) {
  const [expandedItems, setExpandedItems] = useImmer([]);
  return (
    <div className="w-full h-max max-h-[400px] border-bottom-darker rounded-b overflow-y-scroll hide-scrollbar px-1 py-2">
      {/* <UncontrolledTreeEnvironment
        dataProvider={
          new StaticTreeDataProvider(items, (item, data) => ({ ...item, data }))
        }
        getItemTitle={(item) => item.data.name}
        viewState={{}}
        // renderItemTitle={({ title }) => {
        //   <span>{title}</span>;
        // }}
      >
        <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
      </UncontrolledTreeEnvironment> */}
      <ControlledTreeEnvironment
        items={items}
        getItemTitle={(item) => item.data.name}
        viewState={{
          tree: {
            expandedItems,
          },
        }}
        canDragAndDrop={false}
        canDropOnFolder={false}
        canReorderItems={false}
        onExpandItem={(item) =>
          setExpandedItems((items) => {
            items.push(item.index);
          })
        }
        onCollapseItem={(item) => {
          setExpandedItems((items) => {
            items = items.filter((idx) => idx !== item.index);
            console.log(items);
          });
        }}
        renderItemTitle={({ title, item }) => {
          if (!item.isFolder) {
            return (
              <span
                onClick={() => {
                  onSelect(item.index);
                }}
              >
                {title}
              </span>
            );
          } else {
            return <span>{title}</span>;
          }
        }}
        renderItemArrow={({ item, context }) =>
          item.isFolder ? (
            <div {...context.arrowProps} className="h-full flex items-center">
              {context.isExpanded ? (
                <img src={openDropdownIcon} alt="" className="h-1 mx-1" />
              ) : (
                <img src={closedDropdownIcon} alt="" className="w-1 mx-1" />
              )}
            </div>
          ) : null
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
        <Tree treeId="tree" rootItem="root" treeLabel="Tree Example" />
      </ControlledTreeEnvironment>
    </div>
  );
}
export default HierarchicalDisplay;
