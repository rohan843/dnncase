function Option({ iconPNG, title }) {
  return (
    <div style={{
        writingMode: "vertical-lr",
        transform: "rotate(180deg)"
    }} className="py-3 hover-border-black-else-dark rounded hover-background-darker flex flex-row items-center">
      <img className="w-3 mt-1" src={iconPNG} alt="" />
      {title}
    </div>
  );
}

export default Option;
