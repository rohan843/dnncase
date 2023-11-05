// TODO: Tune this for comments (.md too).

import errorIcon from "../../../../assets/error.png";
import warningIcon from "../../../../assets/warning.png";
import infoIcon from "../../../../assets/info.png";

function CommentsMessageDisplay({ context, item }) {
  return (
    <div className="w-full h-max flex flex-row  mb-1 rounded">
      {/* Arrow */}
      <div
        {...context.arrowProps}
        className="h-full w-[2rem] select-none pt-0.5"
      >
        <img
          src={
            (item.data.messageContent.type === "error" && errorIcon) ||
            (item.data.messageContent.type === "warning" && warningIcon) ||
            (item.data.messageContent.type === "info" && infoIcon)
          }
          alt=""
          className="h-5 w-5 mx-1"
        />
      </div>
      {/* Message */}
      <div className="ml-1 w-[calc(100%-2rem)] whitespace-break-spaces">
        <div>
          <span>{item.data.messageContent.message}</span>
          {"  "}
          <span className="font-medium italic">
            {item.data.messageContent.affectedNodes &&
              item.data.messageContent.affectedNodes.join(" ")}
          </span>
          {"    "}
          <span className="font-light italic">
            {item.data.messageContent.displayPositionCoordinates &&
              `pos=(${item.data.messageContent.displayPositionCoordinates[0]},${item.data.messageContent.displayPositionCoordinates[1]})`}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CommentsMessageDisplay;
