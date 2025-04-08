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
    const openBtn = document.getElementById('openModal'); 

    function openModal() {
        overlay.style.display = 'block';
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; 
    }

    function closeModal() {
        overlay.style.display = 'none';
        modal.style.display = 'none';
        document.body.style.overflow = ''; 
    }

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    modal.addEventListener('click', function (e) {
        e.stopPropagation();
    });
});