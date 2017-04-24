$(function(){
	$('a[href="#about"]').click(function(e){
		e.preventDefault();

		$('html,body').animate({
			scrollTop: $('#about_h1').offset().top-33
		},700);
	});

	$('a[href="#skills"]').click(function(e){
		e.preventDefault();

		$('html,body').animate({
			scrollTop: $('#skills').offset().top
		},800);
	});

	$('a[href="#certif"]').click(function(e){
		e.preventDefault();

		$('html,body').animate({
			scrollTop: $('#certif').offset().top
		},900);
	});

	$('a[href="#educat"]').click(function(e){
		e.preventDefault();

		$('html,body').animate({
			scrollTop: $('#educat').offset().top-20
		},1000);
	});

	$('a[href="#myJobs"]').click(function(e){
		e.preventDefault();

		$('html,body').animate({
			scrollTop: $('#myJobs').offset().top-20
		},1000);
	});
	
	$('a.button').click(function(e){
		e.preventDefault();

		$('html,body').animate({
			scrollTop: $('#header').offset().top
		},1500);
	});
});
