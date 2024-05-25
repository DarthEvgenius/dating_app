export function setProfileHeight() {
  const profileHeader = arguments[0]?.profileHeader || document.querySelector('.profile__header')
  const windowHeight = window.innerHeight

  const profileBody = document.querySelector('.main-profile')

  if (profileHeader) {
    const headerHeight = parseInt(getComputedStyle(profileHeader).getPropertyValue('margin-bottom')) + profileHeader.offsetHeight

    let height = windowHeight - headerHeight


    if (profileBody) {
      profileBody.style.maxHeight = `${height}px`
    }
  }
}
