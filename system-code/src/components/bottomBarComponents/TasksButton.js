import OptionButton from "./OptionButton";
import tasksImage from "../../assets/tasks.png";
import ToolTipWrapper from "../tooltipWrapper/ToolTipWrapper";

function TasksButton() {
  return (
    <ToolTipWrapper className="h-full" helpText="Tasks">
      <OptionButton active={false} onClick={() => {}}>
        <img className="h-full" src={tasksImage} alt="" />
      </OptionButton>
    </ToolTipWrapper>
  );
}

export default TasksButton;
