import { useDispatch, useSelector } from "react-redux";
import { setActiveElementTo } from "../../store";
import { useEffect, useRef } from "react";

function ActivatableEntity({ id, children }) {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { id: activeElementID } = useSelector((store) => store.activeElement);

  useEffect(() => {
    const handleClick = () => {
      if (activeElementID !== id) {
        dispatch(setActiveElementTo(id));
      }
    };
    ref.addEventListener("click", handleClick);
    return () => {
      ref.removeEventListener("click", handleClick);
    };
  }, [activeElementID, dispatch, id]);

  return <div ref={ref}>{children}</div>;
}

export default ActivatableEntity;
