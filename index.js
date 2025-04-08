const element = document.querySelector('.red');

let a = 0;
let fps = 60;
let b = setInterval(() => {
    element.style.width = Math.min(a, 100) + '%';
    a += 100 / fps / 3;
}, 1000 / fps);
setTimeout(() => clearInterval(b), 3000);