/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
const element = document.querySelector('.progress .bar .progress-part');
element.style.color = 'red';
let i = 0;
setInterval(function () {
    element.style.width = `${i++}px`;
}, 3000 / 640)