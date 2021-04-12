/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

document.getElementById("lightbox-exit-button").onclick = function () {
    let overlay = document.getElementById("overlay");
    overlay.style.display = 'none';
    console.log("Clicked");
}