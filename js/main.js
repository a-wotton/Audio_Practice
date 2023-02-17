console.log("javascript is running") 

let albumCovers = document.querySelectorAll(".audio img"),
audioEL = document.querySelector("audio"),
playButton = document.querySelector("#play-button"),
pauseButton = document.querySelector("#pause-button"),
rewindButton = document.querySelector("#rewind-button");

function loadAudio() {
    audioEL.src = `audio/${this.dataset.trackref}.mp3`;
    audioEL.load();

    playTrack();
}

function playTrack() {
   // debugger;
    audioEL.play();
}

function pauseTrack() {
    audioEL.pause();
}

function rewindTrack() {
    audioEL.currentTime = 0;
}

albumCovers.forEach(album => album.addEventListener("click", loadAudio));
playButton.addEventListener("click", playTrack);
pauseButton.addEventListener("click", pauseTrack);
rewindButton.addEventListener("click", rewindTrack);