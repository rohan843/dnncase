import KeyValRow from "./KeyValRow";
import NewKeyValInput from "./NewKeyValInput";

function KeyValRows({
  content,
  enableNewKeyValueInput,
  onNewKeyValueInputSubmit,
  onCancel,
}) {
  if (!content || content.length === 0) return null;
  const contentJSX = content.map((item, idx) => {
    return (
      <KeyValRow light={idx % 2 === 0} item={item} key={item.keyInnerText} />
    );
  });
  return (
    <div className="w-full h-max max-h-[400px] border-bottom-darker rounded-b overflow-y-scroll hide-scrollbar">
      {enableNewKeyValueInput && (
        <NewKeyValInput
          onNewKeyValueInputSubmit={onNewKeyValueInputSubmit}
          onCancel={onCancel}
        />
      )}
      {contentJSX}
    </div>
  );
}

export default KeyValRows;
