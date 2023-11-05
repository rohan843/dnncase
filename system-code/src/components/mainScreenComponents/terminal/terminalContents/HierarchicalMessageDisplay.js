import { useState } from "react";
import { ControlledTreeEnvironment, Tree } from "react-complex-tree";

const dummyMessages = {
  "/Project1/home/user1/file1.txt": {
    index: "/Project1/home/user1/file1.txt",
    data: { name: "file1.txt", type: "file" },
    children: [
      "/Project1/home/user1/file1.txt/errors/0",
      "/Project1/home/user1/file1.txt/errors/1",
    ],
  },
  "/Project1/home/user1/file1.txt/errors/0": {
    index: "/Project1/home/user1/file1.txt/errors/0",
    data: {
      type: "message",
      messageContent: {
        type: "error",
        message: "Unconnected handle",
        affectedNodes: ["s89df0.i3"],
        displayPositionCoordinates: [20.9, 30],
      },
    },
    children: [],
  },
  "/Project1/home/user1/file1.txt/errors/1": {
    index: "/Project1/home/user1/file1.txt/errors/1",
    data: {
      type: "message",
      messageContent: {
        type: "error",
        message: "Unconnected handle",
        affectedNodes: ["s89df0.i3"],
        displayPositionCoordinates: [20.9, 30],
      },
    },
    children: [],
  },
  "/Project1/home/user1/file2.txt": {
    index: "/Project1/home/user1/file2.txt",
    data: { name: "file2.txt", type: "file" },
    children: [
      "/Project1/home/user1/file2.txt/warnings/0",
      "/Project1/home/user1/file2.txt/infos/0",
    ],
  },
  "/Project1/home/user1/file2.txt/warnings/0": {
    index: "/Project1/home/user1/file2.txt/warnings/0",
    data: {
      type: "message",
      messageContent: {
        type: "warning",
        message: "Unused reuse block",
        affectedNodes: ["s89df0"],
        displayPositionCoordinates: [20.9, 30],
      },
    },
    children: [],
  },
  "/Project1/home/user1/file2.txt/infos/0": {
    index: "/Project1/home/user1/file2.txt/infos/0",
    data: {
      type: "message",
      messageContent: {
        type: "info",
        message: "An informational message about the file.",
      },
    },
    children: [],
  },
};

function HierarchicalMessageDisplay() {
  const [selectedItems, setSelectedItems] = useState([]);
  return (
    <div className="w-full h-max">
      <ControlledTreeEnvironment
        items={dummyMessages}
        getItemTitle={() => ""}
        viewState={{
          "msg-tree": {
            selectedItems,
          },
        }}
        canDragAndDrop={false}
        canDropOnFolder={false}
        canReorderItems={false}
        onExpandItem={(item) => {
          setSelectedItems([...selectedItems, item.index]);
        }}
        onCollapseItem={(item) => {
          setSelectedItems(
            selectedItems.filter(
              (selectedItemIndex) => selectedItemIndex !== item.index
            )
          );
        }}
        renderItemTitle={() => {}}
        renderItemArrow={() => {}}
        renderItem={() => {}}
        renderItemsContainer={() => {}}
        renderTreeContainer={({ children, containerProps }) => {
          <div {...containerProps} className="">
            {children}
          </div>;
        }}
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
