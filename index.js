let w = 0;
let max_w = 320;
let step = 1;

function bigger(){
    if (w >= max_w) clearInterval(_);
    const element = document.querySelector('.loading-bar');
    element.style.width = w + 'px';
    w += step;
}

let _ = setInterval(bigger, 3000 / (max_w / step));
