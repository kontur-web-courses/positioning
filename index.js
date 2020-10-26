const element = document.querySelector('.progress2');

function tic() {
    const newWidth = parseInt(element.clientWidth) + 5;
    element.style.width = newWidth + 'px';
}
let timerId = setInterval(tic, 100);
setTimeout(() => clearInterval(timerId), 3000);