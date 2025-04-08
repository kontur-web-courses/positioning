const element = document.querySelector('.progress');
let current = 0;
const totalFrames = 180;
const duration = 3000;
const intervalTime = duration / totalFrames;
const step = 100 / totalFrames;
const interval = setInterval(() => {
    current += step;
    if (current >= 100) {
        current = 100;
        clearInterval(interval);
    }
    element.style.width = current + '%';
}, intervalTime);