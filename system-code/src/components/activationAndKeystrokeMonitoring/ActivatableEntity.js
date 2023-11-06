import { useDispatch, useSelector } from "react-redux";
import { setActiveElementTo } from "../../store";

// This component wraps around some JSX elements and any time a click is detected
// on any of those elements, the provided ID is set as the active element's ID.
// (Repeated clicks on the same ActivatableEntity _donot_ trigger new dispatches;
// a dispatch is only triggered when the active ID and the provided ID are unequal.)
function ActivatableEntity({ id, children, ...props }) {
  const dispatch = useDispatch();
  const { id: activeElementID } = useSelector((store) => store.activeElement);

  const handleClick = () => {
    if (activeElementID !== id) {
      dispatch(setActiveElementTo(id));
    }
  };

  return (
    <div onClickCapture={handleClick} {...props}>
      {children}
    </div>
  );
}

export default ActivatableEntity;
