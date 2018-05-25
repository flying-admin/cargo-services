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

  if ( $('.company-menu').length > 0 ) {
    $(window).on("scroll", function() {
      var scrollY = $(this).scrollTop();


      var submenu = $('.company-menu');
      if (submenu.length) {
        var submenuOffset = (submenu.offset().top - 100);
        if (scrollY > submenuOffset && !submenu.hasClass('company-menu--sticky')) {
          submenu.addClass('company-menu--sticky');
        }
        else if(scrollY <= submenuOffset && submenu.hasClass('company-menu--sticky')) {
          submenu.removeClass('company-menu--sticky');
        }
      }
    });
  }

});