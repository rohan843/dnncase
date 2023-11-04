import { useSelector } from "react-redux";
import LogsTerminalControls from "./LogsTerminalControls";
import CommentsTerminalControls from "./CommentsTerminalControls";
import ValidationTerminalControls from "./ValidationTerminalControls";
import { TerminalIDs } from "../../../../constants";

function TerminalSpecificControls() {
  const { terminal } = useSelector((store) => store.mainScreen);

  const elementToShow =
    (terminal === TerminalIDs.logs && <LogsTerminalControls />) ||
    (terminal === TerminalIDs.comments && <CommentsTerminalControls />) ||
    (terminal === TerminalIDs.validation && <ValidationTerminalControls />);

  return <div>{elementToShow}</div>;
}

export default TerminalSpecificControls;
