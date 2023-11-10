import CodeEditor from "@uiw/react-textarea-code-editor";
import classNames from "classnames";

function CommentNode({
  isCommentTODO,
  onToggleTODOStatus,
  commentText,
  onCommentChange,
}) {
  return (
    <div className="w-[353px] h-[185px] overflow-hidden border-darker background-dark rounded-t flex flex-col">
      {/* 'Set as TODO' flag*/}
      <div className="w-full h-[28px] border-bottom-darker flex items-center">
        <div
          className={classNames(
            "select-none mx-1 background-darker text-white text-sm font-mono font-medium rounded px-1 cursor-pointer active-thin-inset-box-shadow",
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
      <div className="w-full h-[157px] overflow-x-hidden overflow-y-scroll style-scrollbar-slightly-rounded">
        {/* TODO: CodeEditor doesn't seem to support classes. Either see their support or report this issue.*/}
        <CodeEditor
          value={commentText}
          onChange={onCommentChange}
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