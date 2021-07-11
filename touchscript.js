
/*  document load test  */

$( document ).ready(function() {
  console.log( "document loaded" );
});

/*  collapsable bio's  */

$('#bio-arrow-container.first').click(function(){
  $(this).toggleClass("arrow-up");
    $('#auto-left-bio-container.first').slideToggle(500, 'linear');
});

$('#bio-arrow-container.second').click(function(){
  $(this).toggleClass("arrow-up");
    $('#auto-left-bio-container.second').slideToggle(500, 'linear');
});

$('#bio-arrow-container.third').click(function(){
  $(this).toggleClass("arrow-up");
    $('#auto-left-bio-container.third').slideToggle(500, 'linear');
});

$('#bio-arrow-container.fourth').click(function(){
  $(this).toggleClass("arrow-up");
    $('#auto-left-bio-container.fourth').slideToggle(500, 'linear');
});

$('#bio-arrow-container.katherine').click(function(){
  $(this).toggleClass("arrow-up");
    $('#auto-left-bio-container.katherine').slideToggle(500, 'linear');
});

$('#bio-arrow-container.sixth').click(function(){
  $(this).toggleClass("arrow-up");
    $('#auto-left-bio-container.sixth').slideToggle(500, 'linear');
});

$('#bio-arrow-container.seventh').click(function(){
  $(this).toggleClass("arrow-up");
    $('#auto-left-bio-container.seventh').slideToggle(500, 'linear');
});

$('#bio-arrow-container.eighth').click(function(){
  $(this).toggleClass("arrow-up");
    $('#auto-left-bio-container.eighth').slideToggle(500, 'linear');
});

$('#bio-arrow-container.ninth').click(function(){
  $(this).toggleClass("arrow-up");
    $('#auto-left-bio-container.ninth').slideToggle(500, 'linear');
});

$('#bio-arrow-container.tenth').click(function(){
  $(this).toggleClass("arrow-up");
    $('#auto-left-bio-container.tenth').slideToggle(500, 'linear');
});

$('#bio-arrow-container.eleventh').click(function(){
  $(this).toggleClass("arrow-up");
    $('#auto-left-bio-container.eleventh').slideToggle(500, 'linear');
});

$('#bio-arrow-container.twelveth').click(function(){
  $(this).toggleClass("arrow-up");
    $('#auto-left-bio-container.twelveth').slideToggle(500, 'linear');
});

/*  on page load, accordion effect  */

$( window ).on( "load", function() {
   console.log( "window loaded" );
  $( "#nav-top-copy" ).delay( 2000 ).animate({fontSize: "1.3vh" }, 400 );
  $( "#nav-top-copy.two" ).delay( 2000 ).animate({fontSize: "1.3vh" }, 400 );
  $( "#nav-top-copy.three" ).delay( 2000 ).animate({fontSize: "1.3vh" }, 400 );
  $( "#nav-top-link-one" ).delay( 2000 ).animate({fontSize: "1.3vh" }, 400 );
  $( "#nav-top-link-two" ).delay( 2000 ).animate({fontSize: "1.3vh" }, 400 );
  $( "#nav-top-link-three" ).delay( 2000 ).animate({fontSize: "1.3vh" }, 400 );
  $( "#nav-middle-copy-section" ).delay( 2000 ).animate({ 'marginTop' : "5px" }, 400 );
  $( "#nav-middle-copy" ).delay( 2000 ).animate({fontSize: "6vh" }, 400 );
  $( "#nav-bottom-copy" ).delay( 2000 ).animate({fontSize: "1.5vh" }, 400 );
  $( "#nav-bottom-copy-two" ).delay( 2000 ).animate({fontSize: "1.5vh" }, 400 );
  $( "#nav-bottom-copy-three" ).delay( 2000 ).animate({fontSize: "1.5vh" }, 400 );
  $( "#top-part" ).delay( 2000 ).animate({ height: "13vh" }, 400 );
  $( "#bottom-part" ).delay( 2000 ).animate({ top: "13.1vh" }, 400 );
  $( "#bottom-part" ).delay( 800 ).animate({ height: "80vh" }, 400 );
});

