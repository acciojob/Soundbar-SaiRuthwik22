//your JS code here. If required.
let audio = null;

function playAudio(params){

audio = document.getElementById("myAudio");
audio.src = "./sounds/" + params + ".mp3";
audio.play();
}
}

function stop() {
audio = document.getElementById(“audioPlayer”);
audio.pause();
audio.currentTime = 0;
}