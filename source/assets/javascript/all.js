var Project = {};

Project.init = function(){
  
};

$(document).on("ready", function(){
  Project.init();
});

$(window).on("load", function(){
  $('.btn-menu-mobile').on('click', function(ev) {
    if( !$('.menu-mobile').is('.open') ) {
      $('.menu-mobile').addClass('open');
    }
  });

  $('.menu-mobile .btn-close').on('click', function(ev) {
    if( $('.menu-mobile').is('.open') ) {
      $('.menu-mobile').removeClass('open');
    }
  });

  $('.dropdown .btn-dropdown').on('click', function(ev) {
    $(this).closest('.dropdown').toggleClass('open');
  });
});

$(window).on("resize", function(){
 
});

$(window).on("scroll", function(){
  var scrollY = $(this).scrollTop();

  var header = $('.header');
  var headerOffset = 0;
  if (scrollY > headerOffset && !header.hasClass('header--sticky')){
    header.addClass('header--sticky');
  }
  else if(scrollY <= headerOffset && header.hasClass('header--sticky')) {
    header.removeClass('header--sticky');
  }
});
