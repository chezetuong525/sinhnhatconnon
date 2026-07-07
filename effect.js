$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		var currentMessage = 0;
		var messageTimer = null;
		var $messages = $('.message p');

		function updateNavButtons() {
			$('#prev_message').toggle(currentMessage > 0);
			$('#next_message').toggle(currentMessage < $messages.length - 1);
		}

		function showMessage(index) {
			if (index < 0 || index >= $messages.length) return;
			messageTimer && clearInterval(messageTimer);
			$messages.stop(true, true).fadeOut('fast');
			$messages.eq(index).fadeIn('fast');
			currentMessage = index;
			updateNavButtons();
		}

		function startMessageTimer() {
			messageTimer && clearInterval(messageTimer);
			messageTimer = setInterval(function() {
				if (currentMessage < $messages.length - 1) {
					showMessage(currentMessage + 1);
				} else {
					clearInterval(messageTimer);
				}
			}, 3000);
		}

		$('#prev_message').click(function() {
			if (currentMessage > 0) {
				showMessage(currentMessage - 1);
				startMessageTimer();
			}
		});

		$('#next_message').click(function() {
			if (currentMessage < $messages.length - 1) {
				showMessage(currentMessage + 1);
				startMessageTimer();
			}
		});

		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

	$('#turn_on').click(function(){
		var bgVideo = $('#bg-video')[0];
		if (bgVideo) {
			$('#bg-video').addClass('show');
			bgVideo.currentTime = 0;
			bgVideo.play().catch(function() {});
		}
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		$('#story').fadeIn('slow');
		$(this).fadeOut('slow');
	});

	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		showMessage(0);
		$('#prev_message, #next_message').fadeIn('slow');
		startMessageTimer();
	});
});




//alert('hello');