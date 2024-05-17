import { addMessage} from './chat/chatViewScripts/addMessage.js'
import { handleChatInput } from './chat/chatViewScripts/handleChatInput.js'
import { chatAutoScroll } from './chat/chatViewScripts/chatAutoScroll.js'

import { setChatElementSizes } from './chat/chatViewScripts/chatSizes.js'
import { socketConnect } from './chat/chatLogic.js'
import { formatMessage } from './chat/formatMessage.js'

setChatElementSizes()
chatAutoScroll()
window.addEventListener('resize', setChatElementSizes)

const sendChatBtn = document.querySelector('#chat-submit')
const closeChatBtn = document.querySelector('#chat-close')


// let socket = socketConnect('ws://javascript.info/article/websocket/demo/hello')

let socket = socketConnect('ws://vm592483.eurodir.ru/chat/1/3')

// on user input
sendChatBtn.addEventListener('click', function(event) {
  const message = handleChatInput(event)
  socket.send(formatMessage(message))
  chatAutoScroll()
})

// close chat
closeChatBtn.addEventListener('click', function(event) {
  socket.close(1000, `userID left chat`)
})

// examples. Delete next 3 lines
addMessage('outgoing', 'outgoing message')
addMessage('incoming', 'incoming message')
chatAutoScroll()
