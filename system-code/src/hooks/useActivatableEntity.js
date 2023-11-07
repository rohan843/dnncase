// TODO: Profile this hook in depth to ensure no untoward re-renders are occurring.

import { useDispatch, useSelector } from "react-redux";
import { setActiveElementTo } from "../store";

/**
 * A hook that can be used to convert any given JSX element into an activatable entity. The activation will occur whenever a click event is detected on the element. Activation here means that the entity's ID will be set as the activeElement's ID in the redux store. (Repeated clicks on the same activatable entity _donot_ trigger new dispatches; a dispatch is only triggered when the active ID and the provided ID are unequal.)
 *
 * @param {string} entityID The (unique) ID of the element that is to be made activatable.
 * @returns A handler callback to be called on the _capture_ phase of a click event, i.e., `onClickCapture`.
 */
export default function useActivatableEntity(entityID) {
  const dispatch = useDispatch();
  const { id: activeElementID } = useSelector((store) => store.activeElement);

  const clickCaptureHandler = () => {
    if (entityID !== activeElementID) {
      dispatch(setActiveElementTo(entityID));
    }
  };

  return clickCaptureHandler;
}
