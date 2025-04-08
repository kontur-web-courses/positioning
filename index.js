// Анимация прогресс-бара
function animateProgressBar() {
    const progressBar = document.querySelector('.progress');
    let progress = 0;

    const interval = setInterval(() => {
        if (progress < 100) {
            progress++;
            progressBar.style.width = `${progress}%`;
        } else {
            clearInterval(interval);
        }
    }, 30);

    setTimeout(() => {
        clearInterval(interval);
    }, 3000);
}

// Закрытие lightbox
function setupLightboxClose() {
    const closeButton = document.querySelector('.closeButton');
    const overlay = document.querySelector('.overlay');

    closeButton.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    // Опционально: закрытие по клику вне окна
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
    });
}

// Инициализация всех функций
document.addEventListener('DOMContentLoaded', () => {
    animateProgressBar();
    setupLightboxClose();
});