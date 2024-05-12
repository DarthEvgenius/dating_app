export function chatAutoScroll() {
  const chatbox__content = document.querySelector('.chatbox__content')
  chatbox__content.scrollTo({
    top: chatbox__content.scrollHeight,
    left: 0,
    behavior: "smooth"
  })
}

