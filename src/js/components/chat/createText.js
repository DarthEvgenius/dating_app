export function createTextEl(text) {
  const textEl = document.createElement('p')
  textEl.className = 'chatbox__message-text'
  textEl.textContent = text
  return textEl
}
