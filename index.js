/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close');

function openModal() {
    modal.style.display = 'block';
    overlay.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
}

overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);


const progressBar = document.querySelector('.progress-bar-full')
const progressZone = document.querySelector('.progress-bar-empty')

let width = 0;

const fillProgressBar = setInterval(() => {
    if (width >= 100) {
        clearInterval(fillProgressBar);
    } else {
        width++;
        progressBar.style.width = `${width}%`;
    }
}, 30);