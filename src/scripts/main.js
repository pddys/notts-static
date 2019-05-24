import jQuery from 'jquery';

import { library, dom } from '@fortawesome/fontawesome-svg-core'

// Solid
import { faUser as fasUser } from '@fortawesome/pro-solid-svg-icons/faUser'
import { faCalendar as fasCalendar } from '@fortawesome/pro-solid-svg-icons/faCalendar'
import { faClock as fasClock } from '@fortawesome/pro-solid-svg-icons/faClock'


// Regular
import { faUser as farUser } from '@fortawesome/pro-regular-svg-icons/faUser'
import { faPhone as farPhone } from '@fortawesome/pro-regular-svg-icons/faPhone'
import { faShoppingCart as farShoppingCart } from '@fortawesome/pro-regular-svg-icons/faShoppingCart'
import { faCalendar as farCalendar } from '@fortawesome/pro-regular-svg-icons/faCalendar'
import { faCaretRight as farCaretRight } from '@fortawesome/pro-regular-svg-icons/faCaretRight'
import { faCaretDown as farCaretDown } from '@fortawesome/pro-regular-svg-icons/faCaretDown'
import { faCaretUp as farCaretUp } from '@fortawesome/pro-regular-svg-icons/faCaretUp'
import { faMapMarkerAlt as farMapMarkerAlt } from '@fortawesome/pro-regular-svg-icons/faMapMarkerAlt'
import { faSearch as farSearch } from '@fortawesome/pro-regular-svg-icons/faSearch'
import { faFilePdf as farFilePdf } from '@fortawesome/pro-regular-svg-icons/faFilePdf'

// Brands
import { faTwitter as fabTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faInstagram as fabInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faFacebookF as fabFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF'
import { faYoutube as fabYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube'

// Add icons to library
library.add(
  // Solid
	fasUser,
	fasCalendar,
	fasClock,

  // Regular
  farUser,
  farShoppingCart,
  farCalendar,
  farPhone,
  farCaretRight,
  farCaretDown,
  farCaretUp,
  farMapMarkerAlt,
  farSearch,
  farFilePdf,

  // Brands
  fabTwitter,
  fabInstagram,
  fabFacebookF,
  fabYoutube
)

// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch()

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
	const headingTags = document.querySelectorAll('.font-heading')
	typefaceSelect.addEventListener('input', function() {
	  outputTag.style.fontFamily = this.value
	})
	headingSelect.addEventListener('input', function() {
		headingTags.forEach(tag => {
			tag.style.fontFamily = this.value
		})
	})

	//Random Data

	const titleTag = document.querySelector('.js__title')
	const dateTag = document.querySelector('.js__date')
	const timeTag = document.querySelector('.js__time')

	let eventSource = dataNotts
	let eventNumber = 0

	const dataNotts = [
		{
			title: "Rough Crossing",
			date: "15 Apr - 20 Apr 2019",
			time: '7:00pm'
		},
		{
			title: "National Youth Choir of Great Britain and National Youth Boys' Choir of Great Britain",
			date: "15 Apr 2019",
			time: '7:30pm'
		},
		{
			title: "Spark Sensory Baby Sessions",
			date: "16 Apr 2019",
			time: '2:00pm'
		},
		{
			title: "Back to the Future In Concert",
			date: "17 Apr 2019",
			time: '8:00pm'
		},
		{
			title: "City of Birmingham Symphony Orchestra",
			date: "03 May 2019",
			time: '8:15pm'
		}
	]

	$('html').find('.js__title').each(function() {
		var eventNumber = Math.floor(Math.random() * dataNotts.length)
		var that = $(this);
		that.html(dataNotts[eventNumber].title);
	})
	$('html').find('.js__date').each(function() {
		var eventNumber = Math.floor(Math.random() * dataNotts.length)
		var that = $(this);
		that.html(dataNotts[eventNumber].date);
	})
	$('html').find('.js__time').each(function() {
		var eventNumber = Math.floor(Math.random() * dataNotts.length)
		var that = $(this);
		that.html(dataNotts[eventNumber].time);
	})
})


  // END JQUERY.
(jQuery);

console.log('main.js works!');
