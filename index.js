const progressBar = document.querySelector('.progress');

function animateProgressBar(duration) {
    let startTime = null;

    function animationStep(timestamp) {
        if (!startTime) {
            startTime = timestamp;
        }

        const elapsedTime = timestamp - startTime;
        const progressPercentage = Math.min(elapsedTime / duration, 1);

        progressBar.style.width = `${progressPercentage * 100}%`;

        if (progressPercentage < 1) {
            window.requestAnimationFrame(animationStep);
        }
    }

    window.requestAnimationFrame(animationStep);
}

animateProgressBar(3000);