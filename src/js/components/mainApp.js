import { user } from "./userObject.js"

function showLoader() {
  const loaderContainer = document.createElement('div')
  loaderContainer.classList.add('loader')
  const loaderSpinner = document.createElement('div')
  loaderSpinner.classList.add('loader__spinner')
  loaderContainer.append(loaderSpinner)

  const appContainer = document.querySelector('.app')
  appContainer.append(loaderContainer)
}

showLoader()
setTimeout(() => {
  const loaderContainer = document.querySelector('.loader')
  loaderContainer.classList.add('hidden')
}, 2000)

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
