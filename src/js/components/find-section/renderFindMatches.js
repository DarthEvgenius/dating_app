// render find swipers out of array of profiles

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
