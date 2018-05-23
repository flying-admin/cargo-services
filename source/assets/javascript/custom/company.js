$(document).ready(function(){

  if ( $('.content-slider').length > 0 ) {
    var sliderHome = new Swiper('.content-slider .swiper-container', {
      spaceBetween: 10,
      slidesPerView: 2,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        990: {
          slidesPerView: 3
        },
        767: {
          slidesPerView: 1.3
        }
      },
    });

  }

});