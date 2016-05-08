
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
		$('#contact-info').animate({opacity: 'show', height: 'show'}, 600);
		$('#myName, #header-info').mouseleave(function () {
			$('#contact-info').animate({opacity: 'hide', height: 'hide'}, 800);
		});
	});
	
	$('#project').click(function () {
		$('#project-info').animate({opacity: 'show', height: 'show'}, 800);
		$('#myName, #header-info').mouseleave(function () {
			$('#project-info').animate({opacity: 'hide', height: 'hide'}, 800);
		});
	});

	// resume drop downs

	
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