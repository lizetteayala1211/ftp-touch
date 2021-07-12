[...document.querySelectorAll(".js-noMenu")].forEach( el => 
 el.addEventListener('contextmenu', e => e.preventDefault())
);


var buttons = document.getElementsByTagName("input");

function setActive(el) {
  for (var i = 0; i < buttons.length; i++) {
      if (buttons[i] == el) {
        el.classList.toggle("active");
      } else {
        buttons[i].classList.remove('active');
      }
    }
}



// function playAudio(url) {
//   new Audio(url).play();
// }

// window.onload = function() {
// 	document.getElementById("start-audio").play();
// }




// var player1,onplayhead,playerId,timeline,playhead,timelineWidth;
// jQuery(window).on("load", function () {
//     audioPlay();
//     ballSeek();

// });

// function audioPlay() {
//     /*var player = document.getElementById("player2");*/
//   var player = $("#player2")[0];
//   //alert(player);
//     player.play();
//     initProgressBar();
//     isPlaying = true;
// }

// function initProgressBar() {
  
//     player1 = document.getElementById("player2");
//     player1.addEventListener("timeupdate", timeCal);
//     var playBtn = jQuery(".play-pause");
//           playBtn.click(function() {
//             if (player1.paused === false) {
//                 player1.pause();
//                 isPlaying = false;
//             } else {
//                 player1.play();
//                 isPlaying = true;   
//             }
//           });

// }

// function timeCal() {
//     var width = jQuery("#timeline1").width();
//     var length = player1.duration;
//     var current_time = player1.currentTime;

//     // calculate total length of value
//     var totalLength = calculateTotalValue(length);
//   //console.info(totalLength);
//     jQuery(".end-time").html(totalLength);

//     // calculate current value time
//     var currentTime = calculateCurrentValue(current_time);
//     jQuery(".start-time").html(currentTime);

//     var progressbar = document.getElementById("seekObj1");
//     progressbar.style.marginLeft = width * (player1.currentTime / player1.duration) + "px";

// }

// function calculateTotalValue(length) {
//     var minutes = Math.floor(length / 60);
//       var  seconds_int = length - minutes * 60;
//   if(seconds_int < 10){
//     //console.info("here");
//     seconds_int = "0"+seconds_int;
//     //console.info(seconds_int);
//   }
//       var seconds_str = seconds_int.toString();
//        var  seconds = seconds_str.substr(0, 2);
//         var time = minutes + ':' + seconds;
// //console.info(seconds_int)
//     return time;
// }

// function calculateCurrentValue(currentTime) {
//     var current_hour = parseInt(currentTime / 3600) % 24,
//         current_minute = parseInt(currentTime / 60) % 60,
//         current_seconds_long = currentTime % 60,
//         current_seconds = current_seconds_long.toFixed(),
//         current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" 
//         + (current_seconds < 10 ? "0" + current_seconds : current_seconds);
//     return current_time;
// }

// function ballSeek() {
//      onplayhead = null;
//      playerId = null;
//      timeline = document.getElementById("timeline1");
//      playhead = document.getElementById("seekObj1");
//      timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

//     timeline.addEventListener("click", seek);
//     playhead.addEventListener('mousedown', drag);
//     window.addEventListener('mouseup', mouseUp);

// }


// function seek(event) {
//     var player = document.getElementById("player2");
//     player.currentTime = player.duration * clickPercent(event, timeline, timelineWidth);
// }

// function clickPercent(e, timeline, timelineWidth) {
//     return (event.clientX - getPosition(timeline)) / timelineWidth;
// }

// function getPosition(el) {
//     return el.getBoundingClientRect().left;
// }

// function drag(e) {
//     player1.removeEventListener("timeupdate", timeCal);
//     onplayhead = jQuery(this).attr("id");
//     playerId = jQuery(this).parents("li").find("audio").attr("id");
//     var player = document.getElementById(playerId);
//     window.addEventListener('mousemove', dragFunc);
//     player.removeEventListener('timeupdate', timeUpdate);
// }


// function dragFunc(e) {
//     var player = document.getElementById(onplayhead);
//     var newMargLeft = e.clientX - getPosition(timeline);

//     if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
//         playhead.style.marginLeft = newMargLeft + "px";
//     }
//     if (newMargLeft < 0) {
//         playhead.style.marginLeft = "0px";
//     }
//     if (newMargLeft > timelineWidth) {
//         playhead.style.marginLeft = timelineWidth + "px";
//     }
// }

// function mouseUp(e) {
//     if (onplayhead != null) {
//         var player = document.getElementById(playerId);
//         window.removeEventListener('mousemove', dragFunc);
//         player.currentTime = player.duration * clickPercent(e, timeline, timelineWidth);
//         player1.addEventListener("timeupdate", timeCal);
//         player.addEventListener('timeupdate', timeUpdate);
//     }
//     onplayhead = null;
// }

// function timeUpdate() {
//     var player2 = document.getElementById(onplayhead);
//     var player = document.getElementById(playerId);
//     var playPercent = timelineWidth * (player.currentTime / player.duration);
//     player2.style.marginLeft = playPercent + "px";
//     // If song is over
//     if (player.currentTime == player.duration) {
//         player.pause();
//     }

// }

// SLIDER JAVASCRIPT

jQuery(document).ready(function ($) {

  
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});    



// SECOND AUDIO PLAYER


