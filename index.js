/*
    Global State
*/
var audio_volume = 0.6;


/*
    Common Functions
*/
const animate = (key) => {
    const currentKey = document.querySelector(`.${key}`);
    currentKey.classList.add('pressed');
    setTimeout (() => {
        currentKey.classList.remove('pressed')
    }, 200);

}

const playMusic = (path) => {
    const audio = new Audio(path);
    audio.volume = audio_volume;
    audio.play();
}

const makeSound = (key) => {
    switch (key) {
        case "w":
            playMusic("sounds/sounds_sound-1.mp3");
        case "a":
            playMusic("sounds/sounds_sound-2.mp3");
        case "s":
            playMusic("sounds/sounds_sound-3.mp3");
        case "d":
            playMusic("sounds/sounds_sound-4.mp3");
        case "j":
            playMusic("sounds/sounds_sound-5.mp3");
        case "k":
            playMusic("sounds/sounds_sound-6.mp3");
        case "l":
            playMusic("sounds/sounds_sound-7.mp3");
        default:
            console.log("");
    }
}


/*
    Drum Buttons Event
*/
const handleDrumClick = (event) => {
    let innerHTML = event.target.innerHTML;
    makeSound(innerHTML);
    animate(innerHTML);
};
var drums = document.querySelectorAll('.drum');
for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", handleDrumClick);
}

document.addEventListener("keypress", (event) => {
    const triggeredKey = event.key;
    makeSound(triggeredKey);
    animate(triggeredKey);
})


/*
    Volume Slider events
*/
const slider = document.getElementById('volume__slider');
slider.oninput = (event) => {
    audio_volume = event.target.value / 100;
}

/*
    Auto Music Button
*/
const autoMusic = document.getElementById("util__button-auto");
autoMusic.addEventListener("click", () => {
    if (isAutoMusicON) {
        clearInterval(autoMusicId);
        isAutoMusicON = false;
        autoMusic.innerText = "Start Auto Music";
    } else {
        isAutoMusicON = true;
        startAutoMusic();
        autoMusic.innerText = "Stop Auto Music";
    }
});

var autoMusicId;
var isAutoMusicON = false;
const startAutoMusic = () => {
    const letters = ["w", "a", "s", "d", "j", "k", "l"];
    autoMusicId = setInterval(() => {
        const currentKey = letters[Math.floor(Math.random() * letters.length)];
        makeSound(currentKey);
        animate(currentKey);
    }, 300);
}