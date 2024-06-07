// takes an array of users' profiles
export function renderFindMatches(profilesArray) {
  profilesArray.forEach(profile => {
    createSlide(profile)
  })

  let amountOfSlides = profilesArray.length
  return amountOfSlides
}

function createSlide(profile) {
  console.log(profile.id);
}
