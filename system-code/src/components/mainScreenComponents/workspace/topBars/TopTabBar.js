import CurrentlyActiveOptions from "./CurrentlyActiveOptions";
import TabsList from "./TabsList";

function TopTabBar() {
  return (
    <div className="w-full h-[2.5rem] background-dark border-bottom-darker flex flex-row items-center justify-between">
      <TabsList />
      <CurrentlyActiveOptions />
    </div>
  );
}

export default TopTabBar;
