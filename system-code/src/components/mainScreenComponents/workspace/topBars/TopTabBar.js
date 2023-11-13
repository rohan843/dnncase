import CurrentlyActiveOptions from "./CurrentlyActiveOptions";
import TabsList from "./TabsList";

function TopTabBar({ openFiles }) {
  return (
    <div className="w-full h-[2.5rem] background-dark border-bottom-darker flex flex-row items-center justify-between">
      <TabsList openFiles={openFiles} />
      <CurrentlyActiveOptions activeFileIndex={openFiles[0].fileIndex} />
    </div>
  );
}

export default TopTabBar;
