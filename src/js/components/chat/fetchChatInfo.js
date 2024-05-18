export async function fetchChatInfo(url) {

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })

  console.log(response);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const chatInfo = await response.json()
  return chatInfo.parse()
}
