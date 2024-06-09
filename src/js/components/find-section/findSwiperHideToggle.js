const findSection = document.querySelector('.find')

export function hideSwiper() {
  findSection.classList.add('hidden')
}

export function showSwiper() {
  findSection.classList.remove('hidden')
}
