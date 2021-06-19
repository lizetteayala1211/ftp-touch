
/*  document load test  */

$( document ).ready(function() {
  console.log( "document loaded" );
});

/*  on page load, accordion effect  */

$( window ).on( "load", function() {
   console.log( "window loaded" );
  $( "#nav-top-copy" ).delay( 5000 ).animate({fontSize: "1.3vh" }, 400 );
  $( "#nav-top-copy.two" ).delay( 5000 ).animate({fontSize: "1.3vh" }, 400 );
  $( "#nav-top-copy.three" ).delay( 5000 ).animate({fontSize: "1.3vh" }, 400 );
  $( "#nav-top-link-one" ).delay( 5000 ).animate({fontSize: "1.3vh" }, 400 );
  $( "#nav-top-link-two" ).delay( 5000 ).animate({fontSize: "1.3vh" }, 400 );
  $( "#nav-top-link-three" ).delay( 5000 ).animate({fontSize: "1.3vh" }, 400 );
  $( "#nav-middle-copy-section" ).delay( 5000 ).animate({ 'marginTop' : "5px" }, 400 );
  $( "#nav-middle-copy" ).delay( 5000 ).animate({fontSize: "6vh" }, 400 );
  $( "#nav-bottom-copy" ).delay( 5000 ).animate({fontSize: "1.5vh" }, 400 );
  $( "#nav-bottom-copy-two" ).delay( 5000 ).animate({fontSize: "1.5vh" }, 400 );
  $( "#nav-bottom-copy-three" ).delay( 5000 ).animate({fontSize: "1.5vh" }, 400 );
  $( "#top-part" ).delay( 5000 ).animate({ height: "13vh" }, 400 );
  $( "#bottom-part" ).delay( 5000 ).animate({ top: "13.1vh" }, 400 );
  $( "#bottom-part" ).delay( 800 ).animate({ height: "80vh" }, 400 );


});

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

    var element = document.getElementById("body");
   element.classList.toggle("index"); 



/* content part */

    var element = document.getElementById("bottom-part");
   element.classList.toggle("index"); 

   $( "#bottom-part" ).animate({ top: "13.4vh" }, 400 );

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
    audio.currentTime=0;
    audio.play();
    console.log(audio.currentTime);
    setInterval(function(){
        
        if(audio.currentTime>27){
          
          audio.pause();
        }
      },1000);
  }

    function pause() {
    var audio = document.getElementById("first-audio");
    audio.pause();
  }

/*	second audio */

  function play2() {
    var audio2 = document.getElementById("second-audio");
    audio2.play();
  }

    function pause2() {
    var audio2 = document.getElementById("second-audio");
    audio2.pause();
  }

/*	third audio */

  function play3() {
    var audio3 = document.getElementById("third-audio");
    audio3.currentTime=28;
    audio3.play();
    console.log(audio3.currentTime);
    setInterval(function(){
        
        if(audio3.currentTime>107){
          
          audio3.pause();
          console.log(audio3.currentTime);
        }
      },1000);
  }

    function pause3() {
    var audio3 = document.getElementById("third-audio");
    audio3.pause();
  }

/*	fourth audio */

  function play4() {
    var audio4 = document.getElementById("fourth-audio");
    audio4.currentTime=108;
    audio4.play();
    console.log(audio4.currentTime);
    setInterval(function(){
        
        if(audio4.currentTime>158){
          
          audio4.pause();
          console.log(audio4.currentTime);
        }
      },1000);
  }

    function pause4() {
    var audio4 = document.getElementById("fourth-audio");
    audio4.pause();
  }

/*	fifth audio */

  function play5() {
    var audio5 = document.getElementById("fifth-audio");
    audio5.currentTime=249;
    audio5.play();
    console.log(audio5.currentTime);
    setInterval(function(){
        
        if(audio5.currentTime>317){
          
          audio5.pause();
          console.log(audio5.currentTime);
        }
      },1000);
  }

    function pause5() {
    var audio5 = document.getElementById("fifth-audio");
    audio5.pause();
  }

