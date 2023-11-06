import { MajorEntityIDs } from "../../../constants";
import ActivatableEntity from "../../activationAndKeystrokeMonitoring/ActivatableEntity";

function Workspace() {
  return (
    <ActivatableEntity id={MajorEntityIDs.workspace}>
      <div className="w-full h-full z-0">Workspace</div>
    </ActivatableEntity>
  );
}

export default Workspace;
