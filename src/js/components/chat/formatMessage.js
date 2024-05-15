// takes string returns JSON
export function formatMessage (str) {
  let json = JSON.stringify({
    "msg": {
      // get user ID from cookies
      "senderId": "3",
      // get user ID from ??
      "recipientId": "4",
      "text": str
  }})

  return json
}
