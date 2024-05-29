import './profile-section/plan-banner.js'
import './profile-section/profileSizes.js'
import './profile-section/profile-sections-height.js'

import { avatarForm } from './profile-section/avatarForm.js'
import { userInfoRender } from './profile-section/userInfoRender.js'

// get user profile!

// user's profile
// const userObj = JSON.parse(localStorage.getItem('userInfo'))

const userInfoComponents = {
  description: document.querySelector('.profile__info-description'),
  form: document.querySelector('[name="profile__info-form"'),
  editBtn: document.querySelector('#info-edit-btn'),
  saveBtn: document.querySelector('#profile-form-save'),
  logoutBtn: document.querySelector('#profile-logout')
}

avatarForm()

if(userInfoComponents.form ||
  userInfoComponents.description ||
  userInfoComponents.logoutBtn
) {
  userInfoRender(userInfoComponents)
}
