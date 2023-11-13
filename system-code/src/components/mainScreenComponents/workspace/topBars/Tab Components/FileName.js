function FileName({ name, ...props }) {
  return (
    <span className="pr-1" {...props}>
      {name}
    </span>
  );
}
export default FileName;
