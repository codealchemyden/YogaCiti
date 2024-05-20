window.addEventListener('scroll', () => {
  document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 50);
});
$(document).ready(function () {
	$(".features-slider").slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					prevArrow: '<button class="prev arrow"></button>',
					nextArrow: '<button class="next arrow"></button>',
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					prevArrow: '<button class="prev arrow"></button>',
					nextArrow: '<button class="next arrow"></button>',
				},
			},
		],
	});
});
new WOW().init();