import './profile-section/plan-banner.js'
import './profile-section/profileSizes.js'
import './profile-section/profile-sections-height.js'

import { avatarForm } from './profile-section/avatarForm.js'


// get user profile!

// user's profile
const userObj = JSON.parse(localStorage.getItem('userInfo'))

avatarForm(userObj)
