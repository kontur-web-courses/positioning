window.addEventListener('load', function (e) {
    const progressBar = document.querySelector('.progress_front');

    let progress = 0;
    setInterval(() => {
        if(progress === 100) {
            progress = 0;
        }
        progressBar.style.clipPath = `inset(0 0 0 ${progress}%`;
        progress += 1;
    }, 20);
});


