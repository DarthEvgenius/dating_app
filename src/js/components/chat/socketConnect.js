export function socketConnect(chatId, userId) {
  let url = `ws://vm592483.eurodir.ru/chat/${chatId}/${userId}/`
  let socket = new WebSocket(url);

  socket.onopen = function() {
    console.log("Socket connected:", socket);
  }

  socket.onmessage = function(event) {
    console.log(`Socket recieved data: ${event.data}`)
  }

  socket.onclose = function(event) {
    if (event.wasClean) {
      console.log(`Socket closed, code=${event.code}`);
    } else {
      console.log('Socket broken');
    }
  }

  socket.onerror = function(error) {
    console.log(error)
  }

  return socket
}
