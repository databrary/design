$(document).ready(function () {
	$.fn.qtip.defaults.position.target = 'mouse';
	$.fn.qtip.defaults.position.adjust.x = 10;
	$.fn.qtip.defaults.position.adjust.y = 10;
	$.fn.qtip.defaults.show.delay = 1;
	$.fn.qtip.defaults.style.classes = 'qtip-light qtip-shadow';

	var q = function (selector, content) {
		$(selector).qtip({
			content: content
		});
	};

	//

	q('', '');
});
