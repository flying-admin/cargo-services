$(document).ready(function(){
  if ( $('.services-list').length > 0 ) {
    $(window).on("scroll", function() {
      var scrollY = $(this).scrollTop();


      var submenu = $('.services-list');
      if (submenu.length) {
        var submenuOffset = (submenu.offset().top - 100);
        if (scrollY > submenuOffset && !submenu.hasClass('services-list--sticky')) {
          submenu.addClass('services-list--sticky');
        }
        else if(scrollY <= submenuOffset && submenu.hasClass('services-list--sticky')) {
          submenu.removeClass('services-list--sticky');
        }
      }
    });
  }
});