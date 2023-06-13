$(document).ready(function () {
	$('.burger-menu__header').click(function () {
		$('.burger-menu__header').toggleClass('open-menu');
		$('.burger-menu__items').toggleClass('open-menu');
		$('body').toggleClass('fixed-page');
	});
});


