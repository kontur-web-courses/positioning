/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

const progressBar = document.querySelector('.progress');
let w = 1;
let id = setInterval(frame, 33);
function frame() {
    if (w >= 100) {
        clearInterval(id);
    } else {
        w++;
        progressBar.style.width = w + '%';
    }
}