// TODO: Add config based inputs for all possible props.

import CodeEditor from "@uiw/react-textarea-code-editor";
import MarkdownEnableButton from "./MarkdownEnableButton";
import MarkdownTextDisplay from "../../../../../../utils/MarkdownTextDisplay";

function Markdown({
  show,
  onConvertToPlaintext,
  editsEnabled,
  innerText,
  onChange,
  ...props
}) {
  if (!show) return null;
  return (
    <div className="h-max w-[95%] border-darker rounded p-1 mb-2 overflow-hidden whitespace-break-spaces font-mono relative">
      <MarkdownEnableButton
        enabled={true}
        className="absolute right-0 top-0 z-10"
        onClick={onConvertToPlaintext}
      />
      {!editsEnabled && (
        <div className="w-full h-max p-[10px]" {...props}>
          <MarkdownTextDisplay mdString={innerText} />
        </div>
      )}
      {editsEnabled && (
        /* TODO: CodeEditor doesn't seem to support classes. Either see their support or report this issue.*/
        <CodeEditor
          value={innerText}
          onChange={onChange}
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
      )}
    </div>
  );
}

export default Markdown;
