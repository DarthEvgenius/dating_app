export function showNoMatches(findSection) {
  const container = findSection.querySelector('.find__container')
  container.textContent = 'No Matches Left!'
  container.classList.add('nomatches')
}
