import jQuery from 'jquery';

(function($) {
  // START JQUERY.

  $('html')
    .removeClass('no-js')
    .addClass('js');

	const navTrigger = $('#c-nav__trigger')
	const navigationTag = $('.c-nav')
	const bodyTag = $('body')

	const hamburgerTag = $('.c-hamburger')

	hamburgerTag.on("click", function(e) {
		hamburgerTag.toggleClass('is-active')
		navigationTag.toggleClass('is-active')
		bodyTag.toggleClass('menu-open')
	})


	navTrigger.on("click", function(e) {
		navTrigger.toggleClass('is-active')
		navigationTag.toggleClass('is-active')
		bodyTag.toggleClass('menu-open')
	})

	const secNavTrigger = $('.js-tertiary-nav--trigger')
	const secNavigationTag = $('.c-tertiary-nav')
	const secNavigationBG = $('.c-tertiary-nav__bg')

	secNavTrigger.on("click", function(e) {
		e.preventDefault();
		secNavTrigger.toggleClass('is-active')
		$(this).parents('li').toggleClass('is-active').siblings().removeClass('is-active');
		if ($(this).parents('.is-active').length) {
			secNavigationBG.addClass('is-active')
			bodyTag.addClass('tertiary-menu-open')
		} else {
			secNavigationBG.removeClass('is-active')
			bodyTag.removeClass('tertiary-menu-open')
		}
		// Will need to remove siblings active class
	})

	const typefaceSelect = document.querySelector(`select[name="typeface"]`)
	const headingSelect = document.querySelector(`select[name="headings"]`)
	const outputTag = document.querySelector('body')
	const headingTag = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
	typefaceSelect.addEventListener('input', function() {
	  outputTag.style.fontFamily = this.value
	})
	// headingSelect.addEventListener('input', function() {
	//   headingTag.style.fontFamily = this.value
	// })




  // END JQUERY.
})(jQuery);

console.log('main.js works!');
