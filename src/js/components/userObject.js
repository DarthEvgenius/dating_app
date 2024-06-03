import { getCookie } from "./getCookie.js"
import { formDataToJSON } from "./formDataToJSON.js"
import { handleError } from './handleError.js'

// Delete this!
// document.cookie = "userID=4"


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
    'avatars': [] // urls for images
  },
  'subscription': {
    'title': '', // friends, love, work
    'subscription_info': {
      'love_description': null,
      'friends_description': null,
      'preferable_gender': null,
      'preferable_age': null,
      'occupation': null,
      'income': null,
      'work_strategy': null,
      'skills': null
    }
  }
}

const userId = getCookie('userID')
export let user

if(userId) {
  let userOrigin = await getUserInfo(userId).catch(handleError)

  if(!userOrigin) {
    // log out
    refreshUser()
    console.log('No user Origin:', userOrigin);
  } else {
    console.log('user Origin:', userOrigin);
  }

  user = new User(userOrigin)
  localStorage.setItem('userInfo', JSON.stringify(user))

}

async function getUserInfo(userId) {
  try {
    const token = getCookie("ws_login")
    // console.log(token);

    // const token = '"dGVzdGVyNTU=.cGJrZGYyX3NoYTI1NiQ3MjAwMDAkZjc3ZTY0ZTA0OWI5Y2ZiYjBlNTk1ZmViMzNkNTJlZmM1YTIxMWYzNGUxYzUyMWMxZDEzYzg4ODU5MTQyZjJmOSRZMDI5K25NbVd2bFc3YzYwYTE2U2ZUQXd1V1J5NjFNb3JGUnRaMlVIVUZJPQ=="'

    const response = await fetch(
      `http://vm592483.eurodir.ru/api/v1/users/${userId}`,
      {
        method: 'GET',
        headers: {
          Authorization: `${token}`,
          'Cross-Origin-Opener-Policy': 'unsafe-none',
        },
        mode: 'no-cors'
      }
    )
    const user = await response.json()
    return user
  } catch(e) {
    console.log(e);
  }
}



export async function updateUser(data) {
  // user is taken from above: User instance

  // for submitted profile form
  if(data instanceof FormData) {
    for(let [name, value] of data) {
      if (value) {
        setValueToObjectKey(user, name, value)
      }
    }
    console.log('user updated:\n', user);

  }

  if(data instanceof User) {
    console.log('user update:\n', data);

  }

  // if(data.search('blob:') !== -1) {
  //   // image url is passed in
  //   user.profile.avatar.push(data)
  //   console.log(user.profile.avatar);
  // }

  // user = await sendUserInfo(user)
  // always usable
  localStorage.setItem('userInfo', JSON.stringify(user))
}

// returns userObj
async function sendUserInfo(user) {

  const response = await fetch(
    `http://vm592483.eurodir.ru/api/v1/users/${user.id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: user
    }
  ).catch(handleError)
  const userObj = await response.json()
  user = new User(userObj)
  return user
}

export function refreshUser() {
  // user = new User(userObj)
  // localStorage.setItem('userInfo', JSON.stringify(user))
  window.location.href = '/authapp/logout'
}

// find key in object and set value to this key
function setValueToObjectKey(object, key, value) {
  Object.keys(object).some(function(k) {
    if (k === key) {
      object[k] = value
      console.log('user field updated:',`${k} = ${object[k]}`);
      return
    }
    if (object[k] && typeof object[k] === 'object') {
      setValueToObjectKey(object[k], key, value)
    }
  })
}
