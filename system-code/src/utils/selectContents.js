// Takes an element by its DOM reference (use refs) and 'selects' all 
// its inner text.
export function selectContents(el) {
    let range = document.createRange();
    range.selectNodeContents(el);
    let sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }