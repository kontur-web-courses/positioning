/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/


const element = document.querySelector('.progress-fill');
element.style.width = '100%';

const closeButton = document.querySelector('.modal-close');
closeButton.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.modal-overlay');
    
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});