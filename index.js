/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/


document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('closeBtn');

    overlay.style.display = 'block';
    modal.style.display = 'block';

    closeBtn.addEventListener('click', function () {
        overlay.style.display = 'none';
        modal.style.display = 'none';
    });

    overlay.addEventListener('click', function () {
        overlay.style.display = 'none';
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function (e) {
        e.stopPropagation();
    });
});