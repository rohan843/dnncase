import commentIcon from "../../../../assets/comment.png";
import graphCommentIcon from "../../../../assets/graph-comment.png";
import todoCommentIcon from "../../../../assets/todo-comment.png";
import MarkdownTextDisplay from "../../../utils/MarkdownTextDisplay";

function CommentsMessageDisplay({ context, item }) {
  const shouldContentBeRenderedAsMarkdown =
    item.data.messageContent.type !== "codeComment" ||
    !item.data.messageContent.treatAsMarkdown;
  return (
    <div className="w-full h-max flex flex-row  mb-1 rounded">
      {/* Arrow */}
      <div
        {...context.arrowProps}
        className="h-full w-[2rem] select-none pt-0.5"
      >
        <img
          src={
            (item.data.messageContent.type === "codeComment" && commentIcon) ||
            (item.data.messageContent.type === "graphComment" &&
              graphCommentIcon) ||
            (item.data.messageContent.type === "todoComment" && todoCommentIcon)
          }
          alt=""
          className="h-5 w-5 mx-1"
        />
      </div>
      {/* Message */}
      <div className="ml-1 w-[calc(100%-2rem)] whitespace-break-spaces">
        {(shouldContentBeRenderedAsMarkdown && (
          <span>{item.data.messageContent.message}</span>
        )) || (
          <MarkdownTextDisplay mdString={item.data.messageContent.message} />
        )}
      </div>
    </div>
  );
}

export default CommentsMessageDisplay;