/*	sixth audio */

  function play6() {
    var audio6 = document.getElementById("sixth-audio");
    audio6.currentTime=318;
    audio6.play();
    console.log(audio6.currentTime);
    setInterval(function(){
        
        if(audio6.currentTime>357){
          
          audio6.pause();
          console.log(audio6.currentTime);
        }
      },1000);
  }

    function pause6() {
    var audio6 = document.getElementById("sixth-audio");
    audio6.pause();
  }

/*	seventh audio */

  function play7() {
    var audio7 = document.getElementById("seventh-audio");
    audio7.play();
  }

    function pause7() {
    var audio7 = document.getElementById("seventh-audio");
    audio7.pause();
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

// /* first slider image info js  */

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

 /*	second slider js	*/

$(document).ready(function(){ 
    function _slider2(id){
      var slidewidth2 = $('.slider2 #image-slider-ul-second li').width();
      var slideheight2 = $('.slider2 #image-slider-ul-second li').outerHeight();

      $('.slider2').css({'height':slideheight2,'width':slidewidth2});
      $('.slider2 #image-slider-ul-second li:not(.active00)').css({'left':slidewidth2});
      if($('.slider2 #image-slider-ul-second li:nth-child(1)').hasClass('active00')){
        $('.slider2 #image-slider-ul-second li:last-child').css({left: - slidewidth2}, -200).prependTo('.slider2 #image-slider-ul-second');
      }      
      function moveright2(){
        var slideheight2 = $('.slider2 #image-slider-ul-second li.active00').next().height();
        var slidewidth2 = $('.slider2 #image-slider-ul-second li.active00').next().width();
        $('.slider2').animate({height:slideheight2,width:slidewidth2},200);
        
        if ($('.slider2 #image-slider-ul-second li:nth-last-child(2)').hasClass('active00')) {
           $('.slider2 #image-slider-ul-second li:first-child').css({left: slidewidth2}, -200).appendTo('.slider2 #image-slider-ul-second');
           $('.slider2 #image-slider-ul-second li.active00').css({left: -slidewidth2}, -200).removeClass('active00').next().addClass('active00').css({left: 0}, -200);
        } else {
          $('.slider2 #image-slider-ul-second li.active00').css({left: -slidewidth2}, -200).removeClass('active00').next().addClass('active00').css({left: 0}, -200);
        }
      }
      function moveleft2(){
        var slideheight2 = $('.slider2 #image-slider-ul-second li.active00').prev().height();
        var slidewidth2 = $('.slider2 #image-slider-ul-second li.active00').prev().width();
        $('.slider2').animate({height:slideheight2,width:slidewidth2},200);


        if ($('.slider2 #image-slider-ul-second li:nth-child(2)').hasClass('active00')) {
           $('.slider2 #image-slider-ul-second li:last-child').css({left: - slidewidth2}, -200).prependTo('.slider2 #image-slider-ul-second');
           $('.slider2 #image-slider-ul-second li.active00').removeClass('active00').css({left: slidewidth2}, -200).prev().addClass('active00').css({left: 0}, -200);
        } else {
          $('.slider2 #image-slider-ul-second li.active00').removeClass('active00').css({left: slidewidth2}, -200).prev().addClass('active00').css({left: 0}, -200);
        } 
      }

      $('.control_next2').on('click', function(){ 
        moveright2();
      });
      $('.control_prev2').on('click', function(){ 
        moveleft2();
      });
    } 
    _slider2('slider_2');
  });

 /* second slider image info js  */

jQuery(document).ready(function ($) {
  
  var slideCount2 = $('#image-slider-nav-info-second ul li').length;
  var slideWidth2 = $('#image-slider-nav-info-second ul li').width();
  var slideHeight2 = $('#image-slider-nav-info-second ul li').height();
  var sliderUlWidth2 = slideCount2 * slideWidth2;

  $('#image-slider-nav-info-second').css({ width: slideWidth2, height: slideHeight2 });
  
  $('#image-slider-nav-info-second ul').css({ width: sliderUlWidth2, marginLeft2: - slideWidth2 });
  
    $('#image-slider-nav-info-second ul li:last-child').prependTo('#image-slider-nav-info-second ul'); 

    function moveLeft2() {
        $('#image-slider-nav-info-second ul').animate({
            left: + slideWidth2
        }, 200, function () {
            $('#image-slider-nav-info-second ul li:last-child').prependTo('#image-slider-nav-info-second ul');
            $('#image-slider-nav-info-second ul').css('left', '');
        });
    };

    function moveRight2() {
        $('#image-slider-nav-info-second ul').animate({
            left: - slideWidth2
        }, 200, function () {
            $('#image-slider-nav-info-second ul li:first-child').appendTo('#image-slider-nav-info-second ul');
            $('#image-slider-nav-info-second ul').css('left', '');
        });
    };

    $('.control_next2').click(function () {
        moveLeft2();
    });

    $('.control_prev2').click(function () {
        moveRight2();
    });

});  

 /* third slider js  */

$(document).ready(function(){ 
    function _slider3(id){
      var slidewidth3 = $('.slider3 #image-slider-ul-third li').width();
      var slideheight3 = $('.slider3 #image-slider-ul-third li').outerHeight();

      $('.slider3').css({'height':slideheight3,'width':slidewidth3});
      $('.slider3 #image-slider-ul-third li:not(.active000)').css({'left':slidewidth3});
      if($('.slider3 #image-slider-ul-third li:nth-child(1)').hasClass('active000')){
        $('.slider3 #image-slider-ul-third li:last-child').css({left: - slidewidth3}, -200).prependTo('.slider3 #image-slider-ul-third');
      }      
      function moveright3(){
        var slideheight3 = $('.slider3 #image-slider-ul-third li.active000').next().height();
        var slidewidth3 = $('.slider3 #image-slider-ul-third li.active000').next().width();
        $('.slider3').animate({height:slideheight3,width:slidewidth3},200);
        
        if ($('.slider3 #image-slider-ul-third li:nth-last-child(2)').hasClass('active000')) {
           $('.slider3 #image-slider-ul-third li:first-child').css({left: slidewidth3}, -200).appendTo('.slider3 #image-slider-ul-third');
           $('.slider3 #image-slider-ul-third li.active000').css({left: -slidewidth3}, -200).removeClass('active000').next().addClass('active000').css({left: 0}, -200);
        } else {
          $('.slider3 #image-slider-ul-third li.active000').css({left: -slidewidth3}, -200).removeClass('active000').next().addClass('active000').css({left: 0}, -200);
        }
      }
      function moveleft3(){
        var slideheight3 = $('.slider3 #image-slider-ul-third li.active000').prev().height();
        var slidewidth3 = $('.slider3 #image-slider-ul-third li.active000').prev().width();
        $('.slider3').animate({height:slideheight3,width:slidewidth3},200);


        if ($('.slider3 #image-slider-ul-third li:nth-child(2)').hasClass('active000')) {
           $('.slider3 #image-slider-ul-third li:last-child').css({left: - slidewidth3}, -200).prependTo('.slider3 #image-slider-ul-third');
           $('.slider3 #image-slider-ul-third li.active000').removeClass('active000').css({left: slidewidth3}, -200).prev().addClass('active000').css({left: 0}, -200);
        } else {
          $('.slider3 #image-slider-ul-third li.active000').removeClass('active000').css({left: slidewidth3}, -200).prev().addClass('active000').css({left: 0}, -200);
        } 
      }

      $('.control_next3').on('click', function(){ 
        moveright3();
      });
      $('.control_prev3').on('click', function(){ 
        moveleft3();
      });
    } 
    _slider3('slider_3');
  });

 /* third slider image info js  */

jQuery(document).ready(function ($) {
  
  var slideCount3 = $('#image-slider-nav-info-third ul li').length;
  var slideWidth3 = $('#image-slider-nav-info-third ul li').width();
  var slideHeight3 = $('#image-slider-nav-info-third ul li').height();
  var sliderUlWidth3 = slideCount3 * slideWidth3;

  $('#image-slider-nav-info-third').css({ width: slideWidth3, height: slideHeight3 });
  
  $('#image-slider-nav-info-third ul').css({ width: sliderUlWidth3, marginLeft3: - slideWidth3 });
  
    $('#image-slider-nav-info-third ul li:last-child').prependTo('#image-slider-nav-info-third ul'); 

    function moveLeft3() {
        $('#image-slider-nav-info-third ul').animate({
            left: + slideWidth3
        }, 200, function () {
            $('#image-slider-nav-info-third ul li:last-child').prependTo('#image-slider-nav-info-third ul');
            $('#image-slider-nav-info-third ul').css('left', '');
        });
    };

    function moveRight3() {
        $('#image-slider-nav-info-third ul').animate({
            left: - slideWidth3
        }, 200, function () {
            $('#image-slider-nav-info-third ul li:first-child').appendTo('#image-slider-nav-info-third ul');
            $('#image-slider-nav-info-third ul').css('left', '');
        });
    };

    $('.control_next3').click(function () {
        moveLeft3();
    });

    $('.control_prev3').click(function () {
        moveRight3();
    });

});  

 /* fourth slider js  */

$(document).ready(function(){ 
    function _slider4(id){
      var slidewidth4 = $('.slider4 #image-slider-ul-fourth li').width();
      var slideheight4 = $('.slider4 #image-slider-ul-fourth li').outerHeight();

      $('.slider4').css({'height':slideheight4,'width':slidewidth4});
      $('.slider4 #image-slider-ul-fourth li:not(.active0000)').css({'left':slidewidth4});
      if($('.slider4 #image-slider-ul-fourth li:nth-child(1)').hasClass('active0000')){
        $('.slider4 #image-slider-ul-fourth li:last-child').css({left: - slidewidth4}, -200).prependTo('.slider4 #image-slider-ul-fourth');
      }      
      function moveright4(){
        var slideheight4 = $('.slider4 #image-slider-ul-fourth li.active0000').next().height();
        var slidewidth4 = $('.slider4 #image-slider-ul-fourth li.active0000').next().width();
        $('.slider4').animate({height:slideheight4,width:slidewidth4},200);
        
        if ($('.slider4 #image-slider-ul-fourth li:nth-last-child(2)').hasClass('active0000')) {
           $('.slider4 #image-slider-ul-fourth li:first-child').css({left: slidewidth4}, -200).appendTo('.slider4 #image-slider-ul-fourth');
           $('.slider4 #image-slider-ul-fourth li.active0000').css({left: -slidewidth4}, -200).removeClass('active0000').next().addClass('active0000').css({left: 0}, -200);
        } else {
          $('.slider4 #image-slider-ul-fourth li.active0000').css({left: -slidewidth4}, -200).removeClass('active0000').next().addClass('active0000').css({left: 0}, -200);
        }
      }
      function moveleft4(){
        var slideheight4 = $('.slider4 #image-slider-ul-fourth li.active0000').prev().height();
        var slidewidth4 = $('.slider4 #image-slider-ul-fourth li.active0000').prev().width();
        $('.slider4').animate({height:slideheight4,width:slidewidth4},200);


        if ($('.slider4 #image-slider-ul-fourth li:nth-child(2)').hasClass('active0000')) {
           $('.slider4 #image-slider-ul-fourth li:last-child').css({left: - slidewidth4}, -200).prependTo('.slider4 #image-slider-ul-fourth');
           $('.slider4 #image-slider-ul-fourth li.active0000').removeClass('active0000').css({left: slidewidth4}, -200).prev().addClass('active0000').css({left: 0}, -200);
        } else {
          $('.slider4 #image-slider-ul-fourth li.active0000').removeClass('active0000').css({left: slidewidth4}, -200).prev().addClass('active0000').css({left: 0}, -200);
        } 
      }

      $('.control_next4').on('click', function(){ 
        moveright4();
      });
      $('.control_prev4').on('click', function(){ 
        moveleft4();
      });
    } 
    _slider4('slider_4');
  });

 /* fourth slider image info js  */

jQuery(document).ready(function ($) {
  
  var slideCount4 = $('#image-slider-nav-info-fourth ul li').length;
  var slideWidth4 = $('#image-slider-nav-info-fourth ul li').width();
  var slideHeight4 = $('#image-slider-nav-info-fourth ul li').height();
  var sliderUlWidth4 = slideCount4 * slideWidth4;

  $('#image-slider-nav-info-fourth').css({ width: slideWidth4, height: slideHeight4 });
  
  $('#image-slider-nav-info-fourth ul').css({ width: sliderUlWidth4, marginLeft4: - slideWidth4 });
  
    $('#image-slider-nav-info-fourth ul li:last-child').prependTo('#image-slider-nav-info-fourth ul'); 

    function moveLeft4() {
        $('#image-slider-nav-info-fourth ul').animate({
            left: + slideWidth4
        }, 200, function () {
            $('#image-slider-nav-info-fourth ul li:last-child').prependTo('#image-slider-nav-info-fourth ul');
            $('#image-slider-nav-info-fourth ul').css('left', '');
        });
    };

    function moveRight4() {
        $('#image-slider-nav-info-fourth ul').animate({
            left: - slideWidth4
        }, 200, function () {
            $('#image-slider-nav-info-fourth ul li:first-child').appendTo('#image-slider-nav-info-fourth ul');
            $('#image-slider-nav-info-fourth ul').css('left', '');
        });
    };

    $('.control_next4').click(function () {
        moveLeft4();
    });

    $('.control_prev4').click(function () {
        moveRight4();
    });

});  

//  /* fifth slider js  */

// $(document).ready(function(){ 
//     function _slider5(id){
//       var slidewidth5 = $('.slider4 #image-slider-ul-fifth li').width();
//       var slideheight5 = $('.slider4 #image-slider-ul-fifth li').outerHeight();

//       $('.slider5').css({'height':slideheight5,'width':slidewidth5});
//       $('.slider5 #image-slider-ul-fifth li:not(.active00000)').css({'left':slidewidth5});
//       if($('.slider5 #image-slider-ul-fifth li:nth-child(1)').hasClass('active00000')){
//         $('.slider5 #image-slider-ul-fifth li:last-child').css({left: - slidewidth5}, -200).prependTo('.slider5 #image-slider-ul-fifth');
//       }      
//       function moveright5(){
//         var slideheight5 = $('.slider5 #image-slider-ul-fifth li.active00000').next().height();
//         var slidewidth5 = $('.slider5 #image-slider-ul-fifth li.active00000').next().width();
//         $('.slider5').animate({height:slideheight5,width:slidewidth5},200);
        
//         if ($('.slider5 #image-slider-ul-fifth li:nth-last-child(2)').hasClass('active00000')) {
//            $('.slider5 #image-slider-ul-fifth li:first-child').css({left: slidewidth5}, -200).appendTo('.slider5 #image-slider-ul-fifth');
//            $('.slider5 #image-slider-ul-fifth li.active00000').css({left: -slidewidth5}, -200).removeClass('active00000').next().addClass('active00000').css({left: 0}, -200);
//         } else {
//           $('.slider5 #image-slider-ul-fifth li.active00000').css({left: -slidewidth5}, -200).removeClass('active00000').next().addClass('active00000').css({left: 0}, -200);
//         }
//       }
//       function moveleft5(){
//         var slideheight5 = $('.slider5 #image-slider-ul-fifth li.active00000').prev().height();
//         var slidewidth5 = $('.slider5 #image-slider-ul-fifth li.active00000').prev().width();
//         $('.slider5').animate({height:slideheight5,width:slidewidth5},200);


//         if ($('.slider5 #image-slider-ul-fifth li:nth-child(2)').hasClass('active00000')) {
//            $('.slider5 #image-slider-ul-fifth li:last-child').css({left: - slidewidth5}, -200).prependTo('.slider5 #image-slider-ul-fifth');
//            $('.slider5 #image-slider-ul-fifth li.active00000').removeClass('active00000').css({left: slidewidth5}, -200).prev().addClass('active00000').css({left: 0}, -200);
//         } else {
//           $('.slider5 #image-slider-ul-fifth li.active00000').removeClass('active00000').css({left: slidewidth5}, -200).prev().addClass('active00000').css({left: 0}, -200);
//         } 
//       }

//       $('.control_next5').on('click', function(){ 
//         moveright5();
//       });
//       $('.control_prev5').on('click', function(){ 
//         moveleft5();
//       });
//     } 
//     _slider5('slider_5');
//   });

//  /* fifth slider image info js  */

// jQuery(document).ready(function ($) {
  
//   var slideCount5 = $('#image-slider-nav-info-fifth ul li').length;
//   var slideWidth5 = $('#image-slider-nav-info-fifth ul li').width();
//   var slideHeight5 = $('#image-slider-nav-info-fifth ul li').height();
//   var sliderUlWidth5 = slideCount5 * slideWidth5;

//   $('#image-slider-nav-info-fifth').css({ width: slideWidth5, height: slideHeight5 });
  
//   $('#image-slider-nav-info-fifth ul').css({ width: sliderUlWidth5, marginLeft5: - slideWidth5 });
  
//     $('#image-slider-nav-info-fifth ul li:last-child').prependTo('#image-slider-nav-info-fifth ul'); 

//     function moveLeft5() {
//         $('#image-slider-nav-info-fifth ul').animate({
//             left: + slideWidth5
//         }, 200, function () {
//             $('#image-slider-nav-info-fifth ul li:last-child').prependTo('#image-slider-nav-info-fifth ul');
//             $('#image-slider-nav-info-fifth ul').css('left', '');
//         });
//     };

//     function moveRight5() {
//         $('#image-slider-nav-info-fifth ul').animate({
//             left: - slideWidth5
//         }, 200, function () {
//             $('#image-slider-nav-info-fifth ul li:first-child').appendTo('#image-slider-nav-info-fifth ul');
//             $('#image-slider-nav-info-fifth ul').css('left', '');
//         });
//     };

//     $('.control_next5').click(function () {
//         moveLeft5();
//     });

//     $('.control_prev5').click(function () {
//         moveRight5();
//     });

// });  



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

$(document).ready(function() {
  $('.active00').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
  });
});

