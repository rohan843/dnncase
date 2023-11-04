import { ControlledTreeEnvironment, Tree } from "react-complex-tree";

const dummyMessages = [];

function HierarchicalMessageDisplay() {
  return (
    <div>
      <ControlledTreeEnvironment
        items={dummyMessages}
        getItemTitle={() => ""}
        viewState={{ "msg-tree": {} }}
        canDragAndDrop={false}
        canDropOnFolder={false}
        canReorderItems={false}
        onFocusItem={() => {}}
        onExpandItem={() => {}}
        onCollapseItem={() => {}}
        onSelectItems={() => {}}
        renderItemTitle={() => {}}
        renderItemArrow={() => {}}
        renderItem={() => {}}
        renderItemsContainer={() => {}}
        renderTreeContainer={() => {}}
      >
        <Tree
          treeId="msg-tree"
          treeLabel="File Specific Messages"
          rootItem=""
        />
      </ControlledTreeEnvironment>
    </div>
  );
}

export default HierarchicalMessageDisplay;
