import pythonIcon from "../../../../../../assets/python-lang.png";
import OptionButtonStyling from "../OptionButtonStyling";

function PythonCodeGenButton({ onPythonCodeGen }) {
  return (
    <OptionButtonStyling
      iconPNG={pythonIcon}
      onClick={() => {
        onPythonCodeGen && onPythonCodeGen();
      }}
    />
  );
}

export default PythonCodeGenButton;
