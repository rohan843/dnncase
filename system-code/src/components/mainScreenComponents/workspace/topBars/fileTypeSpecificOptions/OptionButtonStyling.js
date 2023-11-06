function OptionButtonStyling({ iconPNG }) {
  return (
    <div className="h-8 w-8 flex items-center justify-center cursor-pointer rounded hover-background-darker">
      <img src={iconPNG} alt="" className="h-6" />
    </div>
  );
}
export default OptionButtonStyling;
