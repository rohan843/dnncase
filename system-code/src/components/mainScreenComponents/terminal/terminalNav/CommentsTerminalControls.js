import { useDispatch, useSelector } from "react-redux";
import FilterBox from "./FilterBox";
import { setCommentsFilterString } from "../../../../store";
import Checkbox from "./Checkbox";
import { toggleOnlyActiveFileComments } from "../../../../store";

function CommentsTerminalControls() {
  const dispatch = useDispatch();
  const { filterString, onlyActiveFileComments } = useSelector(
    (state) => state.commentsTerminal
  );

  const handleFilterStringChange = (newFilterString) => {
    dispatch(setCommentsFilterString(newFilterString));
  };

  return (
    <div className="flex flex-row items-center">
      <FilterBox
        value={filterString}
        onValueChange={handleFilterStringChange}
      />
      <Checkbox
        desc="Only show comments from active file."
        state={onlyActiveFileComments}
        onStateToggle={() => {
          dispatch(toggleOnlyActiveFileComments());
        }}
      />
    </div>
  );
}

export default CommentsTerminalControls;
