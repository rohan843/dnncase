import NotificationsButton from "./NotificationsButton";
import TasksButton from "./TasksButton";

function RightSideOptions() {
  return (
    <div className="h-3/4 w-max flex flex-row px-1">
      <TasksButton />
      <NotificationsButton />
    </div>
  );
}

export default RightSideOptions;
