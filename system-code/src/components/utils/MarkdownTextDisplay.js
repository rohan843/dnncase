import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function MarkdownTextDisplay({ mdString }) {
  return (
    <div>
      <span className="thisisdangerous-unreset">
        <Markdown remarkPlugins={[remarkGfm]}>{mdString}</Markdown>
      </span>
    </div>
  );
}

export default MarkdownTextDisplay;
