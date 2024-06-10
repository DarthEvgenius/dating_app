const langMenu = document.querySelector('.lang-menu')
const languageList = document.querySelector('.lang-menu__list')
const options = document.querySelectorAll('.lang-menu__option');
const btnImg = document.querySelector('.lang-menu__img');

if (langMenu) {
  const languageButton = document.querySelector('.lang-menu__btn')
  languageButton.addEventListener('click', (e) => {
    langMenu.classList.toggle('opened')
  })

  options.forEach(e => {
    e.addEventListener('click', changeLanguage);
  });

  // change selected language flag
  function changeLanguage(e) {
    btnImg.src = `./img/flag-${this.dataset.lang}.png`
    langMenu.classList.remove('opened')
  }
}

