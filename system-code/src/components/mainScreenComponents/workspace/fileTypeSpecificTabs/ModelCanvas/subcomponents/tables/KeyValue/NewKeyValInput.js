import classNames from "classnames";
import { useRef, useState } from "react";

function NewKeyValInput({ onNewKeyValueInputSubmit }) {
  const [inputKey, setInputKey] = useState("");
  const [inputValue, setInputValue] = useState("");
  const formRef = useRef(null);

  if (!onNewKeyValueInputSubmit) {
    console.warn(
      "NewKeyValInput: New Key Value form is being used but o submit handler is provided."
    );
  }
  const backgroundColorClass = "background-light";
  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        onNewKeyValueInputSubmit &&
          onNewKeyValueInputSubmit(inputKey, inputValue);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onNewKeyValueInputSubmit &&
            onNewKeyValueInputSubmit(inputKey, inputValue);
        }
      }}
    >
      <div className="min-h-[2rem] flex flex-row items-center justify-evenly my-1 font-mono">
        {/* Key */}
        <div
          className={classNames(
            "w-[45%] self-stretch flex items-center justify-evenly break-all border-charcoal rounded px-1 py-2 relative overflow-hidden",
            backgroundColorClass
          )}
        >
          <input
            type="text"
            id="keyInput"
            value={inputKey}
            onChange={(e) => {
              const newVal = e.target.value;
              setInputKey(newVal);
            }}
            placeholder="key"
            className="h-max w-full bg-transparent text-center"
            autoCapitalize="off"
            autoComplete="off"
            spellCheck={false}
            autoCorrect="off"
            autoFocus={false}
          />
        </div>
        {/* Value */}
        <div
          className={classNames(
            "relative w-[45%] self-stretch flex items-center justify-evenly break-all border-charcoal rounded px-1 overflow-hidden",
            backgroundColorClass
          )}
        >
          <input
            type="text"
            id="valueInput"
            value={inputValue}
            onChange={(e) => {
              const newVal = e.target.value;
              setInputValue(newVal);
            }}
            placeholder="value"
            className="h-max w-full bg-transparent text-center"
            autoCapitalize="off"
            autoComplete="off"
            spellCheck={false}
            autoCorrect="off"
            autoFocus={false}
          />
        </div>
      </div>
    </form>
  );
}

export default NewKeyValInput;
