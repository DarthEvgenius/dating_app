import { user, updateUser } from "../userObject.js";
import { setAppPlan } from "../mainApp.js";
import { planFormHandler } from "./planForms.js";

export function renderPlansSection(planSectionComponents) {

  planSectionComponents.choosePlanBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      planChooseBtnsHandler(e.target)
      showSelectedPlan(planSectionComponents)
    })
  })

  planSectionComponents.changePlanBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      user.subscription.title = ''
      updateUser(user)
      window.location.reload()
    })
  })

  if(!user?.subscription?.title) {
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

  const planClass = `selected-plan--${user.subscription.title}`

  // show selected plan, hide others
  for (const planSection of components.planInfoSections) {
    if(planSection.classList.contains(planClass)) {
      planSection.classList.remove('hidden')
      planFormHandler(planSection)
    } else {
      planSection.classList.add('hidden')
    }
  }
}

function planChooseBtnsHandler(button) {
  // const user = JSON.parse(localStorage.getItem('userInfo'))
  const plan = button.getAttribute('data-choose-plan')

  user.subscription.title = plan
  updateUser(user)
  sendUserInfo()
  setAppPlan(plan)
}

