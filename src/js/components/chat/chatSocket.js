import { addMessage } from './addMessage.js'
import { chatAutoScroll } from './chatAutoScroll.js'

export function socketConnect(url) {
  let socket = new WebSocket(url);

  socket.onopen = function(e) {
    console.log("[open] Соединение установлено");
  }

  socket.onmessage = function(event) {
    console.log(`[message] Данные получены с сервера: ${event.data}`)

    addMessage('incoming', event.data)
    chatAutoScroll()
  }

  socket.onclose = function(event) {
    if (event.wasClean) {
      console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
    } else {
      console.log('[close] Соединение прервано');
    }
  }

  socket.onerror = function(error) {
    console.log(`${error}`)
  }

  return socket
}
