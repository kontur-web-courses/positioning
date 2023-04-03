let progressBar = document.querySelector('.progress');
let progressValue = 0;

let progressInterval = setInterval(updateProgressBar, 500);

function updateProgressBar() {
    progressValue += 20;
    progressBar.style.width = progressValue + '%';

    if (progressValue >= 100) {
        clearInterval(progressInterval);
    }
}