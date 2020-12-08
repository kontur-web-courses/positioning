/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
const closeModalBtn = document.querySelector('.closeModal');
const showModalBtn = document.querySelector('.showModal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const frontProgressBar = document.querySelector('.front')
closeModalBtn.onclick = function (){
    modal.style.visibility = 'hidden';
    overlay.style.visibility = 'hidden';
}
showModalBtn.onclick = function (){
    modal.style.visibility = 'visible';
    overlay.style.visibility = 'visible';
}
let start = 0;
let intervalId = setInterval(function(){
    if (start > 100) {
        clearInterval(intervalId);
    } else {
        frontProgressBar.style.clipPath = `inset(0 0 0 ${start}%)`;
    }
    start++;
}, 3);