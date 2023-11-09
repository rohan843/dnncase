import TopToolbar from "./TopToolbar";
import KeyValRows from "./KeyValRows";

function KeyValue({ config }) {
  if (!config.show) return null;
  return (
    <div className="border-top-darker border-right-darker border-left-darker rounded h-max w-[95%] max-h-[400px] overflow-hidden flex flex-col items-center mb-1">
      <TopToolbar />
      <KeyValRows config={config} />
    </div>
  );
}

export default KeyValue;
