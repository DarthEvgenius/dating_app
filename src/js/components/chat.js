import { closeChat, openChat } from './chat/openCloseChat.js'
import { deleteChat } from './chat/chatViewScripts/deleteChat.js'
import { showSwiper, hideSwiper } from './find-section/findSwiperHideToggle.js'
import { handleChatInput } from './chat/chatViewScripts/handleChatInput.js'
import { chatAutoScroll } from './chat/chatViewScripts/chatAutoScroll.js'
import { renderNewChat } from './chat/chatViewScripts/renderNewChat.js'
import { setChatElementSizes } from './chat/chatViewScripts/chatSizes.js'
import { formatMessage } from './chat/formatMessage.js'
import { getCookie } from './getCookie.js'
import { fetchChatInfo } from './chat/fetchChatInfo.js'
import { socketConnect } from './chat/socketConnect.js'
import { handleSocketMessage } from './chat/chatViewScripts/handleSocketMessage.js'

window.addEventListener('resize', setChatElementSizes)

const userId = getCookie("userID")
let chatId = null

// listener for clicks on "chat-enter" buttons and open chats
document.addEventListener('click', async function (e)  {
  const chatEnter = e.target.closest('.chat-enter')

  if (chatEnter) {
    chatId = chatEnter.dataset.chatId

    // hide find-match-swiper
    hideSwiper()
    // remove old chat
    deleteChat()
    // create new chat
    renderNewChat(chatId)

    // get chat info
    // expected object:
      // id: <int>>
      // users: [{userObj}, {userObj}]
      // messages: [
        // {id, from_user, to_user, text},
        //  ...]
      // created_at
      // updated_at

    // let chatInfo = await fetchChatInfo(chatId)

    // mock chatInfo obj
    let chatInfo = {
      id: chatId,
      users: [
        {
          id: 2,
          'first_name': 'id-2',
          'username': 'tester1'
        },
        {
          id: 4,
          'first_name': 'id-4',
          'username': 'tester55'
        }
      ],
      messages: [
        {
          "id": 1,
          "from_user": {
              "id": 2,
          },
          "to_user": {
            "id": 4,
          },
          "text": "Hi, 55"
        }
      ]
    }

    // open chat and add 'recipient' key to <chatInfo>
    chatInfo = openChat(chatInfo, userId)
    chatAutoScroll()

    // open socket connection
    const socket = socketConnect(chatId, userId)

    // handle incoming messages
    socket.addEventListener('message', function(event) {
      console.log(`Socket recieved data: ${event.data}`)
      handleSocketMessage(event, userId)
      chatAutoScroll()
    })

    // on user input
    const sendChatBtn = document.querySelector('#chat-submit')

    if (sendChatBtn) {
      sendChatBtn.addEventListener('click', function(event) {
        event.preventDefault()
        const message = handleChatInput(event)
        chatAutoScroll()
        socket.send(formatMessage(message, userId, chatInfo))
      })
    }

    // close chat
    const closeChatBtn = document.querySelector(`#chat-${chatId}-close`)

    if (closeChatBtn) {
      closeChatBtn.addEventListener('click', function() {
        console.log(socket);
        socket.close(1000, `${userId} left chat`)
        closeChat(chatId)
        showSwiper()
      })
    }

  }
})
