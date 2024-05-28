import { user, updateUser } from "../userObject.js";
import { setAppPlan } from "../mainApp.js";

export function renderPlansSection(planSectionComponents) {

  planSectionComponents.choosePlanBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      planChooseBtnsHandler(e.target)
      showSelectedPlan(planSectionComponents)
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

  // show selected plan, hide others
  for (const elem of components.planInfoSections) {
    if(elem.classList.contains(`selected-plan--${user.subscription.title}`)) {
      elem.classList.remove('hidden')
    } else {
      elem.classList.add('hidden')
    }
  }
}

function planChooseBtnsHandler(button) {
  // const user = JSON.parse(localStorage.getItem('userInfo'))
  const plan = button.getAttribute('data-choose-plan')

  user.subscription.title = plan
  updateUser(user)
  setAppPlan(plan)

}

