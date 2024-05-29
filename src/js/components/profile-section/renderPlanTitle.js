export function renderPlanTitle(user, profileComponents) {
  const planTitle = profileComponents.planTitle
  planTitle.classList.remove('hidden')

  const title = planTitle.querySelector('.profile__plan-title')
  title.innerHTML = `
    <svg class="plan-svg">
      <use xlink:href="img/sprite.svg#${user.subscription.title}"></use>
    </svg>
    ${user.subscription.title.charAt(0).toUpperCase() + user.subscription.title.slice(1)}
  `

  const detailsBtn = planTitle.querySelector('.plan-btn')
  detailsBtn.addEventListener('click', () => {
    window.location.href = './app-profile.html'
  })

}

