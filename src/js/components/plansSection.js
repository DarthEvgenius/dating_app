import { renderPlansSection } from "./choose-section/renderPlansSection.js";

const planSectionComponents = {
  choosePlan: document.querySelector('.choose'),
  selectedPlan: document.querySelector('.selected-plan'),
  choosePlanBtns: document.querySelectorAll('[data-choose-plan'),
  planLove: document.querySelector('.selected-plan--love'),
  planFriends: document.querySelector('.selected-plan--friends'),
  planWork: document.querySelector('.selected-plan--work'),
}

if(planSectionComponents.choosePlan || planSectionComponents.selectedPlan) {
  renderPlansSection(planSectionComponents)
}
