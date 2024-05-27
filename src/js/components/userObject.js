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

export class User {
  constructor(userObj) {
    Object.assign(this, userObj)
  }
}


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
    'title': '', // friends, love, work
    'subscription_info': {
      'description': null,
      'preferable_gender': null,
      'preferable_age': null,
      'occupation': null,
      'income': null
    }
  }
}

export let user = new User(userObj)

localStorage.setItem('userInfo', JSON.stringify(user))

export async function updateUser(data) {
  // user is taken from above: User instance

  // for submitted profile form
  if(data instanceof FormData) {
    for(let [name, value] of data) {
        if (value) {
          user.profile[name] = value
        }
      }
    }

  if(data instanceof User) {
    console.log('user update:', data);

  }

  // user = await sendUserInfo(user)
  // always usable
  localStorage.setItem('userInfo', JSON.stringify(user))
}

// returns userObj
async function sendUserInfo(user) {

  const response = await fetch(
    `http://vm592483.eurodir.ru/api/v1/${user.id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: user
    }
  )
  const userObj = await response.json()
  user = new User(userObj)
  return user
}
