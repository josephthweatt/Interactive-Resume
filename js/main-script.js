
$(document).ready(function() {
	// intro fades
	$('#myName').hide().fadeIn(2000);
	$('#header-info').hide().fadeIn(3000);
	$('#resume').hide().fadeIn(3500);

	// element shading
	$('#header-info p').hover(function () {
		$(this).addClass('element-shadow');
	}, function () {
		$(this).removeClass('element-shadow');
		$(this).addClass('element-shadow-reverse');
	});
	
	// drop down header info
	$('#contact').click(function () {
		if ($('#project-info').is(':visible')) {
			$(this).hide();
		}
		if ($('#contact-info').is(':hidden')) {
			$(this).css("opacity", "100");
			$(this).hide().fadeIn(550);
			$('#resume-header').mouseleave(function () {
				$('#contact-info').fadeTo(300, 0.00);
				$('#contact-info').slideUp(200, function () {
					$(this).hide();
				});
			});
		}
	});
	
	$('#project').click(function () {
		if ($('#contact-info').is(':visible')) {
			$(this).hide();
		}
		if ($('#project-info').is(':hidden')) {
			$(this).css("opacity", "100");
			$(this).hide().fadeIn(550);
			$('#resume-header').mouseleave(function () {
				$('#project-info').fadeTo(300, 0.00);
				$('#project-info').slideUp(200, function () {
					$(this).hide();
				});
			});
		}
	});
	
	// make lines expand
	$('#myName, #header-info').hover(function () {
		$('#header-info').children('hr').removeClass('line-retract');
		$('#header-info').children('hr').addClass('line-expand');
	}, function () {
		$('#header-info').children('hr').removeClass('line-expand');
		$('#header-info').children('hr').addClass('line-retract');
	});

	$('.resume-section').hover(function () {
		$(this).children('hr').removeClass('line-retract');
		$(this).children('hr').addClass('line-expand');
	}, function () {
		$(this).children('hr').removeClass('line-expand');
		$(this).children('hr').addClass('line-retract');
	});

	$('#end-section').hover(function () {
		$(this).children('hr').removeClass('ghost-line-retract');
		$(this).children('hr').addClass('line-expand');
	}, function () {
		$(this).children('hr').removeClass('line-expand');
		$(this).children('hr').addClass('ghost-line-retract');
	});
});