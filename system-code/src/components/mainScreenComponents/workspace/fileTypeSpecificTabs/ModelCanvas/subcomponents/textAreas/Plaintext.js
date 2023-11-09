// TODO: Add config based inputs for all possible props.

import CodeEditor from "@uiw/react-textarea-code-editor";
import MarkdownEnableButton from "./MarkdownEnableButton";

function Plaintext({ config, ...props }) {
  if (!config.show) return null;
  return (
    <div className="h-max w-[95%] border-darker rounded p-1 mb-2 overflow-hidden whitespace-break-spaces font-mono relative">
      <MarkdownEnableButton
        enabled={false}
        className="absolute right-0 top-0 z-10"
        onClick={config.onConvertToMarkdown}
      />
      {/* TODO: CodeEditor doesn't seem to support classes. Either see their support or report this issue.*/}
      <CodeEditor
        value={config.innerText}
        onChange={config.onChange}
        placeholder={null}
        style={{
          backgroundColor: "transparent",
          fontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          fontSize: "0.8rem",
          color: "black",
        }}
        {...props}
      />
    </div>
  );
}

export default Plaintext;
