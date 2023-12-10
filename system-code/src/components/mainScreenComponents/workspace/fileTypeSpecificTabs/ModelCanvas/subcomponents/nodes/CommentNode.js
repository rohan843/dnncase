import CodeEditor from "@uiw/react-textarea-code-editor";
import classNames from "classnames";

/**
 *
 * @param {Object} param0
 * @param {Object} param0.data
 * @param {boolean} param0.data.isCommentTODO If true, the `todo` flag is shown.
 * @param {() => void} param0.data.onToggleTODOStatus A callback that is called when a user toggles
 * the todo status.
 * @param {string} param0.data.commentText The text of the comment.
 * @param {(newValue: string) => void} param0.data.onCommentChange A callback called when a user
 * edits a comment.
 */
function CommentNode({
  data: {
    isCommentTODO,
    onToggleTODOStatus,
    commentText,
    onCommentChange,
    onActivate,
    onActivateAndShowInPane,
  },
  selected,
}) {
  return (
    <div
      className={classNames(
        "w-[200px] h-[155px] overflow-hidden border-darker background-dark rounded-t flex flex-col",
        {
          "border-black": selected,
          "border-darker": !selected,
        }
      )}
      onClick={() => {
        onActivate && onActivate();
      }}
      onDoubleClick={() => {
        onActivateAndShowInPane && onActivateAndShowInPane();
      }}
    >
      {/* 'Set as TODO' flag*/}
      <div className="w-full h-[28px] border-bottom-darker flex items-center">
        <div
          className={classNames(
            "nodrag select-none mx-1 background-darker text-white text-sm font-mono font-medium rounded px-1 cursor-pointer active-thin-inset-box-shadow",
            {
              "opacity-100 border-black": isCommentTODO,
              "opacity-50 hover:opacity-70 active:opacity-90 active-border-black-else-darker":
                !isCommentTODO,
            }
          )}
          onClick={() => {
            onToggleTODOStatus && onToggleTODOStatus();
          }}
        >
          {(isCommentTODO && "TODO") || "Set as TODO"}
        </div>
      </div>
      {/* Comment area */}
      <div className="w-full h-[127px] overflow-x-hidden overflow-y-scroll style-scrollbar-slightly-rounded nodrag">
        {/* TODO: CodeEditor doesn't seem to support classes. Either see their support or report this issue.*/}
        <CodeEditor
          value={commentText}
          onChange={(e) => {
            onCommentChange(e.target.value);
          }}
          placeholder={null}
          style={{
            backgroundColor: "transparent",
            fontFamily:
              'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            fontSize: "0.8rem",
            color: "black",
          }}
        />
      </div>
    </div>
  );
}

export default CommentNode;
