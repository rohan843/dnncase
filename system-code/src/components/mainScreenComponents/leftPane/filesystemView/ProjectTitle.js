import { useDispatch, useSelector } from "react-redux";
import { changeTitle } from "../../../../store";

function ProjectTitle() {
  const dispatch = useDispatch();

  const title = useSelector((state) => state.filesystem.rootTitle);

  return (
    <div className="h-full flex flex-row items-center pl-1.5">
      <span className="font-medium text-lg">{title}</span>
    </div>
  );
}

export default ProjectTitle;
