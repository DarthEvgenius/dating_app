// import { getCookie } from '../getCookie.js'

// takes string returns JSON
export function formatMessage (message, userId, chatInfo) {
  // const userID = getCookie("userID")
  let json = JSON.stringify({
    "msg": {
      // get user ID from cookies
      "senderId": userId,
      // get user ID from ??
      "recipientId": chatInfo.recipient,
      "text": message
  }})

  return json
}
