import { closeChat, openChat } from './chat/openCloseChat.js'
import { showSwiper, hideSwiper } from './findSection.js'
import { handleChatInput } from './chat/chatViewScripts/handleChatInput.js'
import { chatAutoScroll } from './chat/chatViewScripts/chatAutoScroll.js'

import { setChatElementSizes } from './chat/chatViewScripts/chatSizes.js'
import { formatMessage } from './chat/formatMessage.js'
import { getCookie } from './getCookie.js'

window.addEventListener('resize', setChatElementSizes)

// Delete this!
// document.cookie = "userID=4"

const userId = getCookie("userID")
let chatId = null

// listener for clicks on "chat-enter" buttons and open chats
document.addEventListener('click', async function (e)  {
  const chatEnter = e.target.closest('.chat-enter')

  if (chatEnter) {
    chatId = chatEnter.dataset.chatId

    // enter chat
    const socket = await openChat(chatId, userId)
    hideSwiper()

    // on user input
    const sendChatBtn = document.querySelector('#chat-submit')
    sendChatBtn.addEventListener('click', function(event) {
      const message = handleChatInput(event)
      socket.send(formatMessage(message))
      chatAutoScroll()
    })

    // close chat
    const closeChatBtn = document.querySelector(`#chat-${chatId}-close`)
    closeChatBtn.addEventListener('click', function() {
      console.log(socket);
      socket.close(1000, `${userId} left chat`)
      closeChat(chatId)
      showSwiper()
    })
  }
})
