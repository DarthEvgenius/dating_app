import { handleError } from '../handleError.js'
import { user as userOrigin, updateUser } from '../userObject.js'
import { getCookie } from '../getCookie.js'

// avatar form handler
// shows form large/small, depends on user's avatar
// upload files validator
// fetch files to the server
// add images to avatar slider
export async function avatarForm() {

  const token = getCookie("ws_login")

  // const token = '"dGVzdGVyNTU=.cGJrZGYyX3NoYTI1NiQ3MjAwMDAkZjc3ZTY0ZTA0OWI5Y2ZiYjBlNTk1ZmViMzNkNTJlZmM1YTIxMWYzNGUxYzUyMWMxZDEzYzg4ODU5MTQyZjJmOSRZMDI5K25NbVd2bFc3YzYwYTE2U2ZUQXd1V1J5NjFNb3JGUnRaMlVIVUZJPQ=="'

  let user = JSON.parse(localStorage.getItem('userInfo'))
  const userId = user.id

  const avatarForm = document.querySelector('[name="avatar__form"]')
  const avatarSwiper = document.querySelector('.avatar__swiper')
  const avatarUpload = document.querySelector('#avatar-upload')

  if (avatarForm && avatarUpload) {
    avatarFormRender(user, avatarForm, avatarSwiper)

    avatarForm.addEventListener('submit', (event) => {
      event.preventDefault()
      const image = avatarUpload.files[0]
      const actionURL = `http://vm592483.eurodir.ru/api/v1/users/${userId}/`

      if (validateFiles(image)) {
        const imageURL = URL.createObjectURL(image)
        createSlide(imageURL, avatarForm, avatarSwiper)
        // updateUser(imageURL)

        fetch(actionURL, {
          method: 'POST',
          headers: {
            Authorization: `${token}`,
            // "Content-Type": "application/json",
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new FormData(avatarForm)
        }).catch(handleError)

        console.log('Image was sent to the server');

      } else {
        console.log('Supported image formats: .jpg, .jpeg, .png, .webp')
      }
    })

    avatarUpload.addEventListener('change', (e) => {
      avatarForm.requestSubmit()
    })
  }
}

// check if profile has avatar, render avatar form small/large
// takes "profile" form userObj, form element, swiper element
function avatarFormRender({ profile }, avatarForm, avatarSwiper) {
  if (profile?.avatars?.length) {
    // add class "avatar__form--small" and show avatar swiper
    avatarForm.classList.remove('avatar__form--large')
    avatarForm.classList.add('avatar__form--small')
    avatarSwiper.classList.remove('hidden')

    // profile.avatar.forEach(url => {
    //   createSlide(url, avatarForm, avatarSwiper)
    // })
  } else {
    // add class "avatar__form--large" and hide avatar swiper
    avatarForm.classList.remove('avatar__form--small')
    avatarForm.classList.add('avatar__form--large')
    avatarSwiper.classList.add('hidden')
  }
}

function validateFiles(file) {
  // add supproted image formats here
  const fileTypes = [
    "image/jpg",
    "image/jpeg",
    "image/png",
    "image/webp"
  ]

  return fileTypes.includes(file.type)

}

function createSlide(src, avatarForm, avatarSwiper) {
  if (avatarSwiper.classList.contains('hidden')) {
    avatarForm.classList.remove('avatar__form--large')
    avatarForm.classList.add('avatar__form--small')
    avatarSwiper.classList.remove('hidden')
  }

  const swiper = avatarSwiper.querySelector('.swiper-wrapper')

  const slide = document.createElement('div')
  slide.classList.add('swiper-slide')
  // const src = URL.createObjectURL(image)
  slide.innerHTML =
    `
      <img loading="lazy" src="${src}" class="image" width="360" height="360" alt="Avatar photo">
    `

  swiper.prepend(slide)
}

