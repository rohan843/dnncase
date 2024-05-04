import { Handle, Position } from "reactflow";
import classNames from "classnames";

const Div = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

const RepeatLoop = ({
  data: { name, onActivate, onActivateAndShowInPane },
  selected,
  handlesDisabled,
}) => {
  let HandleComponent = Handle;
  if (handlesDisabled) {
    HandleComponent = Div;
  }

  return (
    <div
      className={classNames(
        "w-max h-[200px] border relative flex flex-row z-0"
      )}
      onClick={() => {
        onActivate && onActivate();
      }}
      onDoubleClick={() => {
        onActivateAndShowInPane && onActivateAndShowInPane();
      }}
    >
      <div
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          transform: "rotate(180deg)",
        }}
        className={classNames(
          "w-[30px] h-full bg-[#D80073] border-2 pl-[3px] flex items-center justify-center text-white font-semibold",
          {
            "border-[#000000]": selected,
            "border-[#A50040]": !selected,
          }
        )}
      >
        Repeat Loop
      </div>
      <div
        className={classNames(
          "h-full w-max px-10 bg-transparent border-2 border-l-0 flex items-center justify-center",
          {
            "border-[#000000] border-l-[#A50040]": selected,
            "border-[#A50040]": !selected,
          }
        )}
      >
        <div
          title={name}
          className="max-w-[350px] h-[50px] min-w-[100px] flex justify-center items-center bg-[#F0A30A] border border-[#BD7000] px-2"
        >
          <p className="truncate whitespace-nowrap">{name}</p>
        </div>
      </div>
      <HandleComponent
        id="multi-in"
        type="target"
        className={classNames(
          "absolute -left-[10px] top-0 bottom-0 my-auto bg-[#fff4dc] border w-[20px] h-[20px] -z-10 rounded-full",
          {
            "border-[#000000]": selected,
            "border-[#826623]": !selected,
          }
        )}
        position={Position.Left}
      />
      <HandleComponent
        id="iteration-count"
        type="target"
        title="iteration-count"
        className={classNames(
          "absolute -left-[6px] top-[10px] bg-[#D80073] border border-[#A50040] w-[12px] h-[6px] rounded-none"
        )}
        position={Position.Left}
      />
      <HandleComponent
        id="out"
        type="source"
        className={classNames(
          "absolute -right-[6px] top-0 bottom-0 my-auto bg-[#D80073] border border-[#A50040] w-[12px] h-[6px] rounded-none"
        )}
        position={Position.Right}
      />
    </div>
  );
};

export default RepeatLoop;
