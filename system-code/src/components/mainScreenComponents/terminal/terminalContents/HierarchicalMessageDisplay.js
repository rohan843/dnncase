import {
  StaticTreeDataProvider,
  Tree,
  UncontrolledTreeEnvironment,
} from "react-complex-tree";

import openDropdownIcon from "../../../../assets/hierarchy-dropdown-open.png";
import closedDropdownIcon from "../../../../assets/hierarchy-dropdown-close.png";
import errorIcon from "../../../../assets/error.png";
import warningIcon from "../../../../assets/warning.png";
import infoIcon from "../../../../assets/info.png";

const dummyMessages = {
  root: {
    index: "root",
    children: [
      "/Project1/home/user1/file1.txt",
      "/Project1/home/user1/file2.txt",
    ],
    isFolder: true,
  },
  "/Project1/home/user1/file1.txt": {
    index: "/Project1/home/user1/file1.txt",
    data: { name: "file1.txt", type: "file" },
    children: [
      "/Project1/home/user1/file1.txt/errors/0",
      "/Project1/home/user1/file1.txt/errors/1",
    ],
    isFolder: true,
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
    isFolder: true,
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
  return (
    <div className="w-full h-max">
      <UncontrolledTreeEnvironment
        dataProvider={
          new StaticTreeDataProvider(dummyMessages, (item, data) => ({
            ...item,
            data,
          }))
        }
        getItemTitle={(item) => item.data.type === "file" && item.data.name}
        viewState={{
          "tree-1": {},
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
                  className="flex flex-row items-center mb-1"
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
                  {/* Message Div */}
                  <div className="flex flex-row items-center mb-1">
                    {/* Arrow */}
                    <div
                      {...context.arrowProps}
                      className="h-full flex items-center"
                    >
                      <img
                        src={
                          (item.data.messageContent.type === "error" &&
                            errorIcon) ||
                          (item.data.messageContent.type === "warning" &&
                            warningIcon) ||
                          (item.data.messageContent.type === "info" && infoIcon)
                        }
                        alt=""
                        className="h-5 w-5 mx-1"
                      />
                    </div>
                    {/* Message */}
                    <div className="ml-1 whitespace-break-spaces">
                      <span>{item.data.messageContent.message}</span>
                      <span>
                        {item.data.messageContent.affectedNodes &&
                          item.data.messageContent.affectedNodes.join(" ")}
                      </span>
                      <span>
                        {item.data.messageContent.displayPositionCoordinates &&
                          `pos=(${item.data.messageContent.displayPositionCoordinates[0]},${item.data.messageContent.displayPositionCoordinates[1]})`}
                      </span>
                    </div>
                  </div>
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
      </UncontrolledTreeEnvironment>
    </div>
  );
}

export default HierarchicalMessageDisplay;
