document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.querySelector('.open-btn');
    const closeBtn = document.querySelector('.close-btn');
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');

    // Открытие модального окна
    openBtn.addEventListener('click', function() {
        modal.style.display = 'block';
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    });
});