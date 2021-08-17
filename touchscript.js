/*  document load test  */

$(document).ready(function() {

  /*  count number of page links  */

  //   var count = $("ul > li").size();
  // alert(count);

  $("#nav-bottom-copy-three").addClass("disabled");

  console.log("document loaded");
});

const isDesktop = window.matchMedia("only screen and (min-width:641px)").matches;

const isMobile = window.matchMedia("only screen and (min-device-width: 320px) and (max-device-width: 480px)").matches;

$(window).on("load", function() {
  console.log("window loaded");

  if (isDesktop) {

    $('#auto-left-copy-section.hidden').css('display', 'none');
    $("#nav-top-copy").delay(2000).animate({
      fontSize: "1.1vh"
    }, 400);
    $("#nav-top-copy.two").delay(2000).animate({
      fontSize: "1.1vh"
    }, 400);
    $("#nav-top-copy.three").delay(2000).animate({
      fontSize: "1.1vh"
    }, 400);
    $("#nav-middle-copy-section").delay(2000).animate({
      'marginTop': "5px"
    }, 400);
    $("#nav-middle-copy-section").delay(2000).animate({
      'marginRight': "15px"
    }, 400);
    $("#nav-middle-copy-section").delay(2000).animate({
      width: "95%"
    }, 400);
    $("#nav-middle").delay(2000).animate({
      height: "58%"
    }, 400);
    $("#nav-middle-copy").delay(2000).animate({
      fontSize: "7vh"
    }, 400);
    $("#nav-bottom-copy").delay(2000).animate({
      fontSize: "1.3vh"
    }, 400);
    $("#nav-bottom-copy-two").delay(2000).animate({
      fontSize: "1.8vh"
    }, 400);
    $("#nav-bottom-copy-three").delay(2000).animate({
      fontSize: "1.3vh"
    }, 400);

    $("#top-part").delay(2000).animate({
      height: "20vh"
    }, 400);
    $("#bottom-part").delay(2000).animate({
      top: "13.1vh"
    }, 400);
    $("#bottom-part").delay(800).animate({
      height: "80vh"
    }, 400);
    $("#top-part").delay(2000).animate({
      width: "20vw"
    }, 400);
    $("#top-part").css("z-index", "5", 3000);
    $("#bottom-part").delay(800).animate({
      height: "95vh"
    }, 400);
    $("#auto-right").delay(2000).animate({
      top: "20vh"
    }, 400);
    $("#auto-left").delay(2000).animate({
      width: "20vw"
    }, 400);
    $("#bottom-part").delay(2000).animate({
      top: "0vh"
    }, 400);
    // $('#auto-left-copy-section.hidden').delay( 6000 ).addClass('show');
    // $('#auto-left-copy-section.hidden').delay( 6000 ).removeClass('hidden');
    $('.hidden-name').delay(6000).addClass("display");

  }

  //   if (isMobile) {
  // $( "#nav-top-copy" ).delay( 2000 ).animate({fontSize: "1vh" }, 400 );
  // $( "#nav-top-copy.two" ).delay( 2000 ).animate({fontSize: "1vh" }, 400 );
  // $( "#nav-top-copy.three" ).delay( 2000 ).animate({fontSize: "1vh" }, 400 );
  // $( "#nav-top-link-one" ).delay( 2000 ).animate({fontSize: "1vh" }, 400 );
  // $( "#nav-top-link-two" ).delay( 2000 ).animate({fontSize: "1vh" }, 400 );
  // $( "#nav-top-link-three" ).delay( 2000 ).animate({fontSize: "1vh" }, 400 );
  // $( "#nav-middle-copy-section" ).delay( 2000 ).animate({ 'marginTop' : "5px" }, 400 );
  // $( "#nav-middle-copy" ).delay( 2000 ).animate({fontSize: "6vh" }, 400 );
  // $( "#nav-middle-copy" ).delay( 2000 ).animate({fontSize: "6vh" }, 400 );
  // $( "#nav-bottom-copy" ).delay( 2000 ).animate({fontSize: "1.2vh" }, 400 );
  // $( "#nav-bottom-copy-two" ).delay( 2000 ).animate({fontSize: "1.2vh" }, 400 );
  // $( "#nav-bottom-copy-three" ).delay( 2000 ).animate({fontSize: "1.2vh" }, 400 );
  // $( "#top-part" ).delay( 2000 ).animate({ height: "13vh" }, 400 );
  // $( "#bottom-part" ).delay( 2000 ).animate({ top: "12.5vh" }, 400 );
  // $( "#bottom-part" ).delay( 800 ).animate({ height: "80vh" }, 400 );
  //   }

});

