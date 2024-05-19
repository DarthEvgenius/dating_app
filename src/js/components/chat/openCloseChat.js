import { setChatElementSizes } from './chatViewScripts/chatSizes.js'
import { setTextareaSize } from '../textarea-resize.js'
import { chatAutoScroll } from './chatViewScripts/chatAutoScroll.js'
import { socketConnect } from './chatLogic.js'
import { fetchChatInfo } from './fetchChatInfo.js'
import { addMessage } from './chatViewScripts/addMessage.js'


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
  // let fetchURL = `"wss://javascript.info/article/websocket/demo/hello"`

  // try {
    // fetch chat-info from the server
    const chatInfo = await fetchChatInfo(fetchURL)
    console.log(chatInfo);

    const senderId = userId
    const recipientId = getRecipientId(chatInfo, senderId)

    viewMessages(chatInfo, senderId, recipientId)

    // init new chat socket
    // pass valid url for socket connection
    let socket = socketConnect(`ws://vm592483.eurodir.ru/chat/${chatId}/${senderId}/`)
    console.log('open chat id:', chatId)
    return socket

  // } catch(e) {
  //   throw e;
  // }

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

function viewMessages(chatInfo, senderId) {
  chatInfo.messages.forEach(message => {
    message.from_user.id == senderId ?
      addMessage('outgoing', message.text) :
      addMessage('incoming', message.text)
  })
  chatAutoScroll()
}
