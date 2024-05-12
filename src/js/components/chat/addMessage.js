import { createAvatarEl } from './createAvatar.js'
import { createTextEl } from './createText.js'


export function addMessage(className, message) {

  // check valid className for message
  if (className === 'incoming' || className === 'outgoing') {
    // let lastMessage = null
    const chatbox__content = document.querySelector('.chatbox__content')
    const messages = chatbox__content.querySelectorAll('.chatbox__message')
    const lastMessage = messages[messages.length - 1]

    const fullClassName = `chatbox__message--${className}`

    const textEl = createTextEl(message)

    if (!lastMessage.classList.contains(fullClassName)) {

      // if the last message is not from the same author
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
