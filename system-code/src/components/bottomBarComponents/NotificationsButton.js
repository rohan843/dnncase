import OptionButton from "./OptionButton";
import notificationsNoneImage from "../../assets/notifications-none.png";
import notificationsUnseenImage from "../../assets/notifications-unseen.png";
import ToolTipWrapper from "../tooltipWrapper/ToolTipWrapper";

const unseenNotifsPresent = true;

function NotificationsButton() {
  return (
    <ToolTipWrapper
      className="h-full"
      helpText={
        (!unseenNotifsPresent && "0<br />Notifications") ||
        "Unseen<br />Notifications"
      }
    >
      <OptionButton active={false} onClick={() => {}}>
        <img
          className="h-full"
          src={
            (!unseenNotifsPresent && notificationsNoneImage) ||
            notificationsUnseenImage
          }
          alt=""
        />
      </OptionButton>
    </ToolTipWrapper>
  );
}

export default NotificationsButton;
