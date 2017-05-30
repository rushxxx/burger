(function () {
	var display = $('.maincontent');
	var sections = $('.section')
	var inScroll = false;

	var performTransition = function(sectionEq){
		var position = (sectionEq * -100) + '%';

		if (inScroll) return;

		inScroll = true;

		sections.eq(sectionEq).addClass('active')
			.siblings().removeClass('active');

		display.css({
			'transform' : 'translate(0,' + position + ')'
		});
		console.log('1')
		setTimeout(function(){
			inScroll = false;
		}, 500);

	};

	$('.wrapper').on('wheel', function(e){
		var activeSection = sections.filter('.active');
		var nextSection = activeSection.next();
		var prevSection = activeSection.prev();

		
		if (e.originalEvent.deltaY > 0 && nextSection.length){
			performTransition(nextSection.index());
		}

		if (e.originalEvent.deltaY < 0 && prevSection.length){
			performTransition(prevSection.index());
		}
	})

	$('.nav__link').on('click', function(e){
		e.preventDefault();

		var href = parceInt($(this).attr('href'));

		performTransition(href);
	})
}());