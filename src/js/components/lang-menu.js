// all language options
const options = document.querySelectorAll('.lang-menu__option');
// selected language image
let btnImg = document.querySelector('.lang-menu__img');

options.forEach(e => {
  e.addEventListener('click', changeLanguage);
});

// change selected language flag
function changeLanguage(e) {
  btnImg.src = `./img/flag-${this.dataset.lang}.png`;
}
