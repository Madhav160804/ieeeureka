
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

document.getElementById("randomButton").addEventListener("click", function() {
    const randomNumber = generateRandomNumber();
    document.getElementById("randomNumber").textContent =randomNumber;
});

let clickCount = 0;

function updateClickCount() {
    clickCount++;
    document.getElementById("buttonCount").textContent = `RICKROLL COUNT: ${clickCount}`;
    console.log(clickCount);
}



document.querySelectorAll("nav a").forEach(function(link) {
    link.addEventListener("click", function() {
        updateClickCount();
    });
});

const playPauseButton = document.getElementById("ohk");
// const audio = document.getElementById("audio");

var audio = document.createElement('audio'); 
audio.src = 'audio.wav'; 
audio.loop = true;

let isPlaying = false;

function playaudio() {
    audio.play();
}


playPauseButton.addEventListener("click", function() {
    
    playPauseButton.src = "pause.png";
    playaudio();

});






