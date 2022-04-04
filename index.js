/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
const lightbox = document.getElementById('lightbox');
const overlay = document.getElementById('overlay');

function closeLightbox() {
    lightbox.style.display = 'none';
    overlay.style.display = 'none';
}