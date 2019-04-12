import jQuery from 'jquery';

(function($) {
  // START JQUERY.

  $('html')
    .removeClass('no-js')
    .addClass('js');

	const navTrigger = $('#c-nav__trigger')
	const navigationTag = $('.c-nav')
	const bodyTag = $('body')

	navTrigger.on("click", function(e) {
		navTrigger.toggleClass('is-active')
		navigationTag.toggleClass('is-active')
		bodyTag.toggleClass('menu-open')
	})

	const secNavTrigger = $('#js-tertiary-nav--trigger')
	const secNavigationTag = $('.c-tertiary-nav')
	const secNavigationBG = $('.c-tertiary-nav__bg')

	secNavTrigger.on("click", function(e) {
		e.preventDefault();
		secNavTrigger.toggleClass('is-active')
		$(this).parents('li').toggleClass('is-active')
		secNavigationBG.toggleClass('is-active')
		bodyTag.toggleClass('tertiary-menu-open')
	})




  // END JQUERY.
})(jQuery);

console.log('main.js works!');
