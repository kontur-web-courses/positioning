/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close');

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
});

const progressBar = document.querySelector('.progress');

let width = 0;
const interval = setInterval(() => {
    width += 1;
    progressBar.style.width = width + '%';

    if (width >= 100) {
        clearInterval(interval);
        progressBar.textContent = '';
        progressBar.style.backgroundColor = 'green';
        progressBar.innerHTML = '<div class="loading-text">Loaded</div>';
    }
}, 30);
