/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

const lightbox = document.querySelector('.lightbox');
const overlay = document.querySelector('.overlay')

function closeWindow(){
    lightbox.style.display = 'none';
    overlay.style.display = 'none';
}

function openWindow(){
    lightbox.style.display = 'inline-block';
    overlay.style.display = 'flex';
}

const closeLightbox = document.querySelector('.closeButton');
closeLightbox.addEventListener('click', closeWindow)

const openLightbox = document.querySelector('.openButton');
openLightbox.addEventListener('click', openWindow);

function startProgressBar() {
    const maxValue = 100;
    let value = 0;
    const time = 3000/maxValue;
    const loading = function () {
        value += 1;
        progressBar.style.width = ${value}%;
        if (value >= maxValue) {
            clearInterval(animate);
        }
    }
    const animate = setInterval(loading, time);
}

function resetProgressBar() {
    progressBar.style.width = "0";
}

const progressBar = document.querySelector('.progressValue')
startProgressBar();