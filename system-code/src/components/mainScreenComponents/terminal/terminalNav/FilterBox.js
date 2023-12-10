function FilterBox({ value, onValueChange }) {
  return (
    <div>
      <input
        type="text"
        className="placeholder-style background-light border-darker thin-inset-box-shadow flex flex-row items-center text-sm h-7 w-48 py-2 px-1"
        placeholder="filter"
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        name="filter-string"
        value={value}
        onChange={(e) => {
          onValueChange(e.target.value);
        }}
      />
    </div>
  );
}

export default FilterBox;
