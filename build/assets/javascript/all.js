var Project={};Project.init=function(){},$(document).on("ready",function(){Project.init()}),$(window).on("load",function(){$(".btn-menu-mobile").on("click",function(){$(".menu-mobile").is(".open")||$(".menu-mobile").addClass("open")}),$(".menu-mobile .btn-close").on("click",function(){$(".menu-mobile").is(".open")&&$(".menu-mobile").removeClass("open")}),$(".dropdown .btn-dropdown .icon").on("click",function(o){o.preventDefault(),$(this).closest(".dropdown").toggleClass("open")}),$("[data-scroll]").on("click",function(o){o.preventDefault();var e=$("header.header").height(),n=$($(this).data("scroll")),t=parseInt($($(this).data("offsettop"))[0])>0?parseInt($($(this).data("offsettop"))[0]):0;console.log(t);var i=n.offset().top-e-t;$("html, body").animate({scrollTop:i+1},1e3,function(){})})}),$(window).on("resize",function(){}),$(window).on("scroll",function(){var o=$(this).scrollTop(),e=$(".header"),n=0;o>n&&!e.hasClass("header--sticky")?e.addClass("header--sticky"):o<=n&&e.hasClass("header--sticky")&&e.removeClass("header--sticky")});