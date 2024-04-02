function fillProgressBar() {
    const progressBar = document.querySelector('.progress');
    progressBar.style.background = 'red';
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (start === null) start = timestamp;
        const progress = timestamp - start;
        const progressPercentage = progress / 3000;

        progressBar.style.width = `${progressPercentage * 100}%`;

        if (progressPercentage < 1) {
            window.requestAnimationFrame(step);
        }
    }
}

fillProgressBar();
