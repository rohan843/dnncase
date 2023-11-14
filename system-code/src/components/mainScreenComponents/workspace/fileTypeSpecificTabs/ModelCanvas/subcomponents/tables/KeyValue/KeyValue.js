import TopToolbar from "./TopToolbar";
import KeyValRows from "./KeyValRows";

/**
 * A component to display to the user a 2-column table of key-value pairs.
 * @param {Object} param0
 * @param {boolean} param0.show If true, the component will return JSX, else it will return `null`.
 * @param {() => void} param0.onAdd This function will be called when the user clicks the 'add new
 * pair' btn.
 * @param {() => void} param0.onNewWindow This function will be called when the user clicks the
 * 'open in new window' button.
 * @param {[{
 * keyInnerText: string,
 * valueInnerText: string,
 * isValueEditable: boolean,
 * onValueChange?: (newValue: string) => void,
 * removable: boolean,
 * onRemove?: () => void,
 * }]} param0.content
 * @param {boolean} param0.enableNewKeyValueInput If true, a form to take in a new input pair will
 * be shown.
 * @param {(inputKey: string, inputValue: string) => void} param0.onNewKeyValueInputSubmit This
 * function will be called when a user submits a new key-value pair.
 * @param {() => void} param0.onCancel This function will be called when the user cancels the form
 * to enter a new key-value pair.
 */
function KeyValue({
  show,
  onAdd,
  onNewWindow,
  content,
  enableNewKeyValueInput,
  onNewKeyValueInputSubmit,
  onCancel,
}) {
  if (!show) return null;
  return (
    <div className="border-top-darker border-right-darker border-left-darker rounded h-max w-[95%] overflow-hidden flex flex-col items-center mb-1">
      <TopToolbar onAdd={onAdd} onNewWindow={onNewWindow} />
      <KeyValRows
        content={content}
        enableNewKeyValueInput={enableNewKeyValueInput}
        onNewKeyValueInputSubmit={onNewKeyValueInputSubmit}
        onCancel={onCancel}
      />
    </div>
  );
}

export default KeyValue;
