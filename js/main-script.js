
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

	// resume drop downs (will borrow from the dropSection function)
	var dropSection = function (contentId, dropTime, raiseTime) {
		contentId.children('hr').removeClass('ghost-line-retract');
		contentId.children('hr').addClass('line-expand');
		contentId.css("visibility", "visible");
		contentId.parent('p').animate({'margin-top': '+=5px'}, dropTime);
		contentId.animate({opacity: 'show', height: 'show'}, dropTime);

		contentId.parent().mouseleave(function () {
			contentId.parent('p').animate({'padding-top': '-=5px'}, dropTime);
			contentId.animate({opacity: 'hide', height: 'hide'}, raiseTime);
			$('#header-info').children('hr').removeClass('line-expand');
			$('#header-info').children('hr').addClass('line-retract');
		});
	};

	$('#about').click(function () {
		dropSection($('#about-content'), 800, 800);
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