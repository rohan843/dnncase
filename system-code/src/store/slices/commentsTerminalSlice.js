import { createSlice } from "@reduxjs/toolkit";

const commentsTerminalSlice = createSlice({
  name: "commentsTerminal",
  initialState: {
    filterString: "",
    onlyActiveFileComments: false,
    messages: {
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
    },
    expandedItems: [],
  },
  reducers: {
    setCommentsFilterString(state, action) {
      state.filterString = action.payload;
    },
    toggleOnlyActiveFileComments(state) {
      state.onlyActiveFileComments = !state.onlyActiveFileComments;
    },
    addExpandedCommentItem(state, action) {
      state.expandedItems.push(action.payload);
    },
    removeExpandedCommentItem(state, action) {
      state.expandedItems = state.expandedItems.filter(
        (expandedItemIndex) => expandedItemIndex !== action.payload
      );
    },
  },
});

export const {
  setCommentsFilterString,
  toggleOnlyActiveFileComments,
  addExpandedCommentItem,
  removeExpandedCommentItem,
} = commentsTerminalSlice.actions;
export const commentsTerminalReducer = commentsTerminalSlice.reducer;
