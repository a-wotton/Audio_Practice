console.log("javascript is running") 

let albumCovers = document.querySelectorAll(".audio img")

function playTrack() {
    debugger;
}

albumCovers.forEach(album => album.addEventListener("click", playTrack))