import { MajorEntityIDs } from "../../../constants";
import ActivatableEntity from "../../activationAndKeystrokeMonitoring/ActivatableEntity";

function Workspace() {
  console.log('re-render!');
  return (
    <ActivatableEntity id={MajorEntityIDs.workspace} className="w-full h-full z-0">
      <div className="w-full h-full z-0">Workspace</div>
    </ActivatableEntity>
  );
}

export default Workspace;