// /*var player3,onplayhead2,playerId2,timeline2,playhead2,timelineWidth2;
// jQuery(window).on("load", function () {
//     audioPlay2();
//     ballSeek2();

// });

// function audioPlay2() {
//     /*var player = document.getElementById("player2");*/
//   var player0 = $("#player4")[0];
//   //alert(player);
//     player0.play();
//     initProgressBar2();
//     isPlaying0 = true;
// }

// function initProgressBar2() {
  
//     player3 = document.getElementById("player4");
//     player3.addEventListener("timeupdate2", timeCal2);
//     var playBtn2 = jQuery(".play-pause2");
//           playBtn2.click(function() {
//             if (player3.paused === false) {
//                 player3.pause();
//                 isPlaying0 = false;
//             } else {
//                 player3.play();
//                 isPlaying0 = true;   
//             }
//           });

// }

// function timeCal2() {
//     var width2 = jQuery("#timeline2").width();
//     var length2 = player3.duration2;
//     var current_time2 = player3.currentTime2;

//     // calculate total length of value
//     var totalLength2 = calculateTotalValue(length2);
//   //console.info(totalLength);
//     jQuery(".end-time2").html(totalLength);

//     // calculate current value time
//     var currentTime2 = calculateCurrentValue(current_time2);
//     jQuery(".start-time2").html(currentTime2);

//     var progressbar2 = document.getElementById("seekObj2");
//     progressbar2.style.marginLeft = width * (player3.currentTime2 / player3.duration2) + "px";

// }

// function calculateTotalValue2(length) {
//     var minutes2 = Math.floor(length2 / 60);
//       var  seconds_int2 = length2 - minutes2 * 60;
//   if(seconds_int2 < 10){
//     //console.info("here");
//     seconds_int2 = "0"+seconds_int2;
//     //console.info(seconds_int);
//   }
//       var seconds_str2 = seconds_int2.toString();
//        var  seconds2 = seconds_str2.substr(0, 2);
//         var time2 = minutes2 + ':' + seconds;
// //console.info(seconds_int)
//     return time2;

// }

// function calculateCurrentValue2(currentTime2) {
//     var current_hour2 = parseInt(currentTime2 / 3600) % 24,
//         current_minute2 = parseInt(currentTime2 / 60) % 60,
//         current_seconds_long2 = currentTime2 % 60,
//         current_seconds2 = current_seconds_long2.toFixed(),
//         current_time2 = (current_minute2 < 10 ? "0" + current_minute2 : current_minute2) + ":" 
//         + (current_seconds2 < 10 ? "0" + current_seconds2 : current_seconds2);
//     return current_time2;
// }

// function ballSeek2() {
//      onplayhead2 = null;
//      playerId2 = null;
//      timeline2 = document.getElementById("timeline1");
//      playhead2 = document.getElementById("seekObj1");
//      timelineWidth2 = timeline2.offsetWidth - playhead2.offsetWidth;

//     timeline2.addEventListener("click2", seek);
//     playhead2.addEventListener('mousedown2', drag);
//     window.addEventListener('mouseup2', mouseUp);

// }

// function seek(event2) {
//     var player0 = document.getElementById("player4");
//     player0.currentTime2 = player0.duration2 * clickPercent2(event2, timeline2, timelineWidth2);
// }

// function clickPercent2(e2, timeline2, timelineWidth2) {
//     return (event.clientX2 - getPosition(timeline2)) / timelineWidth2;
// }

// function getPosition2(el2) {
//     return el.getBoundingClientRect2().left;
// }

// function drag2(e2) {
//     player3.removeEventListener("timeupdate2", timeCal2);
//     onplayhead2 = jQuery(this).attr("id");
//     playerId2 = jQuery(this).parents("li").find("audio").attr("id");
//     var player0 = document.getElementById(playerId2);
//     window.addEventListener('mousemove2', dragFunc);
//     player.removeEventListener('timeupdate2', timeUpdate2);
// }

// function dragFunc2(e2) {
//     var player0 = document.getElementById(onplayhead2);
//     var newMargLeft2 = e.clientX2 - getPosition(timeline2);

//     if (newMargLeft2 >= 0 && newMargLeft2 <= timelineWidth2) {
//         playhead2.style.marginLeft = newMargLeft2 + "px";
//     }
//     if (newMargLeft2 < 0) {
//         playhead2.style.marginLeft = "0px";
//     }
//     if (newMargLeft2 > timelineWidth2) {
//         playhead2.style.marginLeft = timelineWidth2 + "px";
//     }
// }

// function mouseUp2(e2) {
//     if (onplayhead2 != null) {
//         var player0 = document.getElementById(playerId2);
//         window.removeEventListener('mousemove', dragFunc2);
//         player0.currentTime2 = player0.duration2 * clickPercent2(e2, timeline2, timelineWidth2);
//         player3.addEventListener("timeupdate2", timeCal2);
//         player0.addEventListener('timeupdate2', timeUpdate2);
//     }
//     onplayhead2 = null;
// }

// function timeUpdate2() {
//     var player5 = document.getElementById(onplayhead2);
//     var player0 = document.getElementById(playerId2);
//     var playPercent2 = timelineWidth2 * (player0.currentTime2 / player0.duration2);
//     player5.style.marginLeft = playPercent2 + "px";
//     // If song is over
//     if (player0.currentTime2 == player0.duration2) {
//         player0.pause();
//     }

// }
