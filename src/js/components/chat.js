import { closeChat, openChat } from './chat/openCloseChat.js'
import { showSwiper, hideSwiper } from './findSection.js'
import { addMessage } from './chat/chatViewScripts/addMessage.js'
import { handleChatInput } from './chat/chatViewScripts/handleChatInput.js'
import { chatAutoScroll } from './chat/chatViewScripts/chatAutoScroll.js'

import { setChatElementSizes } from './chat/chatViewScripts/chatSizes.js'
import { socketConnect } from './chat/chatLogic.js'
import { formatMessage } from './chat/formatMessage.js'

setChatElementSizes()
chatAutoScroll()
window.addEventListener('resize', setChatElementSizes)

let chatId = null

// listener for clicks on "chat-enter" buttons and open chats
document.addEventListener('click', (e) => {
  const chatEnter = e.target.closest('.chat-enter')

  if (chatEnter) {
    chatId = chatEnter.dataset.chatId
    openChat(chatId)
    hideSwiper()

    const closeChatBtn = document.querySelector(`#chat-${chatId}-close`)

    closeChatBtn.addEventListener('click', () => {
      socket.close(1000, `{userId} left chat`)
      closeChat(chatId)
      showSwiper()
    })
  }
})


// init new chat
// pass valid url for socket connection
let socket = socketConnect('ws://vm592483.eurodir.ru/chat/1/3')

// on user input
const sendChatBtn = document.querySelector('#chat-submit')
sendChatBtn.addEventListener('click', function(event) {
  const message = handleChatInput(event)
  socket.send(formatMessage(message))
  chatAutoScroll()
})
