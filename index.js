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