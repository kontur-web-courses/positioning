/*
    Изменить элементу цвет и ширину можно вот так:
    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

function closeLightbox() {
    let lightbox = document.querySelector('.modal-content')
    lightbox.style.display = 'none';
    let modal = document.querySelector('.modal')
    modal.style.display = 'none';
}

let progress = document.querySelector(".progress");
let speed = 200;
let max = 600;
let value = 0;
let progress_bar = setInterval(()=>{
    value += max/speed;
    progress.style.width = String(value +"px");
},3000/speed);