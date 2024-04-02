function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const element = document.querySelector('.progress .bar .progress-part');
element.style.color = 'red';
let i = 0;
setInterval(function() {
    element.style.width = `${i++}px`;
}, 3000/500)