import {
  UncontrolledTreeEnvironment,
  StaticTreeDataProvider,
  Tree,
} from "react-complex-tree";
import openDropdownIcon from "../../../../assets/hierarchy-dropdown-open.png";
import closedDropdownIcon from "../../../../assets/hierarchy-dropdown-close.png";
import fileIcon from "../../../../assets/file.png";
import classNames from "classnames";

// Keep this in redux
// For an algo to get this, refer -> https://colab.research.google.com/drive/15wcb00OYHopah1twNGtBIeydOMb6ydic?usp=sharing
const fsState = {
  "/Project1": {
    index: "/Project1",
    data: { name: "Project1", folder: true, artefact: false },
    isFolder: true,
    children: ["/Project1/bin", "/Project1/home1", "/Project1/home"],
  },
  "/Project1/bin": {
    index: "/Project1/bin",
    data: { name: "bin", folder: true, artefact: true },
    isFolder: true,
    children: ["/Project1/bin/ls", "/Project1/bin/mkdir"],
  },
  "/Project1/bin/ls": {
    index: "/Project1/bin/ls",
    data: { name: "ls", folder: true, artefact: false },
    isFolder: true,
    children: [],
  },
  "/Project1/bin/mkdir": {
    index: "/Project1/bin/mkdir",
    data: { name: "mkdir", folder: true, artefact: false },
    isFolder: true,
    children: [],
  },
  "/Project1/home1": {
    index: "/Project1/home1",
    data: { name: "home1", folder: true, artefact: false },
    isFolder: true,
    children: ["/Project1/home1/user1", "/Project1/home1/user2"],
  },
  "/Project1/home1/user1": {
    index: "/Project1/home1/user1",
    data: { name: "user1", folder: true, artefact: false },
    isFolder: true,
    children: ["/Project1/home1/user1/file1.txt"],
  },
  "/Project1/home1/user1/file1.txt": {
    index: "/Project1/home1/user1/file1.txt",
    data: { name: "file1.txt", folder: false, artefact: false },
    isFolder: false,
    children: [],
  },
  "/Project1/home1/user2": {
    index: "/Project1/home1/user2",
    data: { name: "user2", folder: true, artefact: false },
    isFolder: true,
    children: [],
  },
  "/Project1/home": {
    index: "/Project1/home",
    data: { name: "home", folder: true, artefact: false },
    isFolder: true,
    children: ["/Project1/home/user1", "/Project1/home/user2"],
  },
  "/Project1/home/user1": {
    index: "/Project1/home/user1",
    data: { name: "user1", folder: true, artefact: false },
    isFolder: true,
    children: [
      "/Project1/home/user1/file1.txt",
      "/Project1/home/user1/file2.txt",
      "/Project1/home/user1/file3.txt",
    ],
  },
  "/Project1/home/user1/file1.txt": {
    index: "/Project1/home/user1/file1.txt",
    data: { name: "file1.txt", folder: false, artefact: true },
    isFolder: false,
    children: [],
  },
  "/Project1/home/user1/file2.txt": {
    index: "/Project1/home/user1/file2.txt",
    data: { name: "file2.txt", folder: false, artefact: false },
    isFolder: false,
    children: [],
  },
  "/Project1/home/user1/file3.txt": {
    index: "/Project1/home/user1/file3.txt",
    data: { name: "file3.txt", folder: false, artefact: false },
    isFolder: false,
    children: [],
  },
  "/Project1/home/user2": {
    index: "/Project1/home/user2",
    data: { name: "user2", folder: true, artefact: false },
    isFolder: true,
    children: [],
  },
};

function HierarchicalDirectoryDisplay() {
  return (
    <div
      style={{ scrollbarGutter: "stable" }}
      className="w-full h-full overflow-scroll thin-scrollbar-xy stable-scrollbar-gutter pt-1 select-none"
    >
      <UncontrolledTreeEnvironment
        dataProvider={
          new StaticTreeDataProvider(fsState, (item, data) => ({
            ...item,
            data,
          }))
        }
        getItemTitle={(item) => item.data.name}
        viewState={{ "tree-1": {} }}
        canDragAndDrop={false}
        canDropOnFolder={false}
        canReorderItems={false}
        renderItemTitle={({ title }) => <span>{title}</span>}
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
        <Tree treeId="tree-1" rootItem="/Project1" treeLabel="Tree Example" />
      </UncontrolledTreeEnvironment>
    </div>
  );
}

export default HierarchicalDirectoryDisplay;
