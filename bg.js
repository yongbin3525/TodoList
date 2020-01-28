const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber) {
    const img = new Image();
    img.src = `images/${imgNumber + 1}.jpg`;
    img.classList.add("bgImage");
    body.prepend(img);
}
function getRandom() {
    return Math.floor(Math.random() * IMG_NUMBER);
}
function init() {
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();