/*  collapsable bio's  */

$('#bio-arrow-container.first').click(function() {
  $(this).toggleClass("arrow-up");
  $('#auto-left-bio-container.first').slideToggle(500, 'linear');
});

$('#bio-arrow-container.second').click(function() {
  $(this).toggleClass("arrow-up");
  $('#auto-left-bio-container.second').slideToggle(500, 'linear');
});

$('#bio-arrow-container.third').click(function() {
  $(this).toggleClass("arrow-up");
  $('#auto-left-bio-container.third').slideToggle(500, 'linear');
});

$('#bio-arrow-container.fourth').click(function() {
  $(this).toggleClass("arrow-up");
  $('#auto-left-bio-container.fourth').slideToggle(500, 'linear');
});

$('#bio-arrow-container.katherine').click(function() {
  $(this).toggleClass("arrow-up");
  $('#auto-left-bio-container.katherine').slideToggle(500, 'linear');
});

$('#bio-arrow-container.sixth').click(function() {
  $(this).toggleClass("arrow-up");
  $('#auto-left-bio-container.sixth').slideToggle(500, 'linear');
});

$('#bio-arrow-container.seventh').click(function() {
  $(this).toggleClass("arrow-up");
  $('#auto-left-bio-container.seventh').slideToggle(500, 'linear');
});

$('#bio-arrow-container.eighth').click(function() {
  $(this).toggleClass("arrow-up");
  $('#auto-left-bio-container.eighth').slideToggle(500, 'linear');
});

$('#bio-arrow-container.ninth').click(function() {
  $(this).toggleClass("arrow-up");
  $('#auto-left-bio-container.ninth').slideToggle(500, 'linear');
});

$('#bio-arrow-container.tenth').click(function() {
  $(this).toggleClass("arrow-up");
  $('#auto-left-bio-container.tenth').slideToggle(500, 'linear');
});

$('#bio-arrow-container.eleventh').click(function() {
  $(this).toggleClass("arrow-up");
  $('#auto-left-bio-container.eleventh').slideToggle(500, 'linear');
});

$('#bio-arrow-container.twelveth').click(function() {
  $(this).toggleClass("arrow-up");
  $('#auto-left-bio-container.twelveth').slideToggle(500, 'linear');
});


/*  index button switch colors  */

function Index() {

  $("#nav-bottom-copy").addClass("disabled");
  $("#nav-bottom-copy-three").removeClass("disabled");

  if (isDesktop) {

    /* top part */

    $("#top-part").css("background-color", "white");
    $("#top-part").css("color", "black");
    $("#nav-top-link-one").css("color", "black");
    $("#nav-top-link-two").css("color", "black");
    $("#nav-top-link-three").css("color", "black");
    $("#nav-middle").css("border-top", "2px black solid");
    $("#nav-middle").css("border-bottom", "2px black solid");
    $("#nav-middle-copy").css("color", "black");
    $("#nav-bottom-copy").css("color", "black");
    $("#nav-bottom-copy-two").css("color", "black");
    $("#nav-bottom-copy-three").css("color", "black");
    $("#marquee-part").css("background-color", "white");
    $("#scroll").css("color", "black");

    /* content part */

    var element = document.getElementById("bottom-part");
    element.classList.toggle("index");

    $("#top-part").css({
      height: "20vh"
    }, 400);
    $("#nav-top-copy").delay(2000).animate({
      fontSize: "2vh"
    }, 400);
    $("#nav-top-copy.two").delay(2000).animate({
      fontSize: "2vh"
    }, 400);
    $("#nav-top-copy.three").delay(2000).animate({
      fontSize: "2vh"
    }, 400);
    $("#nav-middle-copy").css({
      fontSize: "13vh"
    }, 400);
    $("#nav-middle-copy-section").delay(2000).animate({
      'marginTop': "8px"
    }, 400);
    $("#nav-bottom-copy").delay(2000).animate({
      fontSize: "2vh"
    }, 400);
    $("#nav-bottom-copy-two").delay(2000).animate({
      fontSize: "2vh"
    }, 400);
    $("#nav-bottom-copy-three").delay(2000).animate({
      fontSize: "2vh"
    }, 400);
    $("#bottom-part").css({
      top: "21.5vh"
    }, 400);
    $("#bottom-part").css({
      height: "70vh"
    }, 400);
    $("#top-part").css({
      width: "100vw"
    }, 400);
    $("#auto-right").css({
      top: "20vh"
    }, 400);

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
  }

  if (isMobile) {

  }

}

