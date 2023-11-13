import PythonCodeGenButton from "./PythonCodeGenButton";

const permissibleFileTypes = {
  dc: true,
};

function DCOptions({ activeFileType }) {
  if (!permissibleFileTypes[activeFileType]) return null;
  return (
    <div className="h-full w-max flex items-center">
      <PythonCodeGenButton />
    </div>
  );
}

export default DCOptions;
