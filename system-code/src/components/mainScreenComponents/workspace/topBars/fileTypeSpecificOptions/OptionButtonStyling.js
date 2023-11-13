function OptionButtonStyling({ iconPNG, onClick }) {
  return (
    <div
      className="h-8 w-8 py-1 flex items-center justify-center cursor-pointer rounded hover-background-darker"
      onClick={onClick}
    >
      <img src={iconPNG} alt="" className="h-6" />
    </div>
  );
}
export default OptionButtonStyling;
