import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function MarkdownTextDisplay({ mdString }) {
  return (
    <span className="this_is_dangerous-unreset-only_for_markdown_use">
      <Markdown remarkPlugins={[remarkGfm]}>{mdString}</Markdown>
    </span>
  );
}

export default MarkdownTextDisplay;