/*  index button switch colors  */

function Index() {

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

   $( "#bottom-part" ).animate({ top: "13.1vh" }, 400 );

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

/*  autopilot button switch colors  */

function Autopilot() {

/* top part */

   $('#auto-right-content-container').css('margin-left', '930vw');

   $("#auto-right").animate( { scrollLeft: '+=0' }, 400);   

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

   $( "#bottom-part" ).animate({ top: "13.1vh" }, 400 );

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

/*  richard siken, horizontal written slider  */

$(document).ready(function(){
    $("#all-stanza-container.first #stanza-container.first").each(function(e) {
        if (e != 0)
            $(this).hide();
    });

    $("#written-right-container").click(function(){
        if ($("#all-stanza-container.first #stanza-container.first:visible").next().length != 0)
            $("#all-stanza-container.first #stanza-container.first:visible").next().show().prev().hide();
        else {
            $("#all-stanza-container.first #stanza-container.first:visible").hide();
            $("#all-stanza-container.first #stanza-container.first:first").show();
        }
        return false;
    });

    $("#written-left-container").click(function(){
        if ($("#all-stanza-container.first #stanza-container.first:visible").prev().length != 0)
            $("#all-stanza-container.first #stanza-container.first:visible").prev().show().next().hide();
        else {
            $("#all-stanza-container.first #stanza-container.first:visible").hide();
            $("#all-stanza-container.first #stanza-container.first:last").show();
        }
        return false;
    });
});

/*  billy ray first, horizontal written slider  */

$(document).ready(function(){
    $("#all-stanza-container.two #stanza-container.three").each(function(e) {
        if (e != 0)
            $(this).hide();
    });

    $("#written-right-container.two").click(function(){
        if ($("#all-stanza-container.two #stanza-container.three:visible").next().length != 0)
            $("#all-stanza-container.two #stanza-container.three:visible").next().show().prev().hide();
        else {
            $("#all-stanza-container.two #stanza-container.three:visible").hide();
            $("#all-stanza-container.two #stanza-container.three:first").show();
        }
        return false;
    });

    $("#written-left-container.two").click(function(){
        if ($("#all-stanza-container.two #stanza-container.three:visible").prev().length != 0)
            $("#all-stanza-container.two #stanza-container.three:visible").prev().show().next().hide();
        else {
            $("#all-stanza-container.two #stanza-container.three:visible").hide();
            $("#all-stanza-container.two #stanza-container.three:last").show();
        }
        return false;
    });
});

/*  sable, horizontal written slider  */

$(document).ready(function(){
    $("#all-stanza-container.three #stanza-container.four").each(function(e) {
        if (e != 0)
            $(this).hide();
    });

    $("#written-right-container.three").click(function(){
        if ($("#all-stanza-container.three #stanza-container.four:visible").next().length != 0)
            $("#all-stanza-container.three #stanza-container.four:visible").next().show().prev().hide();
        else {
            $("#all-stanza-container.three #stanza-container.four:visible").hide();
            $("#all-stanza-container.three #stanza-container.four:first").show();
        }
        return false;
    });

    $("#written-left-container.three").click(function(){
        if ($("#all-stanza-container.three #stanza-container.four:visible").prev().length != 0)
            $("#all-stanza-container.three #stanza-container.four:visible").prev().show().next().hide();
        else {
            $("#all-stanza-container.three #stanza-container.four:visible").hide();
            $("#all-stanza-container.three #stanza-container.four:last").show();
        }
        return false;
    });
});

/*  billy ray second, horizontal written slider  */

$(document).ready(function(){
    $("#all-stanza-container.four #stanza-container.five").each(function(e) {
        if (e != 0)
            $(this).hide();
    });

    $("#written-right-container.four").click(function(){
        if ($("#all-stanza-container.four #stanza-container.five:visible").next().length != 0)
            $("#all-stanza-container.four #stanza-container.five:visible").next().show().prev().hide();
        else {
            $("#all-stanza-container.four #stanza-container.five:visible").hide();
            $("#all-stanza-container.four #stanza-container.five:first").show();
        }
        return false;
    });

    $("#written-left-container.four").click(function(){
        if ($("#all-stanza-container.four #stanza-container.five:visible").prev().length != 0)
            $("#all-stanza-container.four #stanza-container.five:visible").prev().show().next().hide();
        else {
            $("#all-stanza-container.four #stanza-container.five:visible").hide();
            $("#all-stanza-container.four #stanza-container.five:last").show();
        }
        return false;
    });
});

/* index reveal one (elliott jerome img one) */

  function IndexBoxShow1() {

  $("#auto-right").animate( { scrollLeft: '+=14300' }, 400); 

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

  var x = document.getElementById("auto-left");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }  

   $('#auto-right-content-container').css('margin-left', '1340vw');


  var x = document.getElementById("auto-right");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }


  var x = document.getElementById("index-left");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }  

  var x = document.getElementById("index-right");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  } 

  }

