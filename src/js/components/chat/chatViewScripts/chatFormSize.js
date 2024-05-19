export function setChatFormSize() {
  const chatForm = document.querySelector('.chat-form')
  const chatboxWidth = document.querySelector('.chatbox')?.offsetWidth

  if (chatForm && chatboxWidth){
    chatForm.style.width = `${chatboxWidth}px`
  }
}