/*  autopilot button switch colors  */

function Autopilot() {

  $("#nav-bottom-copy-three").addClass("disabled");
  $("#nav-bottom-copy").removeClass("disabled");

  if (isDesktop) {

    /* top part */

    $("#top-part").css("background-color", "#C7C6C5");
    $("#top-part").css("color", "black");
    $("#nav-top-link-one").css("color", "black");
    $("#nav-top-link-two").css("color", "black");
    $("#nav-top-link-three").css("color", "black");
    $("#nav-middle").css("border-top", "2px black solid");
    $("#nav-middle").css("border-bottom", "2px black solid");
    $("#nav-middle-copy").css("color", "black");
    $("#nav-bottom-copy").css("color", "black");
    $("#nav-bottom-copy-two").css("color", "black");
    $("#nav-bottom-copy-three").css("color", "black");
    $("#marquee-part").css("background-color", "black");
    $("#scroll").css("color", "white");

    /* content part */

    var element = document.getElementById("bottom-part");
    element.classList.toggle("index");

    $("#nav-top-copy").css({
      fontSize: "1.1vh"
    }, 400);
    $("#nav-top-copy.two").css({
      fontSize: "1.1vh"
    }, 400);
    $("#nav-top-copy.three").css({
      fontSize: "1.1vh"
    }, 400);
    $("#nav-middle-copy-section").css({
      'marginTop': "5px"
    }, 400);
    $("#nav-middle-copy-section").css({
      'marginRight': "15px"
    }, 400);
    $("#nav-middle-copy-section").css({
      width: "95%"
    }, 400);
    $("#nav-middle").css({
      height: "58%"
    }, 400);
    $("#nav-middle-copy").css({
      fontSize: "7vh"
    }, 400);
    $("#nav-bottom-copy").css({
      fontSize: "1.3vh"
    }, 400);
    $("#nav-bottom-copy-two").css({
      fontSize: "1.8vh"
    }, 400);
    $("#nav-bottom-copy-three").css({
      fontSize: "1.3vh"
    }, 400);
    $("#top-part").css({
      height: "20vh"
    }, 400);
    $("#bottom-part").css({
      top: "13.1vh"
    }, 400);
    $("#bottom-part").css({
      height: "80vh"
    }, 400);
    $("#top-part").css({
      width: "20vw"
    }, 400);
    $("#top-part").css("z-index", "5", 3000);
    $("#bottom-part").css({
      height: "95vh"
    }, 400);
    $("#auto-right").css({
      top: "20vh"
    }, 400);
    $("#auto-left").css({
      width: "20vw"
    }, 400);
    $("#bottom-part").css({
      top: "0vh"
    }, 400);

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

  }

  if (isMobile) {


  }

}

/*  all content slider js */

$(document).ready(function() {

  var first_class = $('#slider ul li:first').attr('class')
  var last_class = $('#slider ul li:last').attr('class')

  function nav_button(e, direction) {
    e.preventDefault()
    var current = $("#slider ul li:visible").hide()
    var current_class = current.attr('class')
    var next = current[direction]()

    var index = next.attr('data-nav')
    index = parseInt(index)

    if (!isNaN(index)) {
      $('.selected').removeClass('selected')
      var nav_section = $('.nav-section').eq(index)
      nav_section.addClass('selected')
      // var y = nav_section[0].offsetTop-26
      // $('#auto-left')[0].scrollTo(0, y)
    }

    if (current_class == last_class) {
      next = $('#slider ul li:first')
    }
    next.fadeIn(1000).show()

  }

  $("#slider-nav-right-img").click(function(e) {
    nav_button(e, 'next')
  })


  $("#slider-nav-left-img").click(function(e) {
    nav_button(e, 'prev')
  })

})

