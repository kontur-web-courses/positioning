document.getElementById('openOverlayButton').addEventListener('click', function() {
    document.querySelector('.overlay').style.display = 'block';
});

document.querySelector('.closeButton').addEventListener('click', function() {
    document.querySelector('.overlay').style.display = 'none';
});

const progressBar = document.querySelector('.waiting');

function animateProgressBar(duration = 3000) {
    let start = null;

    function step(timestamp) {
        if (!start) {
            start = timestamp;
        }
        const progress = timestamp - start;
        const progressPercentage = Math.min(progress / duration, 1);
        progressBar.style.width = `${progressPercentage * 100}%`;
        if (progressPercentage < 1) {
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);
}

animateProgressBar();