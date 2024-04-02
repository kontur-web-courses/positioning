/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

function animateBar() {
    const progressBar = document.querySelector('.bar');

    let progress = 0;
    const id = setTimeout(() => {
        if (progress < 100) {
            progress++;
            progressBar.firstElementChild.style.width = `${progress}%`
        }
    })
}

animateBar();