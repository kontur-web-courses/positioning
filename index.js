function closeLightbox(){
    const lightbox = document.getElementById('lightbox');
    const overlay = document.getElementById('overlay');

    lightbox.style.display = 'none';
    overlay.style.display = 'none';
}


const progressBar = document.getElementById('progress-bar-value');

let progressBarValue = 0;

const progressBarInterval = setInterval(() => {
    progressBarValue++;
    if (progressBarValue >= 100) {
        progressBarValue = 100;
    }
    progressBar.style.width = `${progressBarValue}%`;
}, 15);

setTimeout(() => {
    clearInterval(progressBarInterval);
    progressBar.style.width = `100%`;
}, 3000);
