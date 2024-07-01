const appContainer = document.querySelector('.app')

export function createLoader(DOMelement) {
  const loader = document.createElement('div')
  loader.classList.add('loader')
  const loaderSpinner = document.createElement('div')
  loaderSpinner.classList.add('loader__spinner')
  loader.append(loaderSpinner)

  DOMelement.append(loader)

  return {
    container: loader,
    hide() {
      loader.classList.add('loader-hide')
      loader.addEventListener('transitionend', () => {
        loader.classList.add('hidden')
      },
      {
        once: true,
      })
    },
    show() {
      loader.classList.remove('loader-hide', 'hidden')
    }
  }
}

function showLoader(loaderElem) {
  const appContainer = document.querySelector('.app')
  appContainer.append(loaderElem)
}

export function hideLoader(loaderElem) {
  loaderElem.classList.add('hidden')
}
