import KeyValRow from "./KeyValRow";

function KeyValRows({ content }) {
  if (!content || content.length === 0) return null;
  const contentJSX = content.map((item, idx) => {
    return <KeyValRow light={idx % 2 === 0} item={item} />;
  });
  return (
    <div className="w-full h-max border-bottom-darker rounded-b overflow-y-scroll hide-scrollbar">
      {contentJSX}
    </div>
  );
}

export default KeyValRows;
