const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    initialSlide: 0,
    spaceBetween: 24,
    
    breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    }
  }
});