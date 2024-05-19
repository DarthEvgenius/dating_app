import { closeChat, openChat } from './chat/openCloseChat.js'
import { showSwiper, hideSwiper } from './findSection.js'
import { handleChatInput } from './chat/chatViewScripts/handleChatInput.js'
import { chatAutoScroll } from './chat/chatViewScripts/chatAutoScroll.js'

import { setChatElementSizes } from './chat/chatViewScripts/chatSizes.js'
import { formatMessage } from './chat/formatMessage.js'
import { getCookie } from './getCookie.js'
import { fetchChatInfo } from './chat/fetchChatInfo.js'
import { socketConnect } from './chat/socketConnect.js'
import { handleSocketMessage } from './chat/chatViewScripts/handleSocketMessage.js'

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

    hideSwiper()

    // get chat info
    // expected object:
      // id: <int>>
      // users: [{userObj}, {userObj}]
      // messages: [
        // {id, from_user, to_user, text},
        //  ...]
      // created_at
      // updated_at
    const chatInfo = await fetchChatInfo(chatId)

    // render chat and add recipient to <chatInfo>
    chatInfo = openChat(chatInfo, userId)

    // open socket connection
    const socket = socketConnect(chatId, userId)

    // handle incoming messages
    socket.addEventListener('message', function(event, userId) {
      handleSocketMessage(event, userId)
      chatAutoScroll()
    })

    // on user input
    const sendChatBtn = document.querySelector('#chat-submit')
    sendChatBtn.addEventListener('click', function(event) {
      event.preventDefault()
      const message = handleChatInput(event)
      chatAutoScroll()
      socket.send(formatMessage(message))
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
