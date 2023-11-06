// TODO: Make this controlled

function UserCommandEntryBox() {
  return (
    <div className="h-full flex items-center justify-center rounded grow mx-32">
      <input
        type="text"
        className="user-command-placeholder-style background-light thin-inset-box-shadow flex flex-row items-center text-sm h-7 py-2 px-1 w-full rounded border-black"
        placeholder="Write any command here"
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        name="command-string"
      />
    </div>
  );
}

export default UserCommandEntryBox;
