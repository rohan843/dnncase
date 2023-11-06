import QuickAddressBar from "./topBars/QuickAddressBar";
import TopTabBar from "./topBars/TopTabBar";

const dummyAddressList = [
  { name: "home1", onClick: () => {} },
  { name: "user1", onClick: () => {} },
  { name: "file1.txt", onClick: () => {} },
];

function Workspace() {
  return (
    <div className="w-full h-full z-0">
      <TopTabBar />
      <QuickAddressBar addressList={dummyAddressList} />
    </div>
  );
}

export default Workspace;
