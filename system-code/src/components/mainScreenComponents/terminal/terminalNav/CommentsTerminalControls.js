import { useDispatch, useSelector } from "react-redux";
import FilterBox from "./FilterBox";
import { setCommentsFilterString } from "../../../../store";

function CommentsTerminalControls() {
  const dispatch = useDispatch();
  const { filterString } = useSelector((state) => state.commentsTerminal);

  const handleFilterStringChange = (newFilterString) => {
    dispatch(setCommentsFilterString(newFilterString));
  };

  return (
    <div className="flex flex-row items-center">
      <FilterBox
        value={filterString}
        onValueChange={handleFilterStringChange}
      />
    </div>
  );
}

export default CommentsTerminalControls;
