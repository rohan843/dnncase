import classNames from "classnames";

function OptionButton({ children, className, active, ...props }) {
  return (
    <div
      className={classNames(
        "h-full cursor-pointer px-1 py-px rounded",
        "select-none",
        {
          "background-darker border-black": active,
          "hover-background-darker hover-border-black-else-dark": !active,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
export default OptionButton;
