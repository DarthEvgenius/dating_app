import { updateUser } from "../userObject.js"

export async function userInfoRender(userInfoComponents) {
  const user = JSON.parse(localStorage.getItem('userInfo'))



  if (
    !user.profile.full_name ||
    !user.profile.age
  ) {
    showInfoForm(userInfoComponents, user)
  } else {
    showUserInfo(userInfoComponents, user)
  }

  // userInfoComponents.editBtn.addEventListener(
  //   'click', () => {
  //     showInfoForm(userInfoComponents, user)
  // })

    userInfoComponents.editBtn.addEventListener(
    'click', showInfoForm.bind(null, userInfoComponents, user))

  userInfoComponents.form.addEventListener('submit', (event) => {
    event.preventDefault()
    updateUser(new FormData(userInfoComponents.form))
    userInfoRender()
  })
}

function showInfoForm(userInfoComponents, user) {
  userInfoComponents.form.classList.remove('hidden')
  userInfoComponents.description.classList.add('hidden')
  userInfoComponents.logoutBtn.classList.add('hidden')

  populateForm(userInfoComponents, user)
}

// populate form inputs with user's info
function populateForm(userInfoComponents, user) {
  const form = userInfoComponents.form

  if (user.profile.full_name) {
    form['profile-name-edit'].value = `${user.profile.full_name}`
  }
  if (user.profile.age) {
    form['profile-age-edit'].value =
      `${user.profile.age}`
  }
  if (user.profile.about_me) {
    form['profile-about-edit'].value =
      `${user.profile.about_me}`
  }
  if (user.profile.gender) {
    user.profile.gender == 'male' ?
      form.querySelector('#profile-gender-male').checked = true :
      form.querySelector('#profile-gender-female').checked = true
  }
  if (user.profile.birth_place) {
    form['profile-birth_place-edit'].value =
      `${user.profile.birth_place}`
  }
  if (user.profile.location) {
    form['profile-location-edit'].value =
      `${user.profile.location}`
  }
  if (user.profile.languages) {
    form['profile-languages-edit'].value =
      `${user.profile.languages}`
  }
}

function showUserInfo(userInfoComponents,user) {
  userInfoComponents.form.classList.add('hidden')
  userInfoComponents.description.classList.remove('hidden')
  userInfoComponents.logoutBtn.classList.remove('hidden')

  populateUserInfo(user)
}

// populate user info fields from user object
function populateUserInfo(user) {
  for(const key in user.profile) {
    const field = document.querySelector(`[data-field=${key}]`)

    if (field) {
      if (user.profile[key]) {
        field.textContent = user.profile[key]
      } else {
        field.textContent = 'No information'
      }
    }
  }
}
