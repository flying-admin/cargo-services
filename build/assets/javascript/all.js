var Project={};Project.init=function(){},$(document).on("ready",function(){Project.init()}),$(window).on("load",function(){$(".btn-menu-mobile").on("click",function(){$(".menu-mobile").is(".open")||$(".menu-mobile").addClass("open")}),$(".menu-mobile .btn-close").on("click",function(){$(".menu-mobile").is(".open")&&$(".menu-mobile").removeClass("open")}),$(".dropdown .btn-dropdown .icon").on("click",function(o){o.preventDefault(),$(this).closest(".dropdown").toggleClass("open")}),$("[data-scroll]").on("click",function(o){o.preventDefault();var e=$("header.header").height(),n=$($(this).data("scroll")),a=parseInt($($(this).data("offsettop"))[0])>0?parseInt($($(this).data("offsettop"))[0]):0,t=n.offset().top-e-a;$("html, body").animate({scrollTop:t+1},1e3,function(){})}),$("[data-modal-open]").on("click",function(){var o=$(this).data("modal-open");$("body").addClass("modal-open"),$("[data-modal="+o+"]").addClass("modal-open")}),$("[data-modal-close]").on("click",function(o){this===o.target&&($("body").removeClass("modal-open"),$("[data-modal]").removeClass("modal-open"))})}),$(window).on("resize",function(){}),$(window).on("scroll",function(){var o=$(this).scrollTop(),e=$(".header"),n=0;o>n&&!e.hasClass("header--sticky")?e.addClass("header--sticky"):o<=n&&e.hasClass("header--sticky")&&e.removeClass("header--sticky")});