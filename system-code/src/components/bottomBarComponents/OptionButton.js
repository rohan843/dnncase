import classNames from "classnames";

function OptionButton({ children, className, ...props }) {
  return (
    <div
      className={classNames(
        className,
        "h-full cursor-pointer px-1 py-px rounded hover-background-darker hover-border-black-else-dark",
        ""
      )}
      {...props}
    >
      {children}
    </div>
  );
}
export default OptionButton;
