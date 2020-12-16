/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/


let closeButton = document.querySelector(".lightbox-close");
let lightBox = document.querySelector(".lightbox-container");
closeButton.addEventListener("click", () => lightBox.remove())
