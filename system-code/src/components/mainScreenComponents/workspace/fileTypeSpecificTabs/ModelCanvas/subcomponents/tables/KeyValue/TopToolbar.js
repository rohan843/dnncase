import plusIcon from "../../../../../../../../assets/plus.png";
import newWindowIcon from "../../../../../../../../assets/open-in-new-window.png";

/**
 * The toolbar that supports actions to data displayed as key-value pairs.
 * @param {Object} props
 * @param {Function} props.onAdd The action to do when the 'add' button is clicked.
 * @param {Function} props.onNewWindow The action to do when the 'open in new window' option is clicked.
 */
function TopToolbar({ onAdd, onNewWindow }) {
  return (
    <div className="flex flex-row items-center w-full h-7 border-bottom-darker rounded-b">
      <div
        className="w-5 h-5 cursor-pointer hover-background-dark rounded flex items-center justify-center hover-border-black mx-1 active-thin-inset-box-shadow"
        onClick={() => {
          onAdd();
        }}
      >
        <img src={plusIcon} alt="" className="w-4 h-auto" />
      </div>
      <div className="grow" />
      <div
        className="w-5 h-5 cursor-pointer hover-background-dark rounded flex items-center justify-center hover-border-black mx-1 active-thin-inset-box-shadow"
        onClick={onNewWindow}
      >
        <img src={newWindowIcon} alt="" className="w-4 h-auto" />
      </div>
    </div>
  );
}

export default TopToolbar;
