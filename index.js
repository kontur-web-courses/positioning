const modalToggle = document.querySelector('#modal-toggle');
const progressBar = document.querySelector('#progress-bar');


modalToggle.addEventListener('change', () => {
    if (modalToggle.checked) {
        let currentWidth = 0;
        const totalTime = 3000;
        const frames = 60;
        const increment = 100 / frames;
        const intervalTime = totalTime / frames;

        progressBar.style.width = '0%';

        const interval = setInterval(() => {
            currentWidth += increment;
            if (currentWidth >= 100) {
                currentWidth = 100;
                clearInterval(interval);
            }
            progressBar.style.width = currentWidth + '%';
        }, intervalTime);
    } else {
        progressBar.style.width = '0%';
    }
});
