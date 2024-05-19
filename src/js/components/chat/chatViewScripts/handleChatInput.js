import { addMessage } from "./addMessage.js"

export function handleChatInput(event) {
  const inputField = document.querySelector('#chat-form__input')
  const userMessage = inputField.value.trim()

  if(!userMessage) return

  addMessage('outgoing', userMessage)
  inputField.value = ''

  return userMessage
}
