/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

let progress = document.querySelector(".progress");
let speed = 300;
let max = 600;
let value = 0;
let progress_bar = setInterval(() => {
        value += max / speed;
        progress.style.width = String(value + "px");
}, 3000 / speed);