export function handleSocketMessage(event, userId) {
  // const userId =
  let data = event.data

  // convert from JSON
  data = JSON.parse(data)

  // add message only if sender is not the user itself
  if (parseInt(data.senderId) != parseInt(userId)) {
    addMessage('incoming', data.text)
  }
}
