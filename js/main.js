console.log("javascript is running") 

let albumCovers = document.querySelectorAll(".audio img")

function playTrack() {
    debugger;
    let currentAudio = document.querySelector(`audio[data-trackref="${this.dataset.trackref}"]`);
    currentAudio.play();
}

albumCovers.forEach(album => album.addEventListener("click", playTrack))