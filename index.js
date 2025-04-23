const element = document.querySelector('.red-progress');
let startTime = null;

function animateProgress(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const percent = Math.min(progress / 3000, 1); // 3 секунды = 3000 мс

    element.style.width = `${percent * 100}%`;
    // element.style.color = 'white';

    if (percent < 1) {
        requestAnimationFrame(animateProgress);
    }
}

element.style.backgroundColor = 'red';

// Запуск анимации
requestAnimationFrame(animateProgress);