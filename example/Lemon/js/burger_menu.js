$(document).ready(function () {
	$('.burger_menu_header').click(function () {
		$('.burger_menu_header').toggleClass('open-menu');
		$('.burger_menu_items').toggleClass('open-menu');
		$('body').toggleClass('fixed-page');
	});
});

	
