/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

let progressBar
let overlay
let lightbox

function openModal() {
    progressBar = document.querySelector('.red');
    overlay = document.querySelector('.overlay');
    lightbox = document.getElementById('lightbox');
    overlay.hidden = false;
    lightbox.hidden = false;
    setTimeout(() => {
        let i = 0;
        let stop = setInterval(() => {
            if (i <= 1000 && !lightbox.hidden)
                progressBar.style.width = i++ / 10 + '%';
            else clearInterval(stop);
        }, 3);
    }, 250);
}

function closeModal() {
    overlay.hidden = true;
    lightbox.hidden = true;
    progressBar.style.width = '0';
}