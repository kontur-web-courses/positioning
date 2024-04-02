let progress = 0;
let progressBar = document.querySelector('.progress_line');

setInterval(() => {
    progress++;
    if (progress > 100) {
        progress = 0;
    }
    progressBar.style.clipPath = `inset(0 ${100 - progress}% 0 0)`;
}, 20);
