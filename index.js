/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

let start = 0;
let progressWidth = 200;
const progressBar = document.querySelector('.progress_finished');
let modal = document.querySelector(".ligthbox");
// Get the button that opens the modal
let btn = document.getElementById("openBtn");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "flex";
    let intervalId = setInterval(() => {
        progressBar.style.width = start + "px";

        if (start === progressWidth) {
            clearInterval(intervalId);
        }

        start++;
    }, 15);
}

span.onclick = function() {
    modal.style.display = "none";
    start = 0;
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        start = 0;
    }
}

