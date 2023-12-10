import checkboxCheckedImage from "../../../../assets/checkbox-checked.png";
import checkboxUncheckedImage from "../../../../assets/checkbox-unchecked.png";

function Checkbox({ desc, state, onStateToggle }) {
  return (
    <div className="px-2 flex flex-row items-center h-full">
      <img
        src={(state && checkboxCheckedImage) || checkboxUncheckedImage}
        alt=""
        onClick={() => {
          onStateToggle();
        }}
        className="h-[10px] opacity-50 cursor-pointer"
      />
      <span className="text-[9px]  select-none pl-1">{desc}</span>
    </div>
  );
}

export default Checkbox;
