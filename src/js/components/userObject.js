import { getCookie } from "./getCookie.js"
import { formDataToJSON } from "./formDataToJSON.js"

const userId = getCookie('userID')

// need URL with GET method for fetching userInfo

// const user = await getUserInfo()

// async function getUserInfo(userId) {
//   const response = await fetch(
//     `http://vm592483.eurodir.ru/api/v1/${userId}`
//   )

//   const user = await response.json()

//   return user
// }


// mock user object
const userObj = {
  id: 4,
  'username': 'tester55',
  'profile': {
    'full_name': 'Alex Brandt',
    'age': 31,
    'about_me': null,
    'gender': null,
    'birth_place': null,
    'location': null,
    'languages': null,
    'avatar': false
  },
  'subscription': {
    'title': null, // friends, love, work
    'subscription_info': {
      'description': null,
      'preferable_gender': null,
      'preferable_age': null,
      'occupation': null,
      'income': null
    }
  }
}

localStorage.setItem('userInfo', JSON.stringify(userObj))

export async function updateUser(formData) {
  // for server fetching
  // const user = await sendUserInfo(userId, data)

  // local use
  const user = JSON.parse(localStorage.getItem('userInfo'))
  for(let [name, value] of formData) {
    if (value) {
      user.profile[name] = value
    }
  }

  // always usable
  localStorage.setItem('userInfo', JSON.stringify(user))
}

// need formData format
async function sendUserInfo(userId, formData) {
  const data = formData

  // if server requires json
  // data = formDataToJSON(formData)

  const response = await fetch(
    `http://vm592483.eurodir.ru/api/v1/${userId}`,
    {
      method: "POST",
      headers: {
        // "Content-Type": "application/json",
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data
    }
  )
  const user = await response.json()
  return user
}
