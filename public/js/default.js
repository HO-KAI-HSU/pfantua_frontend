// JavaScript Document
$(document).ready(function(){

	$(".preload").fadeOut();

	//mobile nav
	$(".nav_icon").click(function(e){
		e.preventDefault();
		if($("header nav").hasClass("open")){
			$("header nav").removeClass("open");
		}
		else{
			$("header nav").addClass("open");
		}
	});

	$(".nav_close").click(function(e){
		//e.preventDefault();
		$("header nav").removeClass("open");
	});

	//scroll to section
	/*
	$("nav li a").click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr("href")).offset().top - 60
		}, 1000);
		if($("nav").hasClass( "open" )) $("nav").removeClass("open");
	})
	*/

	//scroll to top
	$(window).scroll(function(){
		if ($(this).scrollTop() > 60){
			$("#scrollup").fadeIn();
		}
		else{
			$("#scrollup").fadeOut();
		}
	});

	$('#scrollup').click(function(e){
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, 1000);
	});
});
