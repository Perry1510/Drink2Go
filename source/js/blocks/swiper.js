function initSwiper() {

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper__pagination',
      bulletActiveClass: 'swiper__bullet--active',
      bulletClass: 'swiper__bullet',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper__button--next',
      prevEl: '.swiper__button--prev',
    },

    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
  });
}

export {initSwiper};
