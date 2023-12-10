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
          "/Project1/home/user1/file1.txt/codeComments/0",
          "/Project1/home/user1/file1.txt/codeComments/1",
        ],
        isFolder: true,
      },
      "/Project1/home/user1/file1.txt/codeComments/0": {
        index: "/Project1/home/user1/file1.txt/codeComments/0",
        data: {
          type: "message",
          messageContent: {
            type: "codeComment",
            treatAsMarkdown: false,
            message:
              "This is a low level comment, that will be written in the generated code (in case code is generated), as a docstring.",
            commentNode: "s89df0",
          },
        },
        children: [],
      },
      "/Project1/home/user1/file1.txt/codeComments/1": {
        index: "/Project1/home/user1/file1.txt/codeComments/1",
        data: {
          type: "message",
          messageContent: {
            type: "codeComment",
            treatAsMarkdown: true,
            message:
              "# Code Comment\n\nCode comments can also use `markdown` to describe some fact or entity in greater detail.\n\n> Markdown comes with its benefits in enhancing readability, but will be input as a docstring containing markdown text in the generated code files. _Typically_, that should not be a problem. If however the docstring format is absolutely necessary to be kept clean, this comment can always be switched back to plain text.",
            commentNode: "s89df0",
          },
        },
        children: [],
      },
      "/Project1/home/user1/file2.txt": {
        index: "/Project1/home/user1/file2.txt",
        data: { name: "file2.txt", type: "file" },
        children: [
          "/Project1/home/user1/file2.txt/graphComments/0",
          "/Project1/home/user1/file2.txt/todoComments/0",
        ],
        isFolder: true,
      },
      "/Project1/home/user1/file2.txt/graphComments/0": {
        index: "/Project1/home/user1/file2.txt/graphComments/0",
        data: {
          type: "message",
          messageContent: {
            type: "graphComment",
            message:
              "This comment describes what some section of a model does.",
            commentNode: "s89df0",
          },
        },
        children: [],
      },
      "/Project1/home/user1/file2.txt/todoComments/0": {
        index: "/Project1/home/user1/file2.txt/todoComments/0",
        data: {
          type: "message",
          messageContent: {
            type: "todoComment",
            commentNode: "s89df0",
            message: "TODO: This comment marks a task that is yet to be done.",
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
