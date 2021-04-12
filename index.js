/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

function animateBar() {
    let progressBar = document.querySelector('.bar');

    let progress = 0;
    const id = setInterval(() => {
        if (progress < 100) {
            progress++;
            let line = progressBar.firstElementChild;
            line.style.width = `${progress}%`
        } else {
            clearInterval(id);
        }
    }, 18)
}

animateBar();