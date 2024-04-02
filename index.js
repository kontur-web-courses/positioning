/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.modal-overlay');
    const closeButton = document.querySelector('.close-btn');

    function openModal() {
        modal.style.display = 'block';
        overlay.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }

    closeButton.addEventListener('click', closeModal);
});
