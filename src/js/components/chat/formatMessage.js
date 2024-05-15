// takes string returns JSON
export function formatMessage (str) {
  const userID = getCookie("userID")
  let json = JSON.stringify({
    "msg": {
      // get user ID from cookies
      "senderId": userID,
      // get user ID from ??
      "recipientId": "4",
      "text": str
  }})

  return json
}
