export async function fetchChatInfo(url) {
  const token = '"dGVzdGVyNTU=.cGJrZGYyX3NoYTI1NiQ3MjAwMDAkZjc3ZTY0ZTA0OWI5Y2ZiYjBlNTk1ZmViMzNkNTJlZmM1YTIxMWYzNGUxYzUyMWMxZDEzYzg4ODU5MTQyZjJmOSRZMDI5K25NbVd2bFc3YzYwYTE2U2ZUQXd1V1J5NjFNb3JGUnRaMlVIVUZJPQ=="'

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `${token}`
    }
  })

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  localStorage.setItem('chatInfo', response)

  const chatInfo = await response.json()

  return chatInfo
}
