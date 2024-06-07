import './profile-section/plan-banner.js'
import './profile-section/profileSizes.js'
import './profile-section/profile-sections-height.js'

import { user } from './userObject.js'
import { avatarForm } from './profile-section/avatarForm.js'
import { userInfoRender } from './profile-section/userInfoRender.js'
import { renderPlanTitle } from './profile-section/renderPlanTitle.js'
import { createLoader } from './loader.js'

// let user = JSON.parse(localStorage.getItem('userInfo'))

const profileComponents = {
  description: document.querySelector('.profile__info-description'),
  form: document.querySelector('[name="profile__info-form"]'),
  editBtn: document.querySelector('#info-edit-btn'),
  saveBtn: document.querySelector('#profile-form-save'),
  logoutBtn: document.querySelector('#profile-logout'),
  planTitle: document.querySelector('.profile__plan')
}

// run if there are profile sections on page
if(profileComponents.description &&
  profileComponents.planTitle
) {
  const appContainer = document.querySelector('.app')
  const loader = createLoader(appContainer)
  loader.show()

  renderProfileSection()
}

function renderProfileSection() {
  if (!user) {
    return
  }
  loader.hide()
  avatarForm()

  if(profileComponents.form ||
    profileComponents.description ||
    profileComponents.logoutBtn
  ) {
    userInfoRender(profileComponents)
  }

  // selected plan title
  if(user?.subscription?.title && profileComponents.planTitle) {
    renderPlanTitle(user, profileComponents)
  }
}
