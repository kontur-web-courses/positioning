/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

const progressBar = document.querySelector(".progress-bar");

function fillProgressBar(pb) {
    pb.style.animation = '3s ease 0s 1 normal forwards running fillPb';
    setTimeout(() => clearProgressBar(pb), 3000)
}

function clearProgressBar(pb) {
    pb.style.animation = null;
}

setInterval(() => fillProgressBar(progressBar), 3500)