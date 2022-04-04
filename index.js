/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

let currentInterval;

function closeModal() {
    const element = document.querySelector('.overlay');
    element.classList.add('hidden');
    clearInterval(currentInterval);
}

function openModal() {
    const element = document.querySelector('.overlay');
    element.classList.remove('hidden');
    progress(0);
}

const element = document.querySelector('.bar');

function progress(step) {
    if (step > 100) step = 0;
    element.style.color = 'red';
    element.style.width = step + '%';
    currentInterval = setTimeout(progress, 200, step + 1);
}

