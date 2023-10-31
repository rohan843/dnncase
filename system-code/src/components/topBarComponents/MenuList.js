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
  const individualMenusList = menuData.forEach((menu) => (
    <Menu key={menu.name} title={menu.name} />
  ));
  return <div>{individualMenusList}</div>;
}

export default MenuList;
