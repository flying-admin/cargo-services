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

    var $links = $('.services-list__item a');

    var $blocks = [];
    $links.each(function(){
      var $this = $(this);
      var $block = $($this.attr('data-scroll'));
      $blocks.push($block);
    });

    $(window).on('scroll', function(){
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      for (var i = 0; i < $blocks.length; i++){
        var offsetBlock = $blocks[i].offset().top;
        if ( offsetBlock < (scroll + (0.5 * windowHeight)) && offsetBlock - scroll > 0) {
          $links.parent().removeClass('active');
          $links.filter('[data-scroll="#'+ $blocks[i].attr('id') +'"]').parent().addClass('active');
        }
      }
    });
  }
});