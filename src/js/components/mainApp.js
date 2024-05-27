export function setAppPlan(plan) {
  const appContainer = document.querySelector('.app')
  appContainer.className = `app ${plan}`
}
