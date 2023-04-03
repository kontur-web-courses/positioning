/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/


function closeBox() {
    document.getElementById("overlay").style.setProperty("display", "none");
}

let timeInterval = 3000
let currentWidth = 0;
let maxWidth = 640;
let intervalId = setInterval(() => {
    document.getElementById("progressBarEnd").style.width = ++currentWidth + "px";
    if (currentWidth >= maxWidth) {
        clearInterval(intervalId);
    }
}, timeInterval / maxWidth
);