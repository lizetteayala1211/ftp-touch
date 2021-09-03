document.addEventListener("touchstart", function() {}, true);

function playAudio(url) {
  new Audio(url).play();
}

playAudio.loop = true;

