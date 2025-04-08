const progressBarLeftPart = document.querySelector('#progress_bar_foreground');

const duration = 3000;
const fps = 60;
const frameTime = 1000 / fps;
const animationStartTime = Date.now();

const intervalId = setInterval(() => {
    const currentTime = Date.now();
    const timePassed = currentTime - animationStartTime;
    const progress = Math.min(timePassed / duration * 100, 100);

    progressBarLeftPart.style.width = `${progress}%`;

    if (progress >= 100) {
        clearInterval(intervalId);
        console.log('Готово');
    }
}, frameTime);

function openLightbox() {
    document.querySelector('.modal').style.display = 'flex';
}

function closeLightbox() {
    document.querySelector('.modal').style.display = 'none';
}

document.querySelector('.open-modal-btn').addEventListener('click', openLightbox);
document.querySelector('#close').addEventListener('click', closeLightbox);
