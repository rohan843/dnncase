import { useDispatch, useSelector } from "react-redux";
import { setLeftPane, removeLeftPane } from "../../../store";
import classNames from "classnames";

function Option({ iconPNG, title, paneID }) {
  const dispatch = useDispatch();

  const isCurPaneActivated =
    useSelector((state) => state.mainScreen.leftPane) === paneID;

  return (
    <div
      className={classNames(
        "py-2 flex flex-col items-center cursor-pointer rounded",
        {
          "hover-border-black-else-dark hover-background-darker":
            !isCurPaneActivated,
          "border-black background-darker": isCurPaneActivated,
        }
      )}
      onClick={() => {
        if (isCurPaneActivated) {
          dispatch(removeLeftPane());
        } else {
          dispatch(setLeftPane(paneID));
        }
      }}
    >
      <span className="vertical-left-up-text">{title}</span>
      <img className="w-4 mt-1" src={iconPNG} alt="" />
    </div>
  );
}

export default Option;
