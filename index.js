/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/


const close_button = document.querySelector('.close-button');
const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');

close_button.addEventListener('click', () => {
    modalWindow.style.display = 'none';
    overlay.style.display = 'none';
})

