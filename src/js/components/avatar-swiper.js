import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
Swiper.use([Navigation, Pagination]);


const swiperProfileMain = new Swiper('.avatar__swiper--main', {
  slidesPerView: 'auto',
  spaceBetween: 40,
  a11y: true,
  pagination: {
    el: '.swiper-pagination--main',
    type: 'bullets',
    clickable: true,
  },
});


const swiperProfileGuest = new Swiper('.avatar__swiper--guest', {
  slidesPerView: 'auto',
  spaceBetween: 40,
  a11y: true,
  pagination: {
    el: '.swiper-pagination--guest',
    type: 'bullets',
    clickable: true,
  },
});