/* index reveal two (desperate jazz) */

  function IndexBoxShow2() {

  $("#auto-right").animate( { scrollLeft: '+=300' }, 400); 

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

  var x = document.getElementById("auto-left");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }  

   $('#auto-right-content-container').css('margin-left', '1340vw');


  var x = document.getElementById("auto-right");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }


  var x = document.getElementById("index-left");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }  

  var x = document.getElementById("index-right");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  } 


  }  

/* index reveal three (jimmy robert) */

  function IndexBoxShow3() {

  $("#auto-right").animate( { scrollLeft: '+=1020' }, 400);   

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

  var x = document.getElementById("auto-left");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }  

   $('#auto-right-content-container').css('margin-left', '1340vw');


  var x = document.getElementById("auto-right");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }


  var x = document.getElementById("index-left");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }  

  var x = document.getElementById("index-right");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  } 

  }

/* index reveal four (richard siken) */

  function IndexBoxShow4() {

  $("#auto-right").animate( { scrollLeft: '+=1950' }, 400);   

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

  var x = document.getElementById("auto-left");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }  

   $('#auto-right-content-container').css('margin-left', '1340vw');


  var x = document.getElementById("auto-right");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }


  var x = document.getElementById("index-left");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }  

  var x = document.getElementById("index-right");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  } 

  }

/* index reveal five (katherine hubbard) */

  function IndexBoxShow5() {

 $("#auto-right").animate( { scrollLeft: '+=3720' }, 400);   

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

  var x = document.getElementById("auto-left");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }  

   $('#auto-right-content-container').css('margin-left', '1340vw');


  var x = document.getElementById("auto-right");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }


  var x = document.getElementById("index-left");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }  

  var x = document.getElementById("index-right");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  } 

  }

/* index reveal six (strawberry!) */

  function IndexBoxShow6() {

$("#auto-right").animate( { scrollLeft: '+=4500' }, 400);   

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

  var x = document.getElementById("auto-left");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }  

   $('#auto-right-content-container').css('margin-left', '1340vw');


  var x = document.getElementById("auto-right");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }


  var x = document.getElementById("index-left");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }  

  var x = document.getElementById("index-right");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  } 

  }

/* index reveal seven (lacey lennon img one) */

  function IndexBoxShow7() {

$("#auto-right").animate( { scrollLeft: '+=12800' }, 400);   

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

  var x = document.getElementById("auto-left");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }  

   $('#auto-right-content-container').css('margin-left', '1340vw');


  var x = document.getElementById("auto-right");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }


  var x = document.getElementById("index-left");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }  

  var x = document.getElementById("index-right");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }

  }

/* index reveal eight (the way your hair looks on most days) */

  function IndexBoxShow8() {

$("#auto-right").animate( { scrollLeft: '+=7600' }, 400);   

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

  var x = document.getElementById("auto-left");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }  

   $('#auto-right-content-container').css('margin-left', '1340vw');


  var x = document.getElementById("auto-right");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }


  var x = document.getElementById("index-left");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }  

  var x = document.getElementById("index-right");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }

  }

/* index reveal nine (naima green img one) */

  function IndexBoxShow9() {

$("#auto-right").animate( { scrollLeft: '+=2800' }, 400);   

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

  var x = document.getElementById("auto-left");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }  

   $('#auto-right-content-container').css('margin-left', '1340vw');


  var x = document.getElementById("auto-right");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }


  var x = document.getElementById("index-left");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }  

  var x = document.getElementById("index-right");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }

  }