function showSlider() {

  $("#nav-bottom-copy-three").addClass("disabled");
  $("#nav-bottom-copy").removeClass("disabled");

  if (isDesktop) {

    /* top part */

    $("#top-part").css("background-color", "#C7C6C5");
    $("#top-part").css("color", "black");
    $("#nav-top-link-one").css("color", "black");
    $("#nav-top-link-two").css("color", "black");
    $("#nav-top-link-three").css("color", "black");
    $("#nav-middle").css("border-top", "2px black solid");
    $("#nav-middle").css("border-bottom", "2px black solid");
    $("#nav-middle-copy").css("color", "black");
    $("#nav-bottom-copy").css("color", "black");
    $("#nav-bottom-copy-two").css("color", "black");
    $("#nav-bottom-copy-three").css("color", "black");
    $("#marquee-part").css("background-color", "black");
    $("#scroll").css("color", "white");

    /* content part */

    var element = document.getElementById("bottom-part");
    element.classList.toggle("index");

    $("#nav-top-copy").css({
      fontSize: "1.1vh"
    }, 400);
    $("#nav-top-copy.two").css({
      fontSize: "1.1vh"
    }, 400);
    $("#nav-top-copy.three").css({
      fontSize: "1.1vh"
    }, 400);
    $("#nav-middle-copy-section").css({
      'marginTop': "5px"
    }, 400);
    $("#nav-middle-copy-section").css({
      'marginRight': "15px"
    }, 400);
    $("#nav-middle-copy-section").css({
      width: "95%"
    }, 400);
    $("#nav-middle").css({
      height: "58%"
    }, 400);
    $("#nav-middle-copy").css({
      fontSize: "7vh"
    }, 400);
    $("#nav-bottom-copy").css({
      fontSize: "1.3vh"
    }, 400);
    $("#nav-bottom-copy-two").css({
      fontSize: "1.8vh"
    }, 400);
    $("#nav-bottom-copy-three").css({
      fontSize: "1.3vh"
    }, 400);
    $("#top-part").css({
      height: "20vh"
    }, 400);
    $("#bottom-part").css({
      top: "13.1vh"
    }, 400);
    $("#bottom-part").css({
      height: "80vh"
    }, 400);
    $("#top-part").css({
      width: "20vw"
    }, 400);
    $("#top-part").css("z-index", "5", 3000);
    $("#bottom-part").css({
      height: "95vh"
    }, 400);
    $("#auto-right").css({
      top: "20vh"
    }, 400);
    $("#auto-left").css({
      width: "20vw"
    }, 400);
    $("#bottom-part").css({
      top: "0vh"
    }, 400);

    var x = document.getElementById("auto-left");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }


    var x = document.getElementById("auto-right");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }


    var x = document.getElementById("index-left");
    // x.style.display = "flex";
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }

    var x = document.getElementById("index-right");
    // x.style.display = "flex";
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }
}

function openSliderWithSpecificSlide($slider, $sliderItems, slideIndex) {
  $slider.find('li').hide()
  var $selectedSlide = $sliderItems.eq(slideIndex)
  $selectedSlide.fadeIn(1000).show()
}

$(document).ready(function() {
  var $items = $('.js-index-box-container .index-box')
  var $slider = $('.slider-ul')
  var $sliderItems = $slider.find('li')
  $items.click(function(e) {
    var slideIndex = $(this).attr('data-slide')
    openSliderWithSpecificSlide($slider, $sliderItems, slideIndex)
    showSlider()
  })

  var $navItems = $('#auto-left-content-container .nav-section').click(function(e) {
    $('.selected').removeClass('selected')
    $(this).addClass('selected')
    var slideIndex = $(this).attr('data-slide')
    openSliderWithSpecificSlide($slider, $sliderItems, slideIndex)
    // showSlider()
  })
  // console.log('navItems', $navItems)

})

/*	audio players js	*/

/*	first audio */

function play() {
  var audio = document.getElementById("first-audio");
  audio.currentTime = 0;
  audio.play();
  console.log(audio.currentTime);
  setInterval(function() {

    if (audio.currentTime > 27) {

      audio.pause();
    }
  }, 1000);
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
  audio3.currentTime = 28;
  audio3.play();
  console.log(audio3.currentTime);
  setInterval(function() {

    if (audio3.currentTime > 107) {

      audio3.pause();
      console.log(audio3.currentTime);
    }
  }, 1000);
}

