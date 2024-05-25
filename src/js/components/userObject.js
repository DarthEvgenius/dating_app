// const userInfo = await getUserInfo()

// // need URL with GET method for fetching userInfo
// async function getUserInfo(userId) {
//   const response = await fetch(
//     `http://vm592483.eurodir.ru/api/v1/${userId}`
//   )

//   const userInfo = await response.json()

//   return userInfo
// }


// mock user object
const userObj = {
  id: 4,
  'username': 'tester55',
  'profile': {
    'first_name': undefined,
    'last_name': undefined,
    'age': undefined,
    'about_me': undefined,
    'gender': undefined,
    'birth_place': undefined,
    'location': undefined,
    'languages': undefined,
    'avatar': false
  },
  'subscription': {
    'title': undefined, // friends, love, work
    'subscription_info': {
      'description': undefined,
      'preferable_gender': undefined,
      'preferable_age': undefined,
      'occupation': undefined,
      'income': undefined
    }
  }
}

localStorage.setItem('userInfo', JSON.stringify(userObj))
