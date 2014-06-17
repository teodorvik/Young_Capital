/******************************************************************************
	Transforms the basic Twitter Bootstrap Carousel into Fullscreen Mode
	@author Fabio Mangolini
     http://www.responsivewebmobile.com
******************************************************************************/
jQuery(document).ready(function() {
	$('.carousel').carousel({
    	pause: "true",
    	interval: false,
	});

	$('.carousel .item').css({'width': '100%', 'min-height': $(window).outerHeight()});
	$('.carousel-inner div.item img').each(function() {
		var imgSrc = $(this).attr('src');
		$(this).parent().css({'background': 'url('+imgSrc+') center center no-repeat', '-webkit-background-size': $(window).outerHeight(), 
			'-moz-background-size': '100%', 
			'-o-background-size': '100%', 
			'background-size': '100%', 
			'-webkit-background-size': 'cover', 
			'-moz-background-size': 'cover', 
			'-o-background-size': 'cover', 'background-size': 'cover'});
		$(this).remove();
	});

	$(window).on('resize', function() {
		$('.carousel').css({'width': $(window).outerWidth(), 'min-height': $(window).outerHeight()});
	});
}); 