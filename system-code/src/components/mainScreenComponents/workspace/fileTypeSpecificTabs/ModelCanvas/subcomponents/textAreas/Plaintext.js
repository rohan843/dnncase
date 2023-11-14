// TODO: Add config based inputs for all possible props.

import CodeEditor from "@uiw/react-textarea-code-editor";
import MarkdownButtons from "./MarkdownButtons";

/**
 * A component to allow displaying an editable plaintext comment.
 * @param {Object} param0
 * @param {boolean} param0.show If true, the component will return JSX, else it will return `null`.
 * @param {() => void} param0.onConvertToMarkdown A callback to run when the comment is converted
 * into markdown.
 * @param {string} param0.innerText The comment string to display.
 * @param {(newValue: string) => void} param0.onChange This function is fired when the comment is 
 * changed. The new value of comment text is passed as the only argument.
 * @param {any[]} param0.props Any other props.
 */
function Plaintext({
  show,
  onConvertToMarkdown,
  innerText,
  onChange,
  ...props
}) {
  if (!show) return null;
  return (
    <div className="h-max w-[95%] border-darker rounded p-1 mb-2 overflow-hidden whitespace-break-spaces font-mono relative">
      <MarkdownButtons
        enabled={false}
        className="absolute right-0 top-0 z-10"
        onClick={() => {
          onConvertToMarkdown();
        }}
      />
      {/* TODO: CodeEditor doesn't seem to support classes. Either see their support or report this issue.*/}
      <CodeEditor
        value={innerText}
        onChange={(e) => {
          onChange(e.target.value);
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
    </div>
  );
}

export default Plaintext;
