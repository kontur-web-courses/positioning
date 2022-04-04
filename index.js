/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
let elem = document.getElementById("load");
elem.style.width = '0';
let width = 0;
let id = setInterval(frame, 7.5);
function frame() {
    if (width >= 100) {
        clearInterval(id);
        elem.style.backgroundColor = '#00FF00';
        let text = document.getElementById("progress");
        text.textContent = 'complete!'
    } else {
        width += 0.25;
        elem.style.width = width + "%";
    }
}
const lightbox = document.getElementById('lightbox');
const overlay = document.getElementById('overlay');

function closeLightbox() {
    lightbox.style.display = 'none';
    overlay.style.display = 'none';
}