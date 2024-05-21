window.addEventListener('scroll', () => {
  document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 50);
});
window.addEventListener('click', () => {
  document.querySelector('.navbar').classList.toggle('togle-fon');
});

/*Переключение nav */
const triggerTabList = document.querySelectorAll('#myTab button')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
  })
})



/*Настройка слайдера */
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
/*Активация библиотеки Wow */
new WOW().init();