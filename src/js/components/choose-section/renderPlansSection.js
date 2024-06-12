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
      window.location.href = './app-profile.html'
    })
  })

  planSectionComponents.editPlanBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      const showSelectedPlanDetails = selectedPlanEditHandler('edit')
      showSelectedPlanDetails(event)
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

  populatePlanDetails(user)
}

function planChooseBtnsHandler(button) {
  // const user = JSON.parse(localStorage.getItem('userInfo'))
  const plan = button.getAttribute('data-choose-plan')

  user.subscription.title = plan
  updateUser(user)
  setAppPlan(plan)
}

// provide 'goal' argument with 'edit' or 'submit' value
export function selectedPlanEditHandler(goal) {
  return function(event) {
    const selectedPlanContainer = event.target.closest('.profile__plan-container')
    const planDetailsElem = selectedPlanContainer.querySelector('.selected-plan__details')
    const selectedPlanForm = selectedPlanContainer.querySelector('.selected-plan__form')
    const formSubmitBtn = selectedPlanContainer.querySelector('.form-submit')
    const editPlanBtn = selectedPlanContainer.querySelector('.selected-plan__edit')

    if (goal == 'edit') {
      planDetailsElem.classList.add('hidden')
      editPlanBtn.classList.add('hidden')
      selectedPlanForm.classList.remove('hidden')
      formSubmitBtn.classList.remove('hidden')
    }
    else if (goal == 'submit') {
      planDetailsElem.classList.remove('hidden')
      editPlanBtn.classList.remove('hidden')
      selectedPlanForm.classList.add('hidden')
      formSubmitBtn.classList.add('hidden')

      populatePlanDetails(user)
    }
  }
}

function populatePlanDetails(user) {
  for(const key in user.subscription.subscription_info) {
    const field = document.querySelector(`[data-field=${key}]`)

    if (field) {
      if (user.subscription.subscription_info[key]) {
        field.textContent = user.subscription.subscription_info[key]
      } else {
        field.textContent = 'No information'
      }
    }
  }
}