/* index reveal ten (billy ray one) */

  function IndexBoxShow10() {

$("#auto-right").animate( { scrollLeft: '+=5950' }, 400);   

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

  var x = document.getElementById("auto-left");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }  

   $('#auto-right-content-container').css('margin-left', '1340vw');


  var x = document.getElementById("auto-right");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }


  var x = document.getElementById("index-left");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }  

  var x = document.getElementById("index-right");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }

  }

/* index reveal eleven (ray j) */

  function IndexBoxShow11() {

$("#auto-right").animate( { scrollLeft: '+=9900' }, 400);   

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

  var x = document.getElementById("auto-left");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }  

   $('#auto-right-content-container').css('margin-left', '1340vw');


  var x = document.getElementById("auto-right");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }


  var x = document.getElementById("index-left");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }  

  var x = document.getElementById("index-right");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
    
  }

/* index reveal twelve (Caryatid) */

  function IndexBoxShow12() {

$("#auto-right").animate( { scrollLeft: '+=8170' }, 400);   

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

  var x = document.getElementById("auto-left");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }  

   $('#auto-right-content-container').css('margin-left', '1340vw');


  var x = document.getElementById("auto-right");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }


  var x = document.getElementById("index-left");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }  

  var x = document.getElementById("index-right");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }

  }

/* index reveal thirteen (elliott jerome brown img two) */

  function IndexBoxShow13() {

$("#auto-right").animate( { scrollLeft: '+=9100' }, 400);   

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

  var x = document.getElementById("auto-left");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }  

   $('#auto-right-content-container').css('margin-left', '1340vw');


  var x = document.getElementById("auto-right");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }


  var x = document.getElementById("index-left");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }  

  var x = document.getElementById("index-right");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }

  }

/* index reveal fourteen (naima green img two) */

  function IndexBoxShow14() {

$("#auto-right").animate( { scrollLeft: '+=15200' }, 400);   

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

  var x = document.getElementById("auto-left");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }  

   $('#auto-right-content-container').css('margin-left', '1340vw');


  var x = document.getElementById("auto-right");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }


  var x = document.getElementById("index-left");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }  

  var x = document.getElementById("index-right");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }

  }

/* index reveal fifteen (sable elyse smith) */

  function IndexBoxShow15() {

$("#auto-right").animate( { scrollLeft: '+=6700' }, 400);   

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

  var x = document.getElementById("auto-left");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }  

   $('#auto-right-content-container').css('margin-left', '1340vw');


  var x = document.getElementById("auto-right");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }


  var x = document.getElementById("index-left");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }  

  var x = document.getElementById("index-right");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }

  }

/* index reveal sixteen (sticky romance) */

  function IndexBoxShow16() {

$("#auto-right").animate( { scrollLeft: '+=9900' }, 400);   

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

  var x = document.getElementById("auto-left");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }  

   $('#auto-right-content-container').css('margin-left', '1340vw');


  var x = document.getElementById("auto-right");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }


  var x = document.getElementById("index-left");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }  

  var x = document.getElementById("index-right");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }

  }

/* index reveal seventeen (kinky jazz) */

  function IndexBoxShow17() {

$("#auto-right").animate( { scrollLeft: '+=11300' }, 400);   

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

  var x = document.getElementById("auto-left");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }  

   $('#auto-right-content-container').css('margin-left', '1340vw');


  var x = document.getElementById("auto-right");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }


  var x = document.getElementById("index-left");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }  

  var x = document.getElementById("index-right");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }

  }  

/* index reveal eighteen (billy ray second) */

  function IndexBoxShow18() {

$("#auto-right").animate( { scrollLeft: '+=10600' }, 400);   

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

  var x = document.getElementById("auto-left");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }  

   $('#auto-right-content-container').css('margin-left', '1340vw');


  var x = document.getElementById("auto-right");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }


  var x = document.getElementById("index-left");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }  

  var x = document.getElementById("index-right");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }

  }

