// Изменить элементу цвет и ширину можно вот так:

// const element = document.querySelector('.myElement');
// element.style.color = 'red';
// element.style.width = '300px';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.modal-overlay');
const closeButton = document.querySelector('.close-btn');

const openModalButton = document.getElementById('openModal');
// const progressModal = document.getElementById('modal');

// const progressBar = document.getElementById('progress-bar')

// const progressBar = document.querySelector('.progress-bar')

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
});

openModalButton.addEventListener('click', () => {
    modal.style.display = 'block';
    overlay.style.display = 'block';
});
