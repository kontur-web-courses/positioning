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

function setupLightboxClose() {
    const closeButton = document.querySelector('.closeButton');
    const overlay = document.querySelector('.overlay');

    closeButton.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    animateProgressBar();
    setupLightboxClose();
});