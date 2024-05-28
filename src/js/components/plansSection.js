import { renderPlansSection } from "./choose-section/renderPlansSection.js";

const planSectionComponents = {
  choosePlan: document.querySelector('.choose'),
  selectedPlan: document.querySelector('.selected-plan'),
  choosePlanBtns: document.querySelectorAll('[data-choose-plan'),
  planInfoSections: [
    document.querySelector('.selected-plan--love'),
    document.querySelector('.selected-plan--friends'),
    document.querySelector('.selected-plan--work'),
  ]
}

if(planSectionComponents.choosePlan || planSectionComponents.selectedPlan) {
  renderPlansSection(planSectionComponents)
}
