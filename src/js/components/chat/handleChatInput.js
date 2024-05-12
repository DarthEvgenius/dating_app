import { addMessage } from "./addMessage.js"
import { sendMessageToServer } from "./sendMessageToServer.js"

export async function handleChatInput(event) {
  event.preventDefault()

  const inputField = document.querySelector('#chat-form__input')
  const userMessage = inputField.value.trim()

  if(!userMessage) return

  addMessage('outgoing', userMessage)
  inputField.value = ''

  await sendMessageToServer('url', userMessage, new Date())

  return userMessage
}
