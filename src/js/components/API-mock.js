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
  },
  'matches': [ // user id's
    1, 3
  ],
  'chats': [ // chat id's
    0, 1
  ]
}

// localStorage.removeItem('userInfo')
const userJSON = JSON.stringify(user)

localStorage.setItem('userInfo', userJSON)

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
          'full_name': `Name ${counter++}-person`,
          'age': 31,
          'about_me': 'Some very interesting information about me. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, praesentium numquam. Minus animi sed laborum necessitatibus ratione omnis exercitationem eaque perferendis labore? A saepe, fugiat veritatis, deleniti culpa animi dignissimos blanditiis velit, consequuntur autem repellat voluptatem error provident minus impedit dolores accusantium delectus. Sit optio suscipit, aliquam iusto alias dolorum!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, praesentium numquam. Minus animi sed laborum necessitatibus ratione omnis exercitationem eaque perferendis labore? A saepe, fugiat veritatis, deleniti culpa animi dignissimos blanditiis velit, consequuntur autem repellat voluptatem error provident minus impedit dolores accusantium delectus. Sit optio suscipit, aliquam iusto alias dolorum!',
          'gender': null,
          'birth_place': null,
          'location': null,
          'languages': null,
          'avatars': [
            {
              'image_path': `/img/avatar${counter}.jpg`,
            },
            {
              'image_path': '/img/avatar3.jpg'
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

// chat mock db

const chats = [
  {
    'id': 0,
    'users': createUsers(2),
    'messages': [
      {
        'id': 0,
        'from_user': 0,
        'to_user': 1,
        'text': 'hello you!'
      },
      {
        'id': 1,
        'from_user': 1,
        'to_user': 0,
        'text': 'U 2 hi'
      },
    ],
    'created_at': '',
    'updated_at': '',
  },
  {
    'id': 2,
    'users': createUsers(2),
    'messages': [
      {
        'id': 0,
        'from_user': 0,
        'to_user': 1,
        'text': 'alalalalalalala'
      },
      {
        'id': 1,
        'from_user': 1,
        'to_user': 0,
        'text': 'dubidubidu'
      },
    ],
    'created_at': '',
    'updated_at': '',
  }
]

