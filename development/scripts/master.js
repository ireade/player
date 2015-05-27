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



	$('.icon').on('click', function() {


		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$('.icon').removeClass('active');
			$(this).addClass('active');
		}

		
	})

});