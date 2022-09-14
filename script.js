let audioElement = new Audio('sound.mp3');
let song = document.getElementById('track');

song.addEventListener('mouseover', ()=>{
    audioElement.play();
    audioElement.loop=true;
})