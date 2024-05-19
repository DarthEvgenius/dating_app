export function setChatHeight() {
  const chatHeader = document.querySelector('.chat-header')
  const chatForm = document.querySelector('.chat-form')

  if (chatHeader && chatForm) {
    const windowHeight = window.innerHeight
    const chatbox__content = document.querySelector('.chatbox__content')


    const height = windowHeight - chatHeader.offsetHeight - chatForm.offsetHeight

    chatbox__content.style.maxHeight = `${height}px`
  }
}

