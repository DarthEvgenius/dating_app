const user = {
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
    'avatars': [
      {
        'image_path': '/img/avatar1.jpg',
      },
      {
        'image_path': '/img/avatar2.jpg',
      },
    ] // urls for images
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

// example of users fetch
// let a = await returnUsers(5)
// console.log(a);


export async function returnUsers(amount) {
  let users = createUsers(amount)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users())
    }, 1000)
  })
}


function createUsers(amount) {
  let counter = 0

  return function() {
    let users = Array.from({ length: amount}, () =>
      ({
        id: `${counter}`,
        'username': `${counter}`,
        'profile': {
          'full_name': `Name ${counter++}`,
          'age': 31,
          'about_me': null,
          'gender': null,
          'birth_place': null,
          'location': null,
          'languages': null,
          'avatars': [
            {
              'image_path': '/img/avatar1.jpg'
            },
            {
              'image_path': '/img/avatar2.jpg',
            },
          ] // urls for images
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
      })
    )

    return users
  }
}
