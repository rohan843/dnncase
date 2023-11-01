function Option({ iconPNG, title }) {
  return (
    <div className="py-2 hover-border-black-else-dark rounded hover-background-darker flex flex-col items-center cursor-pointer">
      <span className="vertical-left-up-text">{title}</span>
      <img className="w-4 mt-1" src={iconPNG} alt="" />
    </div>
  );
}

export default Option;
