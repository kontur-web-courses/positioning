
const progress = document.querySelector('.progress');
progress.style.color = 'red';
let width = 0;
progress.style.width = width + '%';
let mover = setInterval(move, 100);

function move(){
    if (width >= 100) {
        clearInterval(mover);
    }
    else {
        width += 3;
        progress.style.width = width + '%';
    }
}