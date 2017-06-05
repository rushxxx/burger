$(function() {
	var burgerCarousel = $('.carousel').owlCarousel({
		items : 1,
		loop : true,

	})

	$('.carousel__button-prev').on('click', function(e) {
		e.preventDefault();
		// slied speed 700ms
		burgerCarousel.trigger('prev.owl.carousel' ,[700]);
	});

	$('.carousel__button-next').on('click', function(e) {
		e.preventDefault();
		burgerCarousel.trigger('next.owl.carousel', [700]);
	});
});