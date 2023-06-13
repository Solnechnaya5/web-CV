$(document).ready(function() {
	$('.burger-menu-icon').click(function() {
					$('.burger-menu-icon').toggleClass('open-menu');
		$('.burger-menu').toggleClass('open-menu');
		$('body').toggleClass('fixed-page');
	});
});