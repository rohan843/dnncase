import newFolderImage from "../../../../assets/new-folder.png";

function NewFolderButton() {
  return (
    <div
      className="h-full w-max p-1.5 cursor-pointer opacity-50 hover:opacity-100"
      onClick={() => {
        // TODO: Add new file when this button clicked.
      }}
    >
      <img src={newFolderImage} alt="" className="h-full" />
    </div>
  );
}

export default NewFolderButton;
