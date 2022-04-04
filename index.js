/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
const modal = document.getElementById("modal-window");
const btn = document.getElementById("modal-button");
const close = document.getElementsByClassName("modal-close")[0];

btn.onclick = function() {
    modal.style.display = "flex";
}

close.onclick = function() {
    modal.style.display = "none";
}
