(function ($) {
	"use strict";


	const webPack1 = document.querySelector('.web-package-img.web-package-1')
	const webPack2 = document.querySelector('.web-package-img.web-package-2')
	const webPack3 = document.querySelector('.web-package-img.web-package-3')
	const boxPackage = document.querySelectorAll('.box-package-img')
	
		window.addEventListener('scroll', ()=>{
			const boxPackageTop1 =boxPackage[0].getBoundingClientRect().top
			const boxPackageTop2 =boxPackage[1].getBoundingClientRect().top
			const webPackTop1 = webPack1.getBoundingClientRect().top
			const webPackTop2 = webPack2.getBoundingClientRect().top
			const webPackTop3 = webPack3.getBoundingClientRect().top
			if (200 >= webPackTop1) {
				webPack1.style.transform = `translateY(${ Math.floor(-(webPackTop1 - 150) /10 * 1.8 )}px)`;
			}
			if (200 >= webPackTop2) {
				webPack2.style.transform = `translateY(${ Math.floor(-(webPackTop2 - 150) /10 * 1.5 )}px)`;
			}
			if (200 >= webPackTop3) {
				webPack3.style.transform = `translateY(${ Math.floor((webPackTop3 - 150) /10 * 1.2 )}px)`;
			}

			if (200 >= boxPackageTop1) {
				boxPackage[0].style.transform = `translateY(${ Math.floor(-(boxPackageTop1 - 150) /10 * 1.1 )}px)`;
			}
			if (200 >= boxPackageTop2) {
				boxPackage[1].style.transform = `translateY(${ Math.floor((boxPackageTop2 - 150) /10 * 1.4 )}px)`;
			}
		})
	
	/*=========================
	PRELOADER JS
	===========================*/
	$(window).on('load', function (event) {
		$('.preloader').delay(500).fadeOut(500);
	});




	/*=========================
	bottle-slider
	===========================*/
	$('.bottle-slider-active').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',

		responsive: [{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					arrows: true,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
					arrows: true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					arrows: true,
				}
			}
		]
	});



	/*=========================
	SCROLL-UP JS
	===========================*/
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

	/*=========================
	AOS JS
	===========================*/
	AOS.init({
		disable: "mobile", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		offset: 120, // offset (in px) from the original trigger point
		delay: 0, // values from 0 to 3000, with step 50ms
		duration: 1000, // values from 0 to 3000, with step 50ms
		easing: 'ease', // default easing for AOS animations
		once: true, // whether animation should happen only once - while scrolling down
	});

	
})(jQuery);