/* index reveal nineteen (l'rain) */

  function IndexBoxShow19() {

$("#auto-right").animate( { scrollLeft: '+=16650' }, 400);   

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

  var x = document.getElementById("auto-left");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }  

   $('#auto-right-content-container').css('margin-left', '1340vw');


  var x = document.getElementById("auto-right");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }


  var x = document.getElementById("index-left");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }  

  var x = document.getElementById("index-right");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }

  }

/* index reveal twenty (elliott img three) */

  function IndexBoxShow20() {

  $("#auto-right").animate( { scrollLeft: '+=0' }, 400);   

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

  var x = document.getElementById("auto-left");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }  

   $('#auto-right-content-container').css('margin-left', '1340vw');


  var x = document.getElementById("auto-right");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }


  var x = document.getElementById("index-left");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }  

  var x = document.getElementById("index-right");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  } 

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

/*	time on autopilot page counter js	*/

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

// /*  time on index (1) page counter js */

// var timerVar2 = setInterval(countTimer2, 1000);
// var totalSeconds2 = 0;
// function countTimer2() {
//            ++totalSeconds2;
//            var hour = Math.floor(totalSeconds2 /3600);
//            var minute = Math.floor((totalSeconds2 - hour*3600)/60);
//            var seconds = totalSeconds2 - (hour*3600 + minute*60);
//            if(hour < 10)
//              hour = "0"+hour;
//            if(minute < 10)
//              minute = "0"+minute;
//            if(seconds < 10)
//              seconds = "0"+seconds;
//            document.getElementById("timer-two").innerHTML = hour + ":" + minute + ":" + seconds;         
//        }      


// /*  time on index (2) page counter js */

// var timerVar3 = setInterval(countTimer3, 1000);
// var totalSeconds3 = 0;
// function countTimer3() {
//            ++totalSeconds3;
//            var hour = Math.floor(totalSeconds3 /3600);
//            var minute = Math.floor((totalSeconds3 - hour*3600)/60);
//            var seconds = totalSeconds3 - (hour*3600 + minute*60);
//            if(hour < 10)
//              hour = "0"+hour;
//            if(minute < 10)
//              minute = "0"+minute;
//            if(seconds < 10)
//              seconds = "0"+seconds;
//            document.getElementById("timer-three").innerHTML = hour + ":" + minute + ":" + seconds;
//         }

// /*  time on index (3) page counter js */

// var timerVar4 = setInterval(countTimer4, 1000);
// var totalSeconds4 = 0;
// function countTimer4() {
//            ++totalSeconds4;
//            var hour = Math.floor(totalSeconds4 /3600);
//            var minute = Math.floor((totalSeconds4 - hour*3600)/60);
//            var seconds = totalSeconds4 - (hour*3600 + minute*60);
//            if(hour < 10)
//              hour = "0"+hour;
//            if(minute < 10)
//              minute = "0"+minute;
//            if(seconds < 10)
//              seconds = "0"+seconds;
//            document.getElementById("timer-four").innerHTML = hour + ":" + minute + ":" + seconds;
//         }

// /*  time on index (4) page counter js */

// var timerVar5 = setInterval(countTimer5, 1000);
// var totalSeconds5 = 0;
// function countTimer5() {
//            ++totalSeconds5;
//            var hour = Math.floor(totalSeconds5 /3600);
//            var minute = Math.floor((totalSeconds5 - hour*3600)/60);
//            var seconds = totalSeconds5 - (hour*3600 + minute*60);
//            if(hour < 10)
//              hour = "0"+hour;
//            if(minute < 10)
//              minute = "0"+minute;
//            if(seconds < 10)
//              seconds = "0"+seconds;
//            document.getElementById("timer-five").innerHTML = hour + ":" + minute + ":" + seconds;
//         } 

// /*  time on index (5) page counter js */

// var timerVar6 = setInterval(countTimer6, 1000);
// var totalSeconds6 = 0;
// function countTimer6() {
//            ++totalSeconds6;
//            var hour = Math.floor(totalSeconds6 /3600);
//            var minute = Math.floor((totalSeconds6 - hour*3600)/60);
//            var seconds = totalSeconds6 - (hour*3600 + minute*60);
//            if(hour < 10)
//              hour = "0"+hour;
//            if(minute < 10)
//              minute = "0"+minute;
//            if(seconds < 10)
//              seconds = "0"+seconds;
//            document.getElementById("timer-six").innerHTML = hour + ":" + minute + ":" + seconds;
//         }               

