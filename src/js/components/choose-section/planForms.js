import { user } from "../userObject.js";
import { updateUser, sendUserInfo } from "../userObject.js";

// get form
// add listener
// check if user.subscription contains information
// fill the fields from user.subscription
// on submit update userObj

export function planFormHandler(planSection) {
  const planForm = planSection.querySelector('.selected-plan__form')
  const submitButton = planSection.querySelector('.form-submit')

  submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    const newUser = updateUser(new FormData(planForm))
    const userOrigin = sendUserInfo()
    window.location.reload()
  })
}
