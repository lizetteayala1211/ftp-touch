

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
