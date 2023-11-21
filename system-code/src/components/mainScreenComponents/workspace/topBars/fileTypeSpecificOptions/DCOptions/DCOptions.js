import { useSelector } from "react-redux";
import PythonCodeGenButton from "./PythonCodeGenButton";

const permissibleFileTypes = {
  dc: true,
};

function DCOptions({ activeFileType, activeFileIndex }) {
  const { nodes, edges } = useSelector(
    (store) => store.filesystem[activeFileIndex].data
  );
  if (!permissibleFileTypes[activeFileType]) return null;
  return (
    <div className="h-full w-max flex items-center">
      {/* TODO: Generate python code on click here */}
      <PythonCodeGenButton
        onPythonCodeGen={() => {
          window.electronAPI.exportCode({ nodes, edges });
        }}
      />
    </div>
  );
}

export default DCOptions;
