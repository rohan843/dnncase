import Menu from "./Menu";

const menuData = [
  { name: "File" },
  { name: "Edit" },
  { name: "View" },
  { name: "Arrange" },
  { name: "Settings" },
  { name: "Help" },
];

function MenuList() {
  const individualMenusList = menuData.map((menu) => (
    <Menu key={menu.name} title={menu.name} />
  ));
  return <div className="flex flex-row">{individualMenusList}</div>;
}

export default MenuList;
