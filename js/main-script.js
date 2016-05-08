
$(document).ready(function() {
	// intro fades
	$('#myName').hide().fadeIn(2000);
	$('#contact-info').hide().fadeIn(4000);
	$('#resume').hide().fadeIn(5000);

	// element shading
	$('#myName p, #contact-info p').hover(function () {
		$(this).addClass('element-shadow');
	}, function () {
		$(this).removeClass('element-shadow');
		$(this).addClass('element-shadow-reverse');
	});
	
	// make lines expand
	$('#myName, #contact-info').hover(function () {
		$('#contact-info').children('hr').removeClass('line-retract');
		$('#contact-info').children('hr').addClass('line-expand');
	}, function () {
		$('#contact-info').children('hr').removeClass('line-expand');
		$('#contact-info').children('hr').addClass('line-retract');
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