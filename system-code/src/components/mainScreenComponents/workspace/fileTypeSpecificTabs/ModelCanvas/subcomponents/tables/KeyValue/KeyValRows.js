import KeyValRow from "./KeyValRow";
import NewKeyValInput from "./NewKeyValInput";

function KeyValRows({ config }) {
  if (!config.content || config.content.length === 0) return null;
  const contentJSX = config.content.map((item, idx) => {
    return (
      <KeyValRow light={idx % 2 === 0} item={item} key={item.keyInnerText} />
    );
  });
  return (
    <div className="w-full h-max max-h-[400px] border-bottom-darker rounded-b overflow-y-scroll hide-scrollbar">
      {config.enableNewKeyValueInput && (
        <NewKeyValInput
          onNewKeyValueInputSubmit={config.onNewKeyValueInputSubmit}
          onCancel={config.onCancel}
        />
      )}
      {contentJSX}
    </div>
  );
}

export default KeyValRows;
