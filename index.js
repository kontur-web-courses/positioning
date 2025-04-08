/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

function animateProgressBar() {
    const progressBar = document.querySelector('.bar');

    let progress = 0;
    const interval = setInterval(() => {
        if (progress < 100) {
            progress++;
            progressBar.firstElementChild.style.width = `${progress}%`;
        } else {
            clearInterval(interval);
        }
    }, 30);

    progressBar.firstElementChild.style.width = '100%';

    setTimeout(() => {
        clearInterval(interval);
    }, 3000);
}

animateProgressBar();