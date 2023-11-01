function Terminal() {
  return (
    <div className="border-top-darker w-full h-20 background-dark z-10 absolute bottom-0">
      <div
        className="w-full h-[2px] -top-[1px] relative cursor-row-resize z-10"
        onDrag={(e) => {
          console.log(e);
        }}
        draggable="true"
      />
      Terminal
    </div>
  );
}

export default Terminal;
