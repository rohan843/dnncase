import TopToolbar from "./TopToolbar";
import KeyValRows from "./KeyValRows";

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
