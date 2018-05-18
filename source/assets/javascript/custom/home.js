$(document).ready(function(){
  if ( $('.slider-hero').length > 0 ) {
    var sliderHero = new Swiper('.slider-hero .swiper-container', {
      spaceBetween: 100,
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
});