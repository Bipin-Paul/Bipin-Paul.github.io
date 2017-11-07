

$(function (){
	//add Bootstrap's scrollspy
	$('body').scrollspy({
		target: '.navbar'
	});
	
	//smooth scrolling
	$('nav a').bind('click',function(){
		$('html, body').stop().animate({
			scrollTop: $($(this).attr('href')).offset().top
		},1500,'easeInOutExpo');
		event.preventDefault();
	});
	
	//parallax scrolling with steller.js
	$(window).stellar();
});