/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

const progress = document.querySelector('.progress');
const text = document.querySelector('.progress-bar-text');
let value = 0;
let max = 600;
let speed = 200;
let progressBar = setInterval(() => {
    value += max / speed;
    progress.style.width = String(value + "px");
}, 3000 / speed);