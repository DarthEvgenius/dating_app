export function setProfileTabsHeight() {
  const profileHeader = arguments[0]?.profileHeader || document.querySelector('.profile__header')

  const profileTabsContainers = arguments[0]?.profileTabsContainers || document.querySelectorAll('.profile-tabs__container')
  const profilePlanBanner = arguments[0]?.profilePlanBanner || document.querySelector('.profile__plan')
  const windowHeight = window.innerHeight

  const headerHeight = parseInt(getComputedStyle(profileHeader).getPropertyValue('margin-bottom')) + profileHeader.offsetHeight

  let height = 0

  if (profilePlanBanner) {
    const bannerHeight = parseInt(getComputedStyle(profilePlanBanner).getPropertyValue('margin-bottom')) + profilePlanBanner.offsetHeight

    height = windowHeight - headerHeight - bannerHeight
  } else {
    height = windowHeight - headerHeight
  }

  profileTabsContainers.forEach(elem => {
    elem.style.maxHeight = `${height}px`
  })
}
