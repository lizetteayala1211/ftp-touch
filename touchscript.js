/*  index button switch colors  */

function Index() {

/* top part */

   var element = document.getElementById("top-part");
   element.classList.toggle("index");

   var element = document.getElementById("nav-top-link-one");
   element.classList.toggle("index");

   var element = document.getElementById("nav-top-link-two");
   element.classList.toggle("index"); 

    var element = document.getElementById("nav-top-link-three");
   element.classList.toggle("index");    

    var element = document.getElementById("nav-middle");
   element.classList.toggle("index");   

    var element = document.getElementById("nav-middle-copy");
   element.classList.toggle("index");

    var element = document.getElementById("nav-bottom-copy");
   element.classList.toggle("index");  

    var element = document.getElementById("nav-bottom-copy-two");
   element.classList.toggle("index"); 

    var element = document.getElementById("nav-bottom-copy-three");
   element.classList.toggle("index"); 


/* content part */

    var element = document.getElementById("bottom-part");
   element.classList.toggle("index"); 

  var x = document.getElementById("auto-left");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }  

  var x = document.getElementById("auto-right");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("index-left");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }  

  var x = document.getElementById("index-right");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }  
/* marquee part */

    var element = document.getElementById("marquee-part");
   element.classList.toggle("index"); 

    var element = document.getElementById("scroll");
   element.classList.toggle("index");    

}

/*	audio players js	*/

/*	first audio */

  function play() {
    var audio = document.getElementById("first-audio");
    audio.play();
  }

    function pause() {
    var audio = document.getElementById("first-audio");
    audio.pause();
  }

/*	second audio */

  function play2() {
    var audio = document.getElementById("second-audio");
    audio.play();
  }

    function pause2() {
    var audio = document.getElementById("second-audio");
    audio.pause();
  }

/*	third audio */

  function play3() {
    var audio = document.getElementById("third-audio");
    audio.play();
  }

    function pause3() {
    var audio = document.getElementById("third-audio");
    audio.pause();
  }

/*	fourth audio */

  function play4() {
    var audio = document.getElementById("fourth-audio");
    audio.play();
  }

    function pause4() {
    var audio = document.getElementById("fourth-audio");
    audio.pause();
  }

/*	fifth audio */

  function play5() {
    var audio = document.getElementById("fifth-audio");
    audio.play();
  }

    function pause5() {
    var audio = document.getElementById("fifth-audio");
    audio.pause();
  }

/*	sixth audio */

  function play6() {
    var audio = document.getElementById("sixth-audio");
    audio.play();
  }

    function pause6() {
    var audio = document.getElementById("sixth-audio");
    audio.pause();
  }

/*	seventh audio */

  function play7() {
    var audio = document.getElementById("seventh-audio");
    audio.play();
  }

    function pause7() {
    var audio = document.getElementById("seventh-audio");
    audio.pause();
  }


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


/*	first slider js	*/

