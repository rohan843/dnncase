// TODO: Add a method to run an 'onEditsEnable' method.

import CodeEditor from "@uiw/react-textarea-code-editor";
import MarkdownEnableButton from "./MarkdownEnableButton";
import MarkdownTextDisplay from "../../../../../../utils/MarkdownTextDisplay";

/**
 * A component to display a comment styled as a markdown string.
 * @param {Object} param0
 * @param {boolean} param0.show If true, the component will return JSX, else it will return `null`.
 * @param {() => void} param0.onConvertToPlaintext A callback to run when the user converts the
 * comment to a plaintext comment.
 * @param {boolean} param0.editsEnabled If true, users will be shown an editable interface. Else,
 * text styled as markdown will be displayed.
 * @param {string} param0.innerText The comment string to display.
 * @param {(newValue: string) => void} param0.onChange This function is fired when the comment is
 * changed. The new value of comment text is passed as the only argument.
 * @param {Object} param0.props Any other props.
 */
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
        onClick={() => {
          onConvertToPlaintext && onConvertToPlaintext();
        }}
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
          onChange={(e) => {
            onChange && onChange(e.target.value);
          }}
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
