import { user, updateUser } from "../userObject.js";
import { setAppPlan } from "../mainApp.js";

export function renderPlansSection() {
  // const user = JSON.parse(localStorage.getItem('userInfo'))
  const planSectionComponents = {
    choosePlan: document.querySelector('.choose'),
    selectedPlan: document.querySelector('.selected-plan'),
    choosePlanBtns: document.querySelectorAll('[data-choose-plan')
  }


  planSectionComponents.choosePlanBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      planChooseBtnsHandler(e.target)
    })
  })

  if(!user.subscription.title) {
    // if user has no subscription
    showChoosePlans(planSectionComponents)
  } else {
    // if user has subscription
    showSelectedPlan(planSectionComponents)
  }
}

function showChoosePlans(components) {
  components.choosePlan.classList.remove('hidden')
  components.selectedPlan.classList.add('hidden')
}

function showSelectedPlan(components) {
  components.choosePlan.classList.add('hidden')
  components.selectedPlan.classList.remove('hidden')
}

function planChooseBtnsHandler(button) {
  // const user = JSON.parse(localStorage.getItem('userInfo'))
  const plan = button.getAttribute('data-choose-plan')

  user.subscription.title = plan
  updateUser(user)
  setAppPlan(plan)

}

