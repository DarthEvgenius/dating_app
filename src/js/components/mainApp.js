import { user } from "./userObject.js"

if(user?.subscription?.title) {
  setAppPlan(user.subscription.title)
} else {
  const appContainer = document.querySelector('.app')
  if(appContainer) {
    appContainer.className = 'app'
  }
}

export function setAppPlan(plan) {
  const appContainer = document.querySelector('.app')
  appContainer.className = `app ${plan}`
}
