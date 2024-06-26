import closeImage from "../../../../../assets/close.png";

function CloseButton({ onClick }) {
  return (
    <img
      src={closeImage}
      alt=""
      onClick={(e) => {
        e.stopPropagation();
        onClick && onClick(e);
      }}
      className="h-3 opacity-70 pl-0.5 hover:opacity-100"
    />
  );
}

export default CloseButton;
