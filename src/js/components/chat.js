import { addMessage} from './chat/chatViewScripts/addMessage.js'
import { handleChatInput } from './chat/chatViewScripts/handleChatInput.js'
import { chatAutoScroll } from './chat/chatViewScripts/chatAutoScroll.js'
import { setChatHeight } from './chatboxHeight.js'
import { socketConnect } from './chat/chatLogic.js'
import { formatMessage } from './chat/formatMessage.js'

setChatHeight()
chatAutoScroll()
window.addEventListener('resize', setChatHeight)

const sendChatBtn = document.querySelector('#chat-submit')
const closeChatBtn = document.querySelector('#chat-close')

let socket = socketConnect('ws://javascript.info/article/websocket/demo/hello')

// let socket = new WebSocket('ws://vm592483.eurodir.ru/chat/1/3')

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
