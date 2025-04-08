/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.overlay');
    const openBtn = document.querySelector('.open-modal-btn');
    
    function openModal() {
        overlay.style.display = 'flex';
    }
    
    function closeModal() {
        overlay.style.display = 'none';
    }
    
    openBtn.addEventListener('click', openModal);
    
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', closeModal);
    });
});