const element = document.querySelector('.red');

let a = 100;
let fps = 60;
let b = setInterval(() => {
    element.style.clipPath = "inset(0 " + Math.min(100, a) + "% 0 0)"
    a -= 100 / fps / 3;
}, 1000 / fps);
setTimeout(() => clearInterval(b), 3000);