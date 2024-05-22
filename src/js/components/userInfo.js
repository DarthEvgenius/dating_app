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
  'profile': {
    'avatar': false
  },
  'subscription_info': {
    'subscription': {
      'title': 'friends'
    }
  }
}

localStorage.setItem('userInfo', JSON.stringify(userObj))

console.log(JSON.parse(localStorage.getItem('userInfo')));
