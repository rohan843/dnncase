// TODO: See this: https://github.com/remarkjs/react-markdown#appendix-b-components and add individual react components, instead of using unreset.

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Takes in a markdown string and returns appropriate JSX. GFM (GitHub
// Flavoured Markdown) is supported.
function MarkdownTextDisplay({ mdString }) {
  return (
    <span className="this_is_dangerous-unreset-only_for_markdown_use">
      <Markdown remarkPlugins={[remarkGfm]}>{mdString}</Markdown>
    </span>
  );
}

export default MarkdownTextDisplay;
