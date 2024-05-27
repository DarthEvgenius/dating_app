export function renderPlansSection() {
  const user = JSON.parse(localStorage.getItem('userInfo'))

  const choosePlanSection = document.querySelector('')

  if(!user.subscription.title) {
    // if user has no subscription => show choosePlan

  } else {
    // if user has subscription => show planInfo, set plan class to main app element

  }
}
