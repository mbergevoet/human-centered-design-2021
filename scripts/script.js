const videoPlayer = document.querySelector("video");
const equalizer = document.querySelector("img");

videoPlayer.addEventListener('play', (event) => {
    console.log('play');
    equalizer.classList.add("visible");
})

videoPlayer.addEventListener('pause', (event) => {
    console.log('pause');
    equalizer.classList.remove("visible");
})