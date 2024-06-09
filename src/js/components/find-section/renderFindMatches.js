import { createSwiperFind } from "./find-swiper.js"

// render find swipers out of array of profiles

export function renderFindMatches(profilesArray) {
  const findContainer = document.querySelector('.find__container')
  const templateNode = document.querySelector('.find__match')
  findContainer.innerHTML = ''

  profilesArray.forEach(profile => {
    const match = createMatch(profile, templateNode)
    findContainer.append(match)
    const swiper = createSwiperFind(profile.id)
  })

  let amountOfSlides = profilesArray.length
  return amountOfSlides
}

function createMatch(profile, templateNode) {
  const newMatch = templateNode.cloneNode(true)
  newMatch.classList.remove('hidden')
  newMatch.setAttribute('data-match-id', profile.id)

  const swiperContainer = newMatch.querySelector('.swiper')
  swiperContainer.classList.add(`find__swiper--${profile.id}`, 'find__swiper')

  const pagination = newMatch.querySelector('.find__swiper-pagination')
  pagination.classList.add(`find__swiper-pagination--${profile.id}`)

  const swiperWrapper = newMatch.querySelector('.swiper-wrapper')
  swiperWrapper.innerHTML = ''

  profile.profile.avatars.forEach(img => {
    const slide = createMatchSlide(img.image_path)
    swiperWrapper.append(slide)
  })

  const prevBtn = newMatch.querySelector('.find__swiper-button-next')
  prevBtn.classList.add(`find__swiper--${profile.id}-button-next`)
  const nextBtn = newMatch.querySelector('.find__swiper-button-prev')
  nextBtn.classList.add(`find__swiper--${profile.id}-button-prev`)


  return newMatch
}

function createMatchSlide(src) {
  const slide = document.createElement('div')
  slide.classList.add('swiper-slide')

  let imgName = src.split('/')
  imgName = imgName[imgName.length - 1].split('.')[0]

  slide.innerHTML =
    `
    <picture class="find__photo">
      <source srcset="./img/${imgName}.webp" type="image/webp">
      <img loading="lazy" src="./img/${imgName}.jpg" class="image" width="480" height="651" alt="photo">
    </picture>
    `
  return slide
}
