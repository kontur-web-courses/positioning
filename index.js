/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
let progress = document.querySelector(".progress");
let max = 600;
let value = 0;
let speed = 200;
let progress_bar = setInterval(()=>{
    value += max/speed;
    progress.style.width = String(value +"px");
},3000/speed);
setTimeout(() => {
    clearInterval(progress_bar);
    let p = document.querySelector(".important_text");
    p.style.display = "block";
    let accordion = document.querySelector(".accordion");
    accordion.style.display = "block";
}, 3000)

function closeLightbox(){
    let lightbox = document.querySelector(".lightbox");
    lightbox.style.display = 'none';
    let darkening = document.querySelector(".darkening");
    darkening.style.display = 'none';
}