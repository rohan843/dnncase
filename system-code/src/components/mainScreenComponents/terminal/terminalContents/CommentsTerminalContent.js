import { useSelector } from "react-redux";
import HierarchicalMessageDisplay from "./HierarchicalMessageDisplay";
import {
  addExpandedCommentItem,
  removeExpandedCommentItem,
} from "../../../../store";
import CommentsMessageDisplay from "./CommentsMessageDisplay";

function CommentsTerminalContent() {
  const { messages, expandedItems } = useSelector(
    (store) => store.commentsTerminal
  );
  return (
    <div className="w-full h-max">
      <HierarchicalMessageDisplay
        messages={messages}
        expandedItems={expandedItems}
        addExpandedItem={addExpandedCommentItem}
        removeExpandedItem={removeExpandedCommentItem}
        MessageDisplay={CommentsMessageDisplay}
      />
    </div>
  );
}

export default CommentsTerminalContent;
