import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
Swiper.use([Navigation, Pagination]);



const swiperAvatarMain = new Swiper('.avatar__swiper--main', {
  slidesPerView: 'auto',
  spaceBetween: 40,
  a11y: true,
  pagination: {
    el: '.swiper-pagination--main',
    type: 'bullets',
    clickable: true,
  },
});
