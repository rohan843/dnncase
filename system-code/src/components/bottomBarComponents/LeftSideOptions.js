import ValidationButton from "./ValidationButton";
import LogsButton from "./LogsButton";
import CommentsButton from "./CommentsButton";

function LeftSideOptions() {
  return (
    <div className="h-3/4 flex flex-row">
      {/* <ValidationButton /> */}
      <LogsButton />
      <CommentsButton />
    </div>
  );
}

export default LeftSideOptions;