// /*  time on index (6) page counter js */

// var timerVar7 = setInterval(countTimer7, 1000);
// var totalSeconds7 = 0;
// function countTimer7() {
//            ++totalSeconds7;
//            var hour = Math.floor(totalSeconds7 /3600);
//            var minute = Math.floor((totalSeconds7 - hour*3600)/60);
//            var seconds = totalSeconds7 - (hour*3600 + minute*60);
//            if(hour < 10)
//              hour = "0"+hour;
//            if(minute < 10)
//              minute = "0"+minute;
//            if(seconds < 10)
//              seconds = "0"+seconds;
//            document.getElementById("timer-seven").innerHTML = hour + ":" + minute + ":" + seconds;
//         }

// /*  time on index (7) page counter js */

// var timerVar8 = setInterval(countTimer8, 1000);
// var totalSeconds8 = 0;
// function countTimer8() {
//            ++totalSeconds8;
//            var hour = Math.floor(totalSeconds8 /3600);
//            var minute = Math.floor((totalSeconds8 - hour*3600)/60);
//            var seconds = totalSeconds8 - (hour*3600 + minute*60);
//            if(hour < 10)
//              hour = "0"+hour;
//            if(minute < 10)
//              minute = "0"+minute;
//            if(seconds < 10)
//              seconds = "0"+seconds;
//            document.getElementById("timer-eight").innerHTML = hour + ":" + minute + ":" + seconds;
//         }


/*  index rows (1-4) shuffle js */

$(function () {
    var parent = $(".shuffle-all");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
});

$(function () {
    var parent = $(".shuffle-1");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
});

$(function () {
    var parent = $(".shuffle-2");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
});

$(function () {
    var parent = $(".shuffle-3");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
});

$(function () {
    var parent = $(".shuffle-4");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
});

$(function () {
    var parent = $(".shuffle-5");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
});


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
    $('.slider002').toggle();
    $('.slider003').toggle();
    $('.slider004').toggle();
    $('.slider005').toggle();
    $(this).toggleClass('fullscreen');
  });
});

$(document).ready(function() {
  $('.slider002').click(function(e) {
    // Change Selector Here
    $('.slider003').toggle();
    $('.slider004').toggle();
    $('.slider005').toggle();
    $(this).toggleClass('fullscreen');
  });
});

$(document).ready(function() {
  $('.slider003').click(function(e) {
    // Change Selector Here

    $('.slider002').toggle();
    $('.slider004').toggle();
    $('.slider005').toggle();    
    $(this).toggleClass('fullscreen');
  });
});

$(document).ready(function() {
  $('.slider004').click(function(e) {
    // Change Selector Here

    $('.slider002').toggle();
    $('.slider003').toggle();
    $('.slider005').toggle();    
    $(this).toggleClass('fullscreen');
  });
});

$(document).ready(function() {
  $('.slider005').click(function(e) {
    // Change Selector Here

    $('.slider002').toggle();
    $('.slider003').toggle();
    $('.slider004').toggle(); 
    $(this).toggleClass('fullscreen');   
  });
});

/*  fourth set  */

$(document).ready(function() {
  $('.active0000').click(function(e) {
    // Change Selector Here
    $('.slider0002').toggle();
    $('.slider0003').toggle();    
    $(this).toggleClass('fullscreen');
  });
});

$(document).ready(function() {
  $('.slider0002').click(function(e) {
    // Change Selector Here
    $('.slider0003').toggle();     
    $(this).toggleClass('fullscreen');
  });
});

$(document).ready(function() {
  $('.slider0003').click(function(e) {
    // Change Selector Here
    $('.slider0002').toggle();    
    $(this).toggleClass('fullscreen');
  });
});

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

/*  all mobile js  */

$(function() {      
    let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

    if (isMobile) {
        //Conditional script here
    }
 });



