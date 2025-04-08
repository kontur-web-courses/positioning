document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.querySelector('.progress-bar');
    const whiteText = document.querySelector('.progress-text.active');

    const duration = 3000;
    const interval = 15;

    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
        currentStep++;
        const progress = (currentStep / steps) * 100;
        progressBar.style.width = progress + '%';
        whiteText.style.clipPath = `inset(0 ${100 - progress}% 0 0)`;

        if (currentStep >= steps) {
            clearInterval(timer);
        }
    }, interval);
});
