import { setChatElementSizes } from './chatViewScripts/chatSizes.js'
import { setTextareaSize } from '../textarea-resize.js'
import { chatAutoScroll } from './chatViewScripts/chatAutoScroll.js'
import { viewMessages } from './chatViewScripts/viewMessages.js'


export async function openChat(chatInfo, userId) {
  const chatElem = document.querySelector(`.chat`)
  chatElem.setAttribute('id', `chat-${chatInfo.id}`)
  const closeChatBtn = chatElem.querySelector('.chat-header__close')
  closeChatBtn.setAttribute('id', `chat-${chatInfo.id}-close`)
  chatElem.classList.remove('hidden')

  setChatElementSizes()
  setTextareaSize()
  chatAutoScroll()

  const senderId = userId
  const recipientId = getRecipientId(chatInfo, senderId)

  viewMessages(chatInfo, senderId, recipientId)

  chatInfo.recipient = recipientId

  return chatInfo

  // init new chat socket
  // pass valid url for socket connection
  // let socket = socketConnect(`ws://vm592483.eurodir.ru/chat/${chatId}/${senderId}/`)
  // console.log('open chat id:', chatId)
}

export function closeChat(id) {
  const chatElem = document.querySelector(`#chat-${id}`)
  chatElem.classList.add('hidden')
  console.log('close chat id:', id);
}

function getRecipientId(chatObj, senderId) {
  for (let user of chatObj.users) {
    if (user.id != senderId) {
      return user.id
    }
  }
}
