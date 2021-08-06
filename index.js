/*
    TODO
        - Select all the drums elements & add event listener
        - Add animation when the buttons are clicked
        - Play music
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