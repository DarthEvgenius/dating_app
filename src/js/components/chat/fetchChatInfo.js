import { getCookie } from '../getCookie.js'

export async function fetchChatInfo(chatId) {
  // const token = '"dGVzdGVyNTU=.cGJrZGYyX3NoYTI1NiQ3MjAwMDAkZjc3ZTY0ZTA0OWI5Y2ZiYjBlNTk1ZmViMzNkNTJlZmM1YTIxMWYzNGUxYzUyMWMxZDEzYzg4ODU5MTQyZjJmOSRZMDI5K25NbVd2bFc3YzYwYTE2U2ZUQXd1V1J5NjFNb3JGUnRaMlVIVUZJPQ=="'
  const token = getCookie("ws_login")

  let url = `http://vm592483.eurodir.ru/api/v1/chat/${chatId}/`

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `${token}`
      }
    })

    localStorage.setItem('chatInfo', response)

    const chatInfo = await response.json()

    return chatInfo

  } catch(error) {
    console.log(error);

  }

  // if (!response.ok) {
  //   const message = `An error has occured: ${response.status}`;
  //   throw new Error(message);
  // }
}
