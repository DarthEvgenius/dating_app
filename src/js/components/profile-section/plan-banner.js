import { setProfileTabsHeight } from './profile-sections-height.js'

const closePlanBanner = document.querySelector('#plan-banner-close')

if (closePlanBanner) {
  closePlanBanner.addEventListener('click', (e) => {
    e.target.closest('.profile__plan').setAttribute('hidden', '')
    setProfileTabsHeight()
  })
}

