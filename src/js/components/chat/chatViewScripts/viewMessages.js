import { addMessage } from './addMessage.js'

export function viewMessages(chatInfo, senderId) {
  chatInfo.messages.forEach(message => {
    message.from_user.id == senderId ?
      addMessage('outgoing', message.text) :
      addMessage('incoming', message.text)
  })
  chatAutoScroll()
}
