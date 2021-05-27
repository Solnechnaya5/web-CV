new Swiper('.gallery-slider', {
 navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev'
 },

 pagination: {
  el: '.swiper-pagination',
  clickable: true,
  dynamicBullets: true,
 },

 keyboard: {
  enabled: true,
  pageUpDown: true,
 },
 autoHeight: true,
 slidesPerView: 4,
 spaceBetween: 8,
 preloadImages: false,
 lazy: {
  loadOnTransitionStart: false,
  loadPrevNext: false,
 },
 breakpoints: {
  320: {
   slidesPerView: 1,
  },
  480: {
   slidesPerView: 1,
  },
  7866: {
   slidesPerView: 2,
  },
  850: {
   slidesPerView: 3,
  },
 },
 watchSlidesProgress: true,
 watchSlidesVisibility: true,

});
// сладедр дипломов
new Swiper('.diplomas-slider', {
 navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev'
 },

 pagination: {
  el: '.swiper-pagination',
  clickable: true,
  dynamicBullets: true,
 },

 keyboard: {
  enabled: true,
  pageUpDown: true,
 },
 autoHeight: true,
 slidesPerView: 4,
 spaceBetween: 8,
 preloadImages: false,
 lazy: {
  loadOnTransitionStart: false,
  loadPrevNext: false,
 },
 breakpoints: {
  320: {
   slidesPerView: 1,
  },
  480: {
   slidesPerView: 2,
  },
  850: {
   slidesPerView: 3,
  },
 },
 watchSlidesProgress: true,
 watchSlidesVisibility: true,

});