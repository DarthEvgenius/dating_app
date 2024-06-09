import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
Swiper.use([Navigation, Pagination]);



// const swiperFind = new Swiper('.find__swiper', {
//   slidesPerView: 'auto',
//   spaceBetween: 40,
//   navigation: {
//     nextEl: '.find__swiper-button-next',
//     prevEl: '.find__swiper-button-prev',
//   },
//   pagination: {
//     el: '.find__swiper-pagination',
//     type: 'bullets',
//     clickable: true,
//   },
//   // prevent swiping
//   allowTouchMove: false,
// });

export function createSwiperFind(id) {
  return new Swiper(`.find__swiper--${id}`, {
    slidesPerView: 'auto',
    spaceBetween: 40,
    navigation: {
      nextEl: `.find__swiper--${id}-button-next`,
      prevEl: `.find__swiper--${id}-button-prev`,
    },
    pagination: {
      el: `.find__swiper-pagination--${id}`,
      type: 'bullets',
      clickable: true,
    },
    // prevent swiping
    allowTouchMove: false,
  });
}
