import { setChatElementSizes } from './chatViewScripts/chatSizes.js'
import { setTextareaSize } from '../textarea-resize.js'
import { chatAutoScroll } from './chatViewScripts/chatAutoScroll.js'

const chatElem = document.querySelector('.chat')

export function closeChat(id) {
  const chatElem = document.querySelector(`#chat-${id}`)
  chatElem.classList.add('hidden')
  console.log('close chat id:', id);
}

export function openChat(id) {
  const chatElem = document.querySelector(`.chat`)
  chatElem.setAttribute('id', `chat-${id}`)
  const closeChatBtn = chatElem.querySelector('.chat-header__close')
  closeChatBtn.setAttribute('id', `chat-${id}-close`)
  chatElem.classList.remove('hidden')
  setChatElementSizes()
  setTextareaSize()
  chatAutoScroll()
  console.log('open chat id:', id);
}


