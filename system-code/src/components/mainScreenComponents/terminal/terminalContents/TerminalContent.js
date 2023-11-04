// This component guarantees vertical scrolling, so its children can assume infinite height
// However, any children must be responsive to width (i.e., x-direction). There is only a
// finite width available and any x-overflows are hidden. In case of text wrapping, consider
// the following CSS styles to allow hyphenation (hyphens) and automatic work break (overflow-wrap):
//      hyphens: auto;              -> break-and-wrap-large-words
//      overflow-wrap: anywhere;    -> hyphenate-word-breaks-automatically
function TerminalContent() {
  return (
    <div className="w-full terminal-content-height pl-1 pr-2 pt-1 overflow-y-auto overflow-x-hidden stable-scrollbar-gutter style-scrollbar-rounded-no-buttons"></div>
  );
}

export default TerminalContent;
