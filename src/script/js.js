window.addEventListener('scroll', () => {
  document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 50);
});
window.addEventListener('click', () => {
  document.querySelector('.navbar').classList.toggle('togle-fon');
});

/*
const btns = document.querySelectorAll('.navbar-toggler');
const div = document.querySelector('.navbar');

btns.forEach(btn => {
  btn.addEventListener('click', e => {
    div.className = '';
    div.classList.add(e.currentTarget.name);
  });
});*/




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
					prevArrow: '<button type="button" class="prev arrow"></button>',
					nextArrow: '<button type="button" class="next arrow"></button>',
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					prevArrow: '<button type="button" class="prev arrow"></button>',
					nextArrow: '<button type="button" class="next arrow"></button>',
				},
			},
		],
	});
});
new WOW().init();