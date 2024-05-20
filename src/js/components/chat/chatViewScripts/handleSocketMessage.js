import { addMessage } from "./addMessage.js"

export function handleSocketMessage(event, userId) {
  let data = event.data

  // convert from JSON
  data = JSON.parse(data)
  console.log('data obj', data);

  // add message only if sender is not the user itself
  if (parseInt(data.senderId) != parseInt(userId)) {
    addMessage('incoming', data.text)
  }
}
