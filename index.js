/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

function openLightbox() {
    document.getElementById("blur_panel").style.display = "block";
    document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
    document.getElementById("blur_panel").style.display = "none";
    document.getElementById("lightbox").style.display = "none";
}

function startProgress () {
    let bar = document.querySelector(".bar");

    const increaseBy = 2;
    let counter = 1;

    function increase() {
        bar.style.width = increaseBy * counter + '%';
        counter++;

        if (counter === 20) {
            clearInterval(intervalId);
        }
    }

    let intervalId = setInterval(increase, 500);
}