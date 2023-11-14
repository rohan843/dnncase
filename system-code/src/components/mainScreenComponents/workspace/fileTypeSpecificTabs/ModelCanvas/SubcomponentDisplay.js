function SubcomponentDisplay({ children }) {
  return (
    <div className="w-full h-max break-words flex flex-col items-center justify-center">
      {children}
    </div>
  );
}
export default SubcomponentDisplay;
