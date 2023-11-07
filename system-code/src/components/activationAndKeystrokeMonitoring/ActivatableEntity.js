// TODO: Profile this component in depth to ensure no untoward re-renders are occurring.

import { useDispatch, useSelector } from "react-redux";
import { setActiveElementTo } from "../../store";

// This component wraps around some JSX elements and any time a click is detected
// on any of those elements, the provided ID is set as the active element's ID.
// (Repeated clicks on the same ActivatableEntity _donot_ trigger new dispatches;
// a dispatch is only triggered when the active ID and the provided ID are unequal.)
//
// CSS Note: This wraps elements in a div. Any classes (esp. height and width) must be
// applied to this element just as if they are being applied to a parent div.
function ActivatableEntity({ id, children, ...props }) {
  throw Error(
    "This component is not to be used any more. Use the `useActivatableEntity` hook instead."
  );

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
