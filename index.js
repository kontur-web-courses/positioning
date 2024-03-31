const progressBar = document.querySelector('.progress');

function animateProgressBar(duration) {
    let start = null;

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const progressPercentage = Math.min(progress / duration, 1);

        progressBar.style.width = `${progressPercentage * 100}%`;

        if (progressPercentage < 1) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}

animateProgressBar(3000);