export async function sendMessageToServer(url, textMessage, date) {
  fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  body: JSON.stringify({
    text: textMessage,
    date: date
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
}).then(console.log('message was sent to server:', textMessage))
}
