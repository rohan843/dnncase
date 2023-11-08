function H1Button({ config }) {
  if (!config.show) return null;
  return (
    <div
      className="w-[95%] h-10 cursor-pointer select-none text-2xl tracking-wide border-darker background-dark flex items-center mb-2 flex items-center overflow-y-hidden overflow-x-scroll hide-scrollbar break-keep whitespace-nowrap"
      onClick={config.onClick}
    >
      <span className="h-full grow"></span>
      <span className="px-1.5">{config.innerText}</span>
      <span className="h-full grow"></span>
    </div>
  );
}

export default H1Button;
