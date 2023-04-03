/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

function closeLightbox() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("lightbox").style.display = "none";
}

const progressBar = document.querySelector('.progress-bar');
const progressText = document.querySelector('.progress-text');

let progress = 0;
const totalFrames = 60;
const intervalTime = 3000 / totalFrames;

const animateProgressBar = () => {
    progress += 100 / totalFrames;
    progressBar.style.width = `${progress}%`;

    if (progress < 100) {
        setTimeout(animateProgressBar, intervalTime);
    }
};

setTimeout(animateProgressBar, intervalTime);