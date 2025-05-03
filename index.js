
document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.querySelector('.progress');
    fillProgressBar(3000, progressBar);
});

function hide() {
    document.querySelector('.lightbox').style.display = 'none';
    document.querySelector('.blur').style.display = 'none';
}

function fillProgressBar(duration, progressBar) {
    let startTime = null;

    function animate(timestamp) {
        if (!startTime) {
            startTime = timestamp;
        }
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration * 100, 100);
        progressBar.style.width = percentage + '%';

        if (progress < duration) {
            requestAnimationFrame(animate);
        }
    }
    requestAnimationFrame(animate);
}