function pause3() {
  var audio3 = document.getElementById("third-audio");
  audio3.pause();
}

/*	fourth audio */

function play4() {
  var audio4 = document.getElementById("fourth-audio");
  audio4.currentTime = 108;
  audio4.play();
  console.log(audio4.currentTime);
  setInterval(function() {

    if (audio4.currentTime > 158) {

      audio4.pause();
      console.log(audio4.currentTime);
    }
  }, 1000);
}

function pause4() {
  var audio4 = document.getElementById("fourth-audio");
  audio4.pause();
}

/*	fifth audio */

function play5() {
  var audio5 = document.getElementById("fifth-audio");
  audio5.currentTime = 249;
  audio5.play();
  console.log(audio5.currentTime);
  setInterval(function() {

    if (audio5.currentTime > 317) {

      audio5.pause();
      console.log(audio5.currentTime);
    }
  }, 1000);
}

function pause5() {
  var audio5 = document.getElementById("fifth-audio");
  audio5.pause();
}

/*	sixth audio */

function play6() {
  var audio6 = document.getElementById("sixth-audio");
  audio6.currentTime = 318;
  audio6.play();
  console.log(audio6.currentTime);
  setInterval(function() {

    if (audio6.currentTime > 357) {

      audio6.pause();
      console.log(audio6.currentTime);
    }
  }, 1000);
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

// $( function() {
//   $( "#draggable" ).draggable();
// } );

// $( function() {
//   $( "#draggable-two" ).draggable();
// } );

//  $( function() {
//   $( "#draggable-three" ).draggable();
// } );

//  $( function() {
//   $( "#draggable-six" ).draggable();
// } );

//  $( function() {
//   $( "#draggable-seven" ).draggable();
// } );

/*	time on autopilot page counter js	*/

var timerVar = setInterval(countTimer, 1000);
var totalSeconds = 0;

function countTimer() {
  ++totalSeconds;
  var hour = Math.floor(totalSeconds / 3600);
  var minute = Math.floor((totalSeconds - hour * 3600) / 60);
  var seconds = totalSeconds - (hour * 3600 + minute * 60);
  if (hour < 10)
    hour = "0" + hour;
  if (minute < 10)
    minute = "0" + minute;
  if (seconds < 10)
    seconds = "0" + seconds;
  document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
}

/*  index rows (1-4) shuffle js */

// $(function () {
//     var parent = $(".shuffle-all");
//     var divs = parent.children();
//     while (divs.length) {
//         parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
//     }
// });

// $(function () {
//     var parent = $(".shuffle-1");
//     var divs = parent.children();
//     while (divs.length) {
//         parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
//     }
// });

// $(function () {
//     var parent = $(".shuffle-2");
//     var divs = parent.children();
//     while (divs.length) {
//         parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
//     }
// });

// $(function () {
//     var parent = $(".shuffle-3");
//     var divs = parent.children();
//     while (divs.length) {
//         parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
//     }
// });

// $(function () {
//     var parent = $(".shuffle-4");
//     var divs = parent.children();
//     while (divs.length) {
//         parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
//     }
// });

// $(function () {
//     var parent = $(".shuffle-5");
//     var divs = parent.children();
//     while (divs.length) {
//         parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
//     }
// });


//   $('#auto-left-copy-section-nav1, #auto-left-copy-section-nav3, #auto-left-copy-section-nav4, #auto-left-copy-section-nav5, #auto-left-copy-section-nav6, #auto-left-copy-section-nav7, #auto-left-copy-section-nav8, #auto-left-copy-section-nav9, #auto-left-copy-section-nav10, #auto-left-copy-section-nav11, #auto-left-copy-section-nav12, #auto-left-copy-section-nav13, #auto-left-copy-section-nav14, #auto-left-copy-section-nav15, #auto-left-copy-section-nav16, #auto-left-copy-section-nav17, #auto-left-copy-section-nav18, #auto-left-copy-section-nav19, #auto-left-copy-section-nav20, #auto-left-copy-section-nav21, #auto-left-copy-section-nav22, #auto-left-copy-section-nav23, #auto-left-copy-section-nav24, #auto-left-copy-section-nav25, #auto-left-copy-section-nav26, #auto-left-copy-section-nav27, #auto-left-copy-section-nav28, #auto-left-copy-section-nav29, #auto-left-copy-section-nav30, #auto-left-copy-section-nav31, #auto-left-copy-section-nav32, #auto-left-copy-section-nav33, #auto-left-copy-section-nav34, #auto-left-copy-section-nav35, #auto-left-copy-section-nav36, #auto-left-copy-section-nav37, #auto-left-copy-section-nav38').css('opacity', '0.5');

/* nav readers full opacity */

function Nav1() {

  $('#auto-left-copy-section-nav1').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}


function Nav2() {

  $('#auto-left-copy-section-nav2').css('opacity', '1');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

// $("#auto-left-copy-section-nav2").click(function(){
//   $('#auto-left-copy-section-nav-1').css('opacity', '0.5');
//   $('#auto-left-copy-section-nav-2').css('opacity', '1');
//   // alert($("li.slider2").hasClass("slider1"));
// });



function Nav3() {
  $('#auto-left-copy-section-nav3').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav4() {
  $('#auto-left-copy-section-nav4').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav5() {
  $('#auto-left-copy-section-nav5').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav6() {
  $('#auto-left-copy-section-nav6').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav7() {
  $('#auto-left-copy-section-nav7').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav8() {
  $('#auto-left-copy-section-nav8').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav9() {
  $('#auto-left-copy-section-nav9').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav10() {
  $('#auto-left-copy-section-nav10').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav11() {
  $('#auto-left-copy-section-nav11').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav12() {
  $('#auto-left-copy-section-nav12').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav13() {
  $('#auto-left-copy-section-nav13').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav14() {
  $('#auto-left-copy-section-nav14').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav15() {
  $('#auto-left-copy-section-nav15').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav16() {
  $('#auto-left-copy-section-nav16').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav17() {
  $('#auto-left-copy-section-nav17').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav18() {
  $('#auto-left-copy-section-nav18').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav19() {
  $('#auto-left-copy-section-nav19').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav20() {
  $('#auto-left-copy-section-nav20').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav21() {
  $('#auto-left-copy-section-nav21').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav22() {
  $('#auto-left-copy-section-nav22').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav23() {
  $('#auto-left-copy-section-nav23').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav24() {
  $('#auto-left-copy-section-nav24').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav25() {
  $('#auto-left-copy-section-nav25').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav26() {
  $('#auto-left-copy-section-nav26').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav27() {
  $('#auto-left-copy-section-nav27').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav28() {
  $('#auto-left-copy-section-nav28').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav29() {
  $('#auto-left-copy-section-nav29').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav30() {
  $('#auto-left-copy-section-nav30').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav31() {
  $('#auto-left-copy-section-nav31').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav32() {
  $('#auto-left-copy-section-nav32').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav33() {
  $('#auto-left-copy-section-nav33').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav34() {
  $('#auto-left-copy-section-nav34').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav35() {
  $('#auto-left-copy-section-nav35').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav36() {
  $('#auto-left-copy-section-nav36').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav37() {
  $('#auto-left-copy-section-nav37').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
  $('#auto-left-copy-section-nav38').css('opacity', '0.5');
}

function Nav38() {
  $('#auto-left-copy-section-nav38').css('opacity', '1');
  $('#auto-left-copy-section-nav2').css('opacity', '0.5');
  $('#auto-left-copy-section-nav3').css('opacity', '0.5');
  $('#auto-left-copy-section-nav4').css('opacity', '0.5');
  $('#auto-left-copy-section-nav5').css('opacity', '0.5');
  $('#auto-left-copy-section-nav6').css('opacity', '0.5');
  $('#auto-left-copy-section-nav7').css('opacity', '0.5');
  $('#auto-left-copy-section-nav8').css('opacity', '0.5');
  $('#auto-left-copy-section-nav9').css('opacity', '0.5');
  $('#auto-left-copy-section-nav10').css('opacity', '0.5');
  $('#auto-left-copy-section-nav11').css('opacity', '0.5');
  $('#auto-left-copy-section-nav12').css('opacity', '0.5');
  $('#auto-left-copy-section-nav13').css('opacity', '0.5');
  $('#auto-left-copy-section-nav14').css('opacity', '0.5');
  $('#auto-left-copy-section-nav15').css('opacity', '0.5');
  $('#auto-left-copy-section-nav16').css('opacity', '0.5');
  $('#auto-left-copy-section-nav17').css('opacity', '0.5');
  $('#auto-left-copy-section-nav18').css('opacity', '0.5');
  $('#auto-left-copy-section-nav19').css('opacity', '0.5');
  $('#auto-left-copy-section-nav20').css('opacity', '0.5');
  $('#auto-left-copy-section-nav21').css('opacity', '0.5');
  $('#auto-left-copy-section-nav22').css('opacity', '0.5');
  $('#auto-left-copy-section-nav23').css('opacity', '0.5');
  $('#auto-left-copy-section-nav24').css('opacity', '0.5');
  $('#auto-left-copy-section-nav25').css('opacity', '0.5');
  $('#auto-left-copy-section-nav26').css('opacity', '0.5');
  $('#auto-left-copy-section-nav27').css('opacity', '0.5');
  $('#auto-left-copy-section-nav28').css('opacity', '0.5');
  $('#auto-left-copy-section-nav29').css('opacity', '0.5');
  $('#auto-left-copy-section-nav30').css('opacity', '0.5');
  $('#auto-left-copy-section-nav31').css('opacity', '0.5');
  $('#auto-left-copy-section-nav32').css('opacity', '0.5');
  $('#auto-left-copy-section-nav33').css('opacity', '0.5');
  $('#auto-left-copy-section-nav34').css('opacity', '0.5');
  $('#auto-left-copy-section-nav35').css('opacity', '0.5');
  $('#auto-left-copy-section-nav36').css('opacity', '0.5');
  $('#auto-left-copy-section-nav37').css('opacity', '0.5');
  $('#auto-left-copy-section-nav1').css('opacity', '0.5');
}

/*	enlarge images js	*/

$(document).ready(function() {

  $('.Exit-Button-2').click(function(e) {
    // Change Selector Here
    $('.slider2-img').removeClass('fullscreen');
    $(this).removeClass('show');
  });

  $('.slider2-img').click(function(e) {
    // Change Selector Here
    $(this).addClass('fullscreen');
    $('.Exit-Button-2').addClass('show');
  });

  $('.Exit-Button-3').click(function(e) {
    // Change Selector Here
    $('.slider3-img').removeClass('fullscreen');
    $(this).removeClass('show');
  });

  $('.slider3-img').click(function(e) {
    // Change Selector Here
    $(this).addClass('fullscreen');
    $('.Exit-Button-3').addClass('show');
  });

  $('.Exit-Button-4').click(function(e) {
    // Change Selector Here
    $('.slider4-img').removeClass('fullscreen');
    $(this).removeClass('show');
  });

  $('.slider4-img').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
    $('.Exit-Button-4').addClass('show');
  });

  $('.Exit-Button-5').click(function(e) {
    // Change Selector Here
    $('.slider5-img').removeClass('fullscreen');
    $(this).removeClass('show');
  });

  $('.slider5-img').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
    $('.Exit-Button-5').addClass('show');
  });

  $('.Exit-Button-5-2').click(function(e) {
    // Change Selector Here
    $('.slider5-2-img').removeClass('fullscreen');
    $(this).removeClass('show');
  });

  $('.slider5-2-img').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
    $('.Exit-Button-5-2').addClass('show');
  });

  $('.Exit-Button-19').click(function(e) {
    // Change Selector Here
    $('.slider19-img').removeClass('fullscreen');
    $(this).removeClass('show');
  });

  $('.slider19-img').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
    $('.Exit-Button-19').addClass('show');
  });

  $('.Exit-Button-20').click(function(e) {
    // Change Selector Here
    $('.slider20-img').removeClass('fullscreen');
    $(this).removeClass('show');
  });

  $('.slider20-img').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
    $('.Exit-Button-20').addClass('show');
  });

  $('.Exit-Button-21').click(function(e) {
    // Change Selector Here
    $('.slider21-img').removeClass('fullscreen');
    $(this).removeClass('show');
  });

  $('.slider21-img').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
    $('.Exit-Button-21').addClass('show');
  });

  $('.Exit-Button-22').click(function(e) {
    // Change Selector Here
    $('.slider22-img').removeClass('fullscreen');
    $(this).removeClass('show');
  });

  $('.slider22-img').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
    $('.Exit-Button-22').addClass('show');
  });

  $('.Exit-Button-23').click(function(e) {
    // Change Selector Here
    $('.slider23-img').removeClass('fullscreen');
    $(this).removeClass('show');
  });

  $('.slider23-img').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
    $('.Exit-Button-23').addClass('show');
  });

  $('.Exit-Button-28').click(function(e) {
    // Change Selector Here
    $('.slider28-img').removeClass('fullscreen');
    $(this).removeClass('show');
  });

  $('.slider28-img').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
    $('.Exit-Button-28').addClass('show');
  });

  $('.Exit-Button-29').click(function(e) {
    // Change Selector Here
    $('.slider29-img').removeClass('fullscreen');
    $(this).removeClass('show');
  });

  $('.slider29-img').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
    $('.Exit-Button-29').addClass('show');
  });

  $('.Exit-Button-30').click(function(e) {
    // Change Selector Here
    $('.slider30-img').removeClass('fullscreen');
    $(this).removeClass('show');
  });

  $('.slider30-img').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
    $('.Exit-Button-30').addClass('show');
  });

  $('.Exit-Button-31').click(function(e) {
    // Change Selector Here
    $('.slider31-img').removeClass('fullscreen');
    $(this).removeClass('show');
  });

  $('.slider31-img').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
    $('.Exit-Button-31').addClass('show');
  });

  $('.Exit-Button-32').click(function(e) {
    // Change Selector Here
    $('.slider32-img').removeClass('fullscreen');
    $(this).removeClass('show');
  });

  $('.slider32-img').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
    $('.Exit-Button-32').addClass('show');
  });

  $('.Exit-Button-64').click(function(e) {
    // Change Selector Here
    $('.slider64-img').removeClass('fullscreen');
    $(this).removeClass('show');
  });

  $('.slider64-img').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
    $('.Exit-Button-64').addClass('show');
  });

  $('.Exit-Button-65').click(function(e) {
    // Change Selector Here
    $('.slider65-img').removeClass('fullscreen');
    $(this).removeClass('show');
  });

  $('.slider65-img').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
    $('.Exit-Button-65').addClass('show');
  });

  $('.Exit-Button-66').click(function(e) {
    // Change Selector Here
    $('.slider66-img').removeClass('fullscreen');
    $(this).removeClass('show');
  });

  $('.slider66-img').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
    $('.Exit-Button-66').addClass('show');
  });

  $('.Exit-Button-71').click(function(e) {
    // Change Selector Here
    $('.slider71-img').removeClass('fullscreen');
    $(this).removeClass('show');
  });

  $('.slider71-img').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
    $('.Exit-Button-71').addClass('show');
  });

  $('.Exit-Button-72').click(function(e) {
    // Change Selector Here
    $('.slider72-img').removeClass('fullscreen');
    $(this).removeClass('show');
  });

  $('.slider72-img').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
    $('.Exit-Button-72').addClass('show');
  });

  $('.Exit-Button-73').click(function(e) {
    // Change Selector Here
    $('.slider73-img').removeClass('fullscreen');
    $(this).removeClass('show');
  });

  $('.slider73-img').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
    $('.Exit-Button-73').addClass('show');
  });

  $('.Exit-Button-74').click(function(e) {
    // Change Selector Here
    $('.slider74-img').removeClass('fullscreen');
    $(this).removeClass('show');
  });

  $('.slider74-img').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
    $('.Exit-Button-74').addClass('show');
  });

  $('.Exit-Button-75').click(function(e) {
    // Change Selector Here
    $('.slider75-img').removeClass('fullscreen');
    $(this).removeClass('show');
  });

  $('.slider75-img').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
    $('.Exit-Button-75').addClass('show');
  });

  $('.Exit-Button-76').click(function(e) {
    // Change Selector Here
    $('.slider76-img').removeClass('fullscreen');
    $(this).removeClass('show');
  });

  $('.slider76-img').click(function(e) {
    // Change Selector Here
    $(this).toggleClass('fullscreen');
    $('.Exit-Button-76').addClass('show');
  });

});
