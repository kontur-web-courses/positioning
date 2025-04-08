const progressBar = document.querySelector('.progress');
const loadingText = document.getElementById('loadingText');

let animationStarted = false;
const text = 'Loading...';

text.split('').forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;
    loadingText.appendChild(span);
});

const letterSpans = loadingText.querySelectorAll('span');

const animateProgress = () => {
    const duration = 3000;
    const startTime = Date.now();

    const step = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const percent = progress * 100;
        progressBar.style.width = `${percent}%`;

        const barRect = progressBar.getBoundingClientRect();
        const barRight = barRect.left + barRect.width;

        letterSpans.forEach(span => {
            const spanRect = span.getBoundingClientRect();
            const spanCenter = spanRect.left + spanRect.width / 2;

            if (spanCenter < barRight) {
                span.style.color = 'white';
            } else {
                span.style.color = 'black';
            }
        });

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            letterSpans.forEach(span => (span.style.color = 'white'));
        }
    };

    requestAnimationFrame(step);
};

const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const overlay = document.getElementById('overlay');

openModalBtn.addEventListener('click', () => {
    overlay.classList.add('active');
    if (!animationStarted) {
        animateProgress();
        animationStarted = true;
    }
});
closeModalBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
});
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.remove('active');
    }
});
