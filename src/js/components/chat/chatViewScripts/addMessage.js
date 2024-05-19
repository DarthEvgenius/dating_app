import { createAvatarEl } from './createAvatar.js'
import { createTextEl } from './createTextElem.js'


export function addMessage(className, message) {

  // check valid className for message
  if (className === 'incoming' || className === 'outgoing') {
    // create class name
    const fullClassName = `chatbox__message--${className}`
    const textEl = createTextEl(message)

    const chatbox__content = document.querySelector('.chatbox__content')

    // find if there are any messages in the chat
    const messages = chatbox__content.querySelectorAll('.chatbox__message')
    const lastMessage = messages[messages.length - 1]

    // if there are no messages yet or the last message not from the same author
    if (!lastMessage || !lastMessage.classList.contains(fullClassName)) {

      // create new chatMessage group
      const chatMessage = document.createElement('div')
      chatMessage.classList.add('chatbox__message', fullClassName)

      if (className === 'incoming') {
        // add avatar elem for incoming messages
        const avatar = createAvatarEl()
        chatMessage.append(avatar)
      }

      chatMessage.append(textEl)
      chatbox__content.append(chatMessage)
    } else {
      lastMessage.appendChild(textEl)
    }



  } else {
    throw new SyntaxError(`className "${className}" for "createMessage" is not supported. Vaalid names: "incoming", "outgoing"`, {cause: 'invalid className'})
  }
}
