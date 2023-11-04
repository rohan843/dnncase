import LogMessage from "./LogMessage";

function LogsTerminalContent() {
  return (
    <div className="flex flex-col pb-2">
      <LogMessage
        timestamp="[17/9/2023 20:15]"
        logString="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio nemo omnis, repellendus sapiente accusantium officiis eius atque commodi quas quam dicta accusamus magni recusandae velit voluptatem vel ipsam rem aspernatur."
      />
    </div>
  );
}

export default LogsTerminalContent;
