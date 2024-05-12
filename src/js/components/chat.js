import { addMessage} from './chat/addMessage.js'
import { handleChatInput } from './chat/handleChatInput.js'
import { chatAutoScroll } from './chat/chatAutoScroll.js'
import { setChatHeight } from './chatboxHeight.js'
import { socketConnect } from './chat/chatSocket.js'

setChatHeight()
chatAutoScroll()
window.addEventListener('resize', setChatHeight)

const sendChatBtn = document.querySelector('#chat-submit')

let socket = socketConnect('wss://javascript.info/article/websocket/demo/hello')


// on user input
sendChatBtn.addEventListener('click', function(event) {
  const message = handleChatInput(event)
  socket.send(message)
  chatAutoScroll()
})

addMessage('outgoing', 'outgoing message')
addMessage('outgoing', 'outgoing message')
chatAutoScroll()
