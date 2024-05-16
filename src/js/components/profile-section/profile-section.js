import { setProfileHeight } from './profile-height.js'
import { setProfileTabsHeight } from './profile-sections-height.js'

const profileHeader = document.querySelector('.profile__header')
const profileTabsContainers = document.querySelectorAll('.profile-tabs__container')
const profilePlanBanner = document.querySelector('.profile__plan')


setProfileTabsHeight({
  profileHeader,
  profileTabsContainers,
  profilePlanBanner
})

setProfileHeight({profileHeader})

window.addEventListener('resize', () => {
  setProfileTabsHeight()
  setProfileHeight()
})
