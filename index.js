/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

function closeLightbox() {
    document.getElementById("overlay").style.setProperty("display", "none");
}

let timeInterval = 3000
let currentWidth = 0;
let maxWidth = 400;
let intervalId = setInterval(() => {
        document.getElementById("progressBarFinished").style.width = ++currentWidth + "px";
        if (currentWidth >= maxWidth) {
            clearInterval(intervalId);
        }
    }, timeInterval / maxWidth
);
