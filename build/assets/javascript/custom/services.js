$(document).ready(function(){if($(".services-list").length>0){$(window).on("scroll",function(){var s=$(this).scrollTop(),t=$(".services-list");if(t.length){var i=t.offset().top-100;s>i&&!t.hasClass("services-list--sticky")?t.addClass("services-list--sticky"):s<=i&&t.hasClass("services-list--sticky")&&t.removeClass("services-list--sticky")}});var s=$(".services-list__item a"),t=[];s.each(function(){var s=$(this),i=$(s.attr("data-scroll"));t.push(i)}),$(window).on("scroll",function(){for(var i=$(window).scrollTop(),e=$(window).height(),a=0;a<t.length;a++){var l=t[a].offset().top;l<i+.5*e&&l-i>0&&(s.parent().removeClass("active"),s.filter('[data-scroll="#'+t[a].attr("id")+'"]').parent().addClass("active"))}})}});