document.querySelectorAll(".progressBar").forEach(progressbar => {
    let progress = 0;
    const intervalId = setInterval(() => {
        if (progress < 100) {
            progress++;
            let progressLine = progressbar.firstElementChild;
            progressLine.style.width = `${progress}%`;
        } else {
            clearInterval(intervalId);
        }
    }, 30);
});