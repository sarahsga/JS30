document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    var element = document.getElementById(keyName.toLowerCase());

    if (element) element.click();

    element.classList.add("highlighted");
    
    var audio = document.getElementById(keyName.toLowerCase() + "_audio");
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
}, false);

document.addEventListener('keyup', (event) => {
    const keyName = event.key;

    var element = document.getElementById(keyName.toLowerCase());

    if (element) element.classList.remove("highlighted");

}, false);