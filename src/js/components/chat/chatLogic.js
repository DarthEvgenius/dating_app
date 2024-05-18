import { addMessage } from './chatViewScripts/addMessage.js'
import { chatAutoScroll } from './chatViewScripts/chatAutoScroll.js'
import { getCookie } from '../getCookie.js'

export function socketConnect(url) {
  let socket = new WebSocket(url);

  // get the ID of logged in user
  const userID = getCookie("userID")

  socket.onopen = function(e) {
    console.log("[open] Соединение установлено");
  }

  socket.onmessage = function(event) {
    let data = event.data
    console.log(`[message] Данные получены с сервера: ${data}`)

    // convert from JSON
    data = JSON.parse(data)

    // add message only if sender is not the user itself
    if (parseInt(data.senderId) != parseInt(userID)) {
      addMessage('incoming', data.text)
    }

    chatAutoScroll()
  }

  socket.onclose = function(event) {
    if (event.wasClean) {
      console.log(`[close] Соединение закрыто чисто, код=${event.code}`);
    } else {
      console.log('[close] Соединение прервано');
    }
  }

  socket.onerror = function(error) {
    console.log(`socket error`)
  }

  return socket
}
