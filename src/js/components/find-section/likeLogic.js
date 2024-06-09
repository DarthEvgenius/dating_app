
export function likeHandler(e) {
  const profileContainer = e.target.closest('.find__match')
  profileContainer.dispatchEvent(matched)

  profileContainer.addEventListener('transitionend', (e) => {
    profileContainer.remove()
  })
  profileContainer.classList.add('liked')
}

export function dislikeHandler(e) {
  const profileContainer = e.target.closest('.find__match')
  profileContainer.dispatchEvent(matched)

  profileContainer.addEventListener('transitionend', (e) => {
    profileContainer.remove()
  })
  profileContainer.classList.add('disliked')
}

const matched = new CustomEvent('matched', {
  bubbles: true
});
