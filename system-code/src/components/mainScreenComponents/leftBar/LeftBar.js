import OptionsList from "./OptionsList";

function LeftBar() {
  return (
    <div className="border-darker p-px h-full background-dark overflow-y-auto hide-scrollbar">
      <OptionsList />
    </div>
  );
}

export default LeftBar;
