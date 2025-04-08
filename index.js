/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

const openLightbox = document.getElementById('openLightbox');
const closeLightbox = document.getElementById('closeLightbox');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');

openLightbox.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
});

closeLightbox.addEventListener('click', () => {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
});

const progressFill = document.querySelector('.progress-fill');

let width = 0;
const interval = setInterval(() => {
    width += 1;
    progressFill.style.width = `${width}%`;

    if (width >= 100) clearInterval(interval);
}, 30);
