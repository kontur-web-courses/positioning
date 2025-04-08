// Анимация прогресс-бара
const progressFill = document.querySelector('.progress-fill');
const whiteText = document.querySelector('.progress-text .white');
const blackText = document.querySelector('.progress-text .black');

let progress = 0;
const duration = 3000; // 3 секунды
const fps = 60;
const step = 100 / (duration / (1000 / fps));

const interval = setInterval(() => {
    progress += step;

    if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
    }

    progressFill.style.width = progress + '%';

    const letters = "Loading...".split("");
    const progressContainer = document.querySelector('.progress-bar');
    const totalWidth = progressContainer.offsetWidth;
    const redWidth = progressFill.offsetWidth;
    const percentRed = redWidth / totalWidth;

    const redChars = Math.round(letters.length * percentRed) + 3;
    const redText = letters.slice(0, redChars).join('');
    const blackTextPart = letters.slice(redChars).join('');

    whiteText.textContent = redText;
    blackText.textContent = blackTextPart;

}, 1000 / fps);

document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById('modalOverlay');
    const closeModal = document.getElementById('closeModal');
    const closeButton = document.getElementById('closeButton');

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            overlay.style.display = 'none';
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            overlay.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            overlay.style.display = 'none';
        }
    });
});
