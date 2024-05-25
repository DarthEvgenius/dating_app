export async function userInfoRender(user) {
  console.log(user);
  const profileDescription = document.querySelector('.profile__info-description')
  const profileInfoForm = document.querySelector('[name="profile__info-form"')
  const logoutBtn = document.querySelector('#profile-logout')

  // if not all required profile fields are completed
  if (
    !user.profile.first_name ||
    !user.profile.last_name ||
    !user.profile.age ||
    !user.profile.gender
  ) {
    console.log('not all profile required fields completed');

    profileInfoForm.classList.remove('hidden')
    profileDescription.classList.add('hidden')
    logoutBtn.classList.add('hidden')
  }
}
