$(function () {
	$('.ac-team__trigger').on('click', function(e) {
		e.preventDefault();

		var $this = $(this),
			item = $this.closest('.ac-team__item'),
			container = $this.closest('.ac-team'),
			items = container.find('.ac-team__item'),
			content = item.find('.ac-team__content'),
			otherContent = container.find('.ac-team__content');

		if (!item.hasClass('ac-team__item-active')) {
			items.removeClass('ac-team__item-active');
			item.addClass('ac-team__item-active');
			otherConteent.slideUp();
			content.slideDown();
		} else {
			item.removeClass('ac-team__item-active')
			content.slideUp();
		}
		
	});
})