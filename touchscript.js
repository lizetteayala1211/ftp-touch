// function playSound () {
//     document.getElementById('audio-player-play').play();
// }

/*	draggable container's js	*/

  $( function() {
    $( "#draggable" ).draggable();
  } );

  $( function() {
    $( "#draggable-two" ).draggable();
  } );

   $( function() {
    $( "#draggable-three" ).draggable();
  } );

   $( function() {
    $( "#draggable-six" ).draggable();
  } );

   $( function() {
    $( "#draggable-seven" ).draggable();
  } );

/*	time on page counter js	*/

var timerVar = setInterval(countTimer, 1000);
var totalSeconds = 0;
function countTimer() {
           ++totalSeconds;
           var hour = Math.floor(totalSeconds /3600);
           var minute = Math.floor((totalSeconds - hour*3600)/60);
           var seconds = totalSeconds - (hour*3600 + minute*60);
           if(hour < 10)
             hour = "0"+hour;
           if(minute < 10)
             minute = "0"+minute;
           if(seconds < 10)
             seconds = "0"+seconds;
           document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
        }


/*	slider js	*/

$(document).ready(function(){ 
		function _slider(id){
			var slidewidth = $('.slider ul li').width();
			var slideheight = $('.slider ul li').outerHeight();

			$('.slider').css({'height':slideheight,'width':slidewidth});
			$('.slider ul li:not(.active)').css({'left':slidewidth});
      if($('.slider ul li:nth-child(1)').hasClass('active')){
        $('.slider ul li:last-child').css({left: - slidewidth}, -200).prependTo('.slider ul');
      }
			function moveright(){
				var slideheight = $('.slider ul li.active').next().height();
				var slidewidth = $('.slider ul li.active').next().width();
				$('.slider').animate({height:slideheight,width:slidewidth},200);
				
				if ($('.slider ul li:nth-last-child(2)').hasClass('active')) {
					 $('.slider ul li:first-child').css({left: slidewidth}, -200).appendTo('.slider ul');
					 $('.slider ul li.active').css({left: -slidewidth}, -200).removeClass('active').next().addClass('active').css({left: 0}, -200);
				} else {
					$('.slider ul li.active').css({left: -slidewidth}, -200).removeClass('active').next().addClass('active').css({left: 0}, -200);
				}
			}
			function moveleft(){
				var slideheight = $('.slider ul li.active').prev().height();
				var slidewidth = $('.slider ul li.active').prev().width();
				$('.slider').animate({height:slideheight,width:slidewidth},200);


				if ($('.slider ul li:nth-child(2)').hasClass('active')) {
					 $('.slider ul li:last-child').css({left: - slidewidth}, -200).prependTo('.slider ul');
					 $('.slider ul li.active').removeClass('active').css({left: slidewidth}, -200).prev().addClass('active').css({left: 0}, -200);
				} else {
					$('.slider ul li.active').removeClass('active').css({left: slidewidth}, -200).prev().addClass('active').css({left: 0}, -200);
				}	
			} 

			$('.control_next').on('click', function(){ 
				moveright();
			});
			$('.control_prev').on('click', function(){ 
				moveleft();
			});
		} 
		_slider('slider_');
	});

/*	slider image info js	*/

jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
	var slideCount = $('#image-slider-nav-info ul li').length;
	var slideWidth = $('#image-slider-nav-info ul li').width();
	var slideHeight = $('#image-slider-nav-info ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#image-slider-nav-info').css({ width: slideWidth, height: slideHeight });
	
	$('#image-slider-nav-info ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#image-slider-nav-info ul li:last-child').prependTo('#image-slider-nav-info ul');

    function moveLeft() {
        $('#image-slider-nav-info ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#image-slider-nav-info ul li:last-child').prependTo('#image-slider-nav-info ul');
            $('#image-slider-nav-info ul').css('left', '');
        });
    };

    function moveRight() {
        $('#image-slider-nav-info ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#image-slider-nav-info ul li:first-child').appendTo('#image-slider-nav-info ul');
            $('#image-slider-nav-info ul').css('left', '');
        });
    };

    $('.control_next').click(function () {
        moveLeft();
    });

    $('.control_prev').click(function () {
        moveRight();
    });

});    


/*	enlarge slider images js	*/

$(document).ready(function() {
  $('.active').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
  });
});

$(document).ready(function() {
  $('.slider2').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
  });
});

$(document).ready(function() {
  $('.slider3').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
  });
});

$(document).ready(function() {
  $('.slider4').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
  });
});

$(document).ready(function() {
  $('.slider5').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
  });
});

/*	back to top js	*/

$("#scroll-to-top-container").click(function () {
   $("#auto-right").animate({scrollTop: 0}, 7000);
});	










