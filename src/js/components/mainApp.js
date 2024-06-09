import { user as userOrigin, refreshUser } from "./userObject.js"

// let user = JSON.parse(localStorage.getItem('userInfo'))

if (!user?.profile) {
  user = userOrigin
  if(!user?.profile) {
    // log out
    refreshUser()
  }
}

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
  if(appContainer) {
    appContainer.className = `app ${plan}`
  }
}
