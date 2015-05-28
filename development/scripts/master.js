$(document).ready(function() {

	$('.show-more div').on('click', function() {

		if ( $(this).hasClass('more') ) {
			$('#player').css('bottom', "160px");
			$('.show-more .less').show();
		} else {
			$('#player').css('bottom', "0");
			$('.show-more .more').show();
		}

		$(this).hide();

		
	})


	$('.clickable-area').on('click', function() {

		var parent = $(this).parent('.icon'); 

		if ( parent.hasClass('active') ) {

			parent.removeClass('active');

		} else {
			$('.icon').removeClass('active');
			parent.addClass('active');
		}

	}) 


});