const overlay = document.getElementById('lightboxOverlay');
const openBtn = document.getElementById('openLightbox');
const closeBtn = document.getElementById('closeLightbox');

openBtn.addEventListener('click', () => {
    overlay.style.display = 'flex';
    animateProgressBar(); // ← добавляем запуск анимации
});

closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        overlay.style.display = 'none';
    }
});

function animateProgressBar() {
    const fill = document.querySelector('.progress-fill');
    let progress = 0;
    const duration = 3000; // всего 3 секунды
    const frameRate = 60; // кадров в секунду
    const totalFrames = (duration / 1000) * frameRate;
    const increment = 100 / totalFrames;

    fill.style.width = '0%';

    let currentFrame = 0;
    const interval = setInterval(() => {
        progress += increment;
        currentFrame++;
        fill.style.width = progress + '%';

        if (currentFrame >= totalFrames) {
            clearInterval(interval);
            fill.style.width = '100%';
        }
    }, 1000 / frameRate);
}

const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});