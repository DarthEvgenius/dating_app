import { handleError } from '../handleError.js'

// avatar form handler
// shows form lsrge/small depends on user's avatar
// upload files validator
// fetch files to the server
// add images to avatar slider
export async function avatarForm(userObj) {
  const userId = userObj.id

  const avatarForm = document.querySelector('[name="avatar__form"')
  const avatarSwiper = document.querySelector('.avatar__swiper')
  const avatarUpload = document.querySelector('#avatar-upload')

  if (avatarForm && avatarUpload) {
    avatarFormRender(userObj, avatarForm, avatarSwiper)

    avatarForm.addEventListener('submit', (event) => {
      event.preventDefault()
      const image = avatarUpload.files[0]
      const actionURL = `http://vm592483.eurodir.ru/api/v1/profile/${userId}/`

      if (validateFiles(image)) {
        createSlide(image, avatarForm, avatarSwiper)

        fetch(actionURL, {
          method: 'PATCH',
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
  if (profile.avatar) {
    // add class "avatar__form--small" and show avatar swiper
    avatarForm.classList.remove('avatar__form--large')
    avatarForm.classList.add('avatar__form--small')
    avatarSwiper.classList.remove('hidden')
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

function createSlide(image, avatarForm, avatarSwiper) {
  if (avatarSwiper.classList.contains('hidden')) {
    avatarForm.classList.remove('avatar__form--large')
    avatarForm.classList.add('avatar__form--small')
    avatarSwiper.classList.remove('hidden')
  }

  const swiper = avatarSwiper.querySelector('.swiper-wrapper')

  const slide = document.createElement('div')
  slide.classList.add('swiper-slide')
  const src = URL.createObjectURL(image)
  slide.innerHTML =
    `
      <img loading="lazy" src="${src}" class="image" width="360" height="360" alt="Avatar photo">
    `

  swiper.prepend(slide)
}

