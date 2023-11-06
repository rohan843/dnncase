import { useDispatch, useSelector } from "react-redux";
import { setActiveElementTo } from "../../store";
import { useEffect, useRef } from "react";

// This component wraps around some JSX elements and any time a click is detected
// on any of those elements, the provided ID is set as the active element's ID.
// (Repeated clicks on the same ActivatableEntity _donot_ trigger new dispatches;
// a dispatch is only triggered when the active ID and the provided ID are unequal.)
function ActivatableEntity({ id, children, ...props }) {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { id: activeElementID } = useSelector((store) => store.activeElement);

  useEffect(() => {
    const handleClick = () => {
      if (activeElementID !== id) {
        dispatch(setActiveElementTo(id));
      }
    };
    ref.addEventListener("click", handleClick, { capture: true });
    return () => {
      ref.removeEventListener("click", handleClick);
    };
  }, [activeElementID, dispatch, id]);

  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
}

export default ActivatableEntity;
