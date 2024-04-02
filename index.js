/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

const lightbox = document.getElementById('lightbox');
const openButton = document.getElementById('openLightboxButton');
const lightboxButton = document.getElementsByClassName('lightboxButton');
const overlay = document.getElementById('overlay');

openButton.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    overlay.style.display = 'block';
});

for (const lightboxButtonElement of lightboxButton) {
    lightboxButtonElement.addEventListener('click', () => {
        lightbox.style.display = 'none';
        overlay.style.display = 'none';
    });
}
