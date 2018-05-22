$(document).ready(function(){
  if ( $('.slider-hero').length > 0 ) {
    var sliderHero = new Swiper('.slider-hero .swiper-container', {
      spaceBetween: 100,
      breakpoints: {
        767: {
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
        }
      },
      on: {
        slideChange : function() {
          var activeItem = sliderHero.activeIndex;
          $('.slider-hero__navigation__item.active').removeClass('active');
          $('.slider-hero__navigation__item[data-slide="' + activeItem + '"]').addClass('active');
        }
      }
    });

    $('.slider-hero__navigation__item').on('click', function(ev){
      ev.preventDefault();
      var slide = parseInt($(this).data('slide'));
      sliderHero.slideTo(slide);
    });
  }

  if ( $('.slider-home').length > 0 ) {
    var sliderHome = new Swiper('.slider-home .swiper-container', {
      spaceBetween: 10,
      slidesPerView: 3,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });

  }
});