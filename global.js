document.addEventListener("touchstart", function() {}, true);

function playAudio(url) {
  new Audio(url).play();
}

playAudio.loop = true;




// var el_up = document.getElementById('GFG_UP'); 
//         var rgbValue = [255, 0, 0]; 


// function setColor() { 
//             rgbValue[0] = Math.round(Math.random() * 255); 
//             rgbValue[1] = Math.round(Math.random() * 255); 
//             rgbValue[2] = Math.round(Math.random() * 255); 
//             var color = Math.round(((parseInt(rgbValue[0]) * 299) + 
//                 (parseInt(rgbValue[1]) * 587) + 
//                 (parseInt(rgbValue[2]) * 114)) / 1000); 
//             var textColor = (color > 125) ? 'black' : 'white'; 
//             var backColor =  
//                 'rgb(' + rgbValue[0] + ', ' + rgbValue[1] + ', ' 
//              + rgbValue[2] + ')'; 
              
//             $('#body').css('color', textColor); 
//             $('#body').css('background-color', backColor);
//             $('#body').css('color', textColor); 
//             $('.innercircle').css('background-color', backColor);  
//         } 
  
//         function GFG_Fun() { 
//             setColor(); 
//         } 
