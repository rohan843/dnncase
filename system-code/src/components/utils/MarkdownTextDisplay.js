import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function MarkdownTextDisplay({ mdString }) {
  return (
    <span className="thisisdangerous-unreset-onlyformarkdownuse">
      <Markdown remarkPlugins={[remarkGfm]}>{mdString}</Markdown>
    </span>
  );
}

export default MarkdownTextDisplay;
