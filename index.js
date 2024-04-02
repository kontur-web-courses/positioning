/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/


const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close");

closeBtn.onclick = function() {
    modal.style.display = "none";
}