$(document).ready(function(){ 
		function _slider(id){
			var slidewidth = $('.slider #image-slider-ul li').width();
			var slideheight = $('.slider #image-slider-ul li').outerHeight();

			$('.slider').css({'height':slideheight,'width':slidewidth});
			$('.slider #image-slider-ul li:not(.active)').css({'left':slidewidth});
      if($('.slider #image-slider-ul li:nth-child(1)').hasClass('active')){
        $('.slider #image-slider-ul li:last-child').css({left: - slidewidth}, -200).prependTo('.slider #image-slider-ul');
      }
			function moveright(){
				var slideheight = $('.slider #image-slider-ul li.active').next().height();
				var slidewidth = $('.slider #image-slider-ul li.active').next().width();
				$('.slider').animate({height:slideheight,width:slidewidth},200);
				
				if ($('.slider #image-slider-ul li:nth-last-child(2)').hasClass('active')) {
					 $('.slider #image-slider-ul li:first-child').css({left: slidewidth}, -200).appendTo('.slider #image-slider-ul');
					 $('.slider #image-slider-ul li.active').css({left: -slidewidth}, -200).removeClass('active').next().addClass('active').css({left: 0}, -200);
				} else {
					$('.slider #image-slider-ul li.active').css({left: -slidewidth}, -200).removeClass('active').next().addClass('active').css({left: 0}, -200);
				}
			}
			function moveleft(){
				var slideheight = $('.slider #image-slider-ul li.active').prev().height();
				var slidewidth = $('.slider #image-slider-ul li.active').prev().width();
				$('.slider').animate({height:slideheight,width:slidewidth},200);


				if ($('.slider #image-slider-ul li:nth-child(2)').hasClass('active')) {
					 $('.slider #image-slider-ul li:last-child').css({left: - slidewidth}, -200).prependTo('.slider #image-slider-ul');
					 $('.slider #image-slider-ul li.active').removeClass('active').css({left: slidewidth}, -200).prev().addClass('active').css({left: 0}, -200);
				} else {
					$('.slider #image-slider-ul li.active').removeClass('active').css({left: slidewidth}, -200).prev().addClass('active').css({left: 0}, -200);
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

/*	second slider js	*/

$(document).ready(function(){ 
		function _slider2(id){
			var slidewidth = $('#second.slider #image-slider-ul-second li').width();
			var slideheight = $('#second.slider #image-slider-ul-second li').outerHeight();

			$('#second.slider').css({'height':slideheight,'width':slidewidth});
			$('#second.slider #image-slider-ul-second li:not(.active002)').css({'left':slidewidth});
      if($('#second.slider #image-slider-ul-second li:nth-child(1)').hasClass('active002')){
        $('#second.slider #image-slider-ul-second li:last-child').css({left: - slidewidth}, -200).prependTo('#second.slider #image-slider-ul-second');
      }
			function moveright2(){
				var slideheight = $('#second.slider #image-slider-ul-second li.active002').next().height();
				var slidewidth = $('#second.slider #image-slider-ul-second li.active002').next().width();
				$('#second.slider').animate({height:slideheight,width:slidewidth},200);
				
				if ($('#second.slider #image-slider-ul-second li:nth-last-child(2)').hasClass('active002')) {
					 $('#second.slider #image-slider-ul-second li:first-child').css({left: slidewidth}, -200).appendTo('#second.slider #image-slider-ul-second');
					 $('#second.slider #image-slider-ul-second li.active002').css({left: -slidewidth}, -200).removeClass('active002').next().addClass('active002').css({left: 0}, -200);
				} else {
					$('#second.slider #image-slider-ul-second li.active002').css({left: -slidewidth}, -200).removeClass('active002').next().addClass('active002').css({left: 0}, -200);
				}
			}
			function moveleft2(){
				var slideheight = $('#second.slider #image-slider-ul-second li.active002').prev().height();
				var slidewidth = $('#second.slider #image-slider-ul-second li.active002').prev().width();
				$('#second.slider').animate({height:slideheight,width:slidewidth},200);


				if ($('#second.slider #image-slider-ul-second li:nth-child(2)').hasClass('active002')) {
					 $('#second.slider #image-slider-ul-second li:last-child').css({left: - slidewidth}, -200).prependTo('#second.slider #image-slider-ul-second');
					 $('#second.slider #image-slider-ul-second li.active002').removeClass('active002').css({left: slidewidth}, -200).prev().addClass('active002').css({left: 0}, -200);
				} else {
					$('#second.slider #image-slider-ul-second li.active002').removeClass('active002').css({left: slidewidth}, -200).prev().addClass('active002').css({left: 0}, -200);
				}	
			} 

			$('.control_next').on('click', function(){ 
				moveright2();
			});
			$('.control_prev').on('click', function(){ 
				moveleft2();
			});
		} 
		_slider2('slider_');
	});

/*	slider image info js	*/

jQuery(document).ready(function ($) {
  
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

/*  first set  */

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

/*  second set  */

// $(document).ready(function() {
//   $('.active002').click(function(e) {
//     // Change Selector Here
//     $(this).toggleClass('fullscreen');
//   });
// });

// $(document).ready(function() {
//   $('.slider002').click(function(e) {
//     // Change Selector Here
//     $(this).toggleClass('fullscreen');
//   });
// });

// $(document).ready(function() {
//   $('.slider003').click(function(e) {
//     // Change Selector Here
//     $(this).toggleClass('fullscreen');
//   });
// });

// $(document).ready(function() {
//   $('.slider004').click(function(e) {
//     // Change Selector Here
//     $(this).toggleClass('fullscreen');
//   });
// });

// $(document).ready(function() {
//   $('.slider005').click(function(e) {
//     // Change Selector Here
//     $(this).toggleClass('fullscreen');
//   });
// });










/*	enlarge single images js	*/

$(document).ready(function() {
  $('#single-image-container').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
  });
});

$(document).ready(function() {
  $('#single-image-container.two').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
  });
});

$(document).ready(function() {
  $('#single-image-container.large').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
  });
});

$(document).ready(function() {
  $('#single-image-container.large.two').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
  });
});

$(document).ready(function() {
  $('#single-image-container.large-four').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
  });
});

$(document).ready(function() {
  $('#single-image-container.large-three').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
  });
});


/*	back to top js	*/

$("#scroll-to-top-container").click(function () {
   $("#auto-right").animate({scrollTop: 0}, 7000);
});	





