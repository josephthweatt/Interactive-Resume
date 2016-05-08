
$(document).ready(function() {
	// intro fades
	$('#myName').hide().fadeIn(2000);
	$('#header-info').hide().fadeIn(4000);
	$('#resume').hide().fadeIn(5000);

	// element shading
	$('#header-info p').hover(function () {
		$(this).addClass('element-shadow');
	}, function () {
		$(this).removeClass('element-shadow');
		$(this).addClass('element-shadow-reverse');
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