$(document).ready(function() {
  $('.slider02').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
  });
});

$(document).ready(function() {
  $('.slider03').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
  });
});

$(document).ready(function() {
  $('.slider04').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
  });
});

$(document).ready(function() {
  $('.slider05').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
  });
});

/*  third set  */

$(document).ready(function() {
  $('.active000').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
  });
});

$(document).ready(function() {
  $('.slider002').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
  });
});

$(document).ready(function() {
  $('.slider003').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
  });
});

$(document).ready(function() {
  $('.slider004').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
  });
});

$(document).ready(function() {
  $('.slider005').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
  });
});

/*  fourth set  */

$(document).ready(function() {
  $('.active0000').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
  });
});

$(document).ready(function() {
  $('.slider0002').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
  });
});

$(document).ready(function() {
  $('.slider0003').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
  });
});

// /*  fifth set  */

// $(document).ready(function() {
//   $('.active00000').click(function(e) {
//     // Change Selector Here
//     $(this).toggleClass('fullscreen');
//   });
// });

// $(document).ready(function() {
//   $('.slider00002').click(function(e) {
//     // Change Selector Here
//     $(this).toggleClass('fullscreen');
//   });
// });

// $(document).ready(function() {
//   $('.slider00003').click(function(e) {
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
   $("#auto-right").animate({scrollLeft: 0, behavior: 'smooth'});
});	





