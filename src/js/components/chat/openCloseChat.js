import { setChatElementSizes } from './chatViewScripts/chatSizes.js'
import { setTextareaSize } from '../textarea-resize.js'
import { chatAutoScroll } from './chatViewScripts/chatAutoScroll.js'
import { socketConnect } from './chatLogic.js'
import { fetchChatInfo } from './fetchChatInfo.js'


export async function openChat(chatId, userId) {
  const chatElem = document.querySelector(`.chat`)
  chatElem.setAttribute('id', `chat-${chatId}`)
  const closeChatBtn = chatElem.querySelector('.chat-header__close')
  closeChatBtn.setAttribute('id', `chat-${chatId}-close`)
  chatElem.classList.remove('hidden')

  setChatElementSizes()
  setTextareaSize()
  chatAutoScroll()


  let fetchURL = `http://vm592483.eurodir.ru/api/v1/chat/${chatId}/`

  try {
    // fetch chat-info from the server
    const chatInfo = await fetchChatInfo(fetchURL)
    console.log(chatInfo);
    const senderId = userId

    chatInfo.users.forEach(user => {
      if (user.id != senderId) {
        const recipientId = user.id
      }
    })

    // init new chat socket
    // pass valid url for socket connection
    let socket = socketConnect(`ws://vm592483.eurodir.ru/chat/${senderId}/${recipientId}`)
    console.log('open chat id:', chatId)
    return socket

  } catch(e) {
    console.log(e.message);
  }

}

export function closeChat(id) {
  const chatElem = document.querySelector(`#chat-${id}`)
  chatElem.classList.add('hidden')
  console.log('close chat id:', id);
}
