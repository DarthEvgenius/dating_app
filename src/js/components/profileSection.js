import './profile-section/plan-banner.js'
import './profile-section/profileSizes.js'
import './profile-section/profile-sections-height.js'

import { user as userOrigin } from './userObject.js'
import { avatarForm } from './profile-section/avatarForm.js'
import { userInfoRender } from './profile-section/userInfoRender.js'
import { renderPlanTitle } from './profile-section/renderPlanTitle.js'

// user's profile
let user = JSON.parse(localStorage.getItem('userInfo'))

renderProfileSection()

function renderProfileSection() {
  if (!user?.profile) {
    user = userOrigin
    if(!user?.profile) {
      // log out
      return
    }
  }

  const profileComponents = {
    description: document.querySelector('.profile__info-description'),
    form: document.querySelector('[name="profile__info-form"]'),
    editBtn: document.querySelector('#info-edit-btn'),
    saveBtn: document.querySelector('#profile-form-save'),
    logoutBtn: document.querySelector('#profile-logout'),
    planTitle: document.querySelector('.profile__plan')
  }

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

