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
          'full_name': `Name ${counter++}-person`,
          'age': 31,
          'about_me': 'Some very interesting information about me. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, praesentium numquam. Minus animi sed laborum necessitatibus ratione omnis exercitationem eaque perferendis labore? A saepe, fugiat veritatis, deleniti culpa animi dignissimos blanditiis velit, consequuntur autem repellat voluptatem error provident minus impedit dolores accusantium delectus. Sit optio suscipit, aliquam iusto alias dolorum!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, praesentium numquam. Minus animi sed laborum necessitatibus ratione omnis exercitationem eaque perferendis labore? A saepe, fugiat veritatis, deleniti culpa animi dignissimos blanditiis velit, consequuntur autem repellat voluptatem error provident minus impedit dolores accusantium delectus. Sit optio suscipit, aliquam iusto alias dolorum!',
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
