// const element = document.querySelector('.lightbox_progress_bar');
// element.style.backgroundColor = 'red';



const element = document.querySelector('.lightbox_progress_bar');
let startTime = null;

function animateProgress(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const percent = Math.min(progress / 3000, 1); // 3 секунды = 3000 мс

    element.style.width = `${percent * 100}%`;

    if (percent < 1) {
        requestAnimationFrame(animateProgress);
    }
}

element.textContent = "Loading...";
element.style.backgroundColor = 'red';
element.style.height = '20px';
element.style.width = '0%';
//element.style.transition = 'none'; // Отключаем CSS-переходы
// element.style.textAlign = 'center';
element.style.color = 'white';

// Запуск анимации
requestAnimationFrame(animateProgress);