/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

function fillProgressBar() {
    const progressBarInner = document.querySelector('.progress-bar-inner');
    // const progressBarText = document.querySelector('.progress-bar-text');
    const duration = 3000;
    const frameRate = 60;
    const frameDuration = duration / frameRate;
    let progress = 0;

    const increaseProgress = () => {
        progress += 100 / frameRate;
        progressBarInner.style.width = `${progress}%`;
        // progressBarText.textContent = `Loading... ${Math.round(progress)}%`;

        if (progress < 100) {
            setTimeout(increaseProgress, frameDuration);
        }
    };

    increaseProgress();
}

fillProgressBar();
