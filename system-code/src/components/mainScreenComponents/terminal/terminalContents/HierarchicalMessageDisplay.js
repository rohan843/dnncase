import {
  StaticTreeDataProvider,
  Tree,
  UncontrolledTreeEnvironment,
} from "react-complex-tree";

import openDropdownIcon from "../../../../assets/hierarchy-dropdown-open.png";
import closedDropdownIcon from "../../../../assets/hierarchy-dropdown-close.png";
import ValidationMessageDisplay from "./ValidationMessageDisplay";

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
        message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officiis dolor saepe eius neque cumque maxime dolores quis deleniti. Suscipit, culpa. Unde exercitationem at cumque aut nobis consequatur! Corrupti, incidunt. Optio sapiente beatae culpa similique, eligendi distinctio nesciunt minima, fuga eum ducimus labore dolor odio dicta provident vero? Totam vero facilis eaque ad molestiae non ipsum quisquam ipsa tempore necessitatibus? Voluptatibus veniam earum praesentium ex expedita, nobis optio totam, neque placeat vitae ratione! Ex mollitia vitae illum nesciunt in nam non animi sint? Non nisi voluptate maiores, placeat culpa laboriosam. Illum est alias numquam assumenda atque ducimus debitis, architecto maxime molestiae reprehenderit autem officia soluta impedit nobis amet eum doloremque dolor, incidunt ea obcaecati rem! Enim odio laudantium quis eos? Modi assumenda explicabo tempore iste nobis accusamus pariatur ut non voluptatum sequi nihil in maxime soluta nesciunt omnis deserunt culpa, perspiciatis aut nam fugiat repellendus. Laborum corporis aperiam voluptas necessitatibus. Quo explicabo fugit facilis beatae! Repellat, delectus sed in ad officia aspernatur odit quaerat libero nostrum adipisci laudantium, consequatur et alias consequuntur reprehenderit est. Maxime, voluptatibus id! Dolore, dicta ex! Eligendi rerum corporis est doloribus praesentium eos libero ab? Sed, assumenda exercitationem fugiat omnis amet incidunt at, pariatur asperiores similique animi harum. Nobis, facilis in laborum exercitationem omnis et aspernatur. Saepe fugit accusamus quos neque laudantium quasi reprehenderit enim temporibus excepturi laboriosam? Ea commodi quos unde. Accusantium, perspiciatis. Laboriosam reiciendis porro dignissimos deserunt vero dolor accusamus veniam ex inventore at! Quis fugiat deleniti nihil obcaecati. Explicabo debitis nobis cum tempora molestiae corporis, asperiores natus, quia autem facere vitae blanditiis, officia optio excepturi. Sit at eligendi, aliquam modi maiores architecto pariatur. Odit dolorem voluptatem cum non corporis ex. Reprehenderit consequuntur voluptatibus rerum enim fuga dolorem cum odit aspernatur eius, omnis, perferendis dolore atque ab perspiciatis provident consequatur incidunt nobis, at voluptatum.`,
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
                  <ValidationMessageDisplay context={context} item={item} />
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
