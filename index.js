const progressBar = document.querySelector('.progress-bar');
const progressTextWhite = document.querySelector('.progress-text-white');

progressBar.style.setProperty('--progress', '0%');
progressTextWhite.style.setProperty('--progress', '0%');

const duration = 3000;
const framesPerSecond = 60;
const totalFrames = Math.floor(duration / 1000 * framesPerSecond);
let currentFrame = 0;

function animateProgressBar() {
    if (currentFrame > totalFrames) {
        return;
    }
    
    const progress = currentFrame / totalFrames;
    const progressPercent = `${Math.floor(progress * 100)}%`;
    
    progressBar.style.setProperty('--progress', progressPercent);
    progressTextWhite.style.setProperty('--progress', progressPercent);
    
    currentFrame++;
    requestAnimationFrame(animateProgressBar);
}

animateProgressBar();