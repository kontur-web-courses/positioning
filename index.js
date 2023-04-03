/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

var overlay = document.querySelector(".overlay");
var modal = document.querySelector(".modal");
var closeModalBtn = document.querySelector(".close");

openModalBtn.onclick = function() {
  modal.style.display = "block";
  overlay.style.display = "block";
}

closeModalBtn.onclick = function() {
  modal.style.display = "none";
  overlay.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == overlay) {
    modal.style.display = "none";
    overlay.style.display = "none";
  }
}
const progressBar = document.querySelector('.progress');
let progress = 0;

const interval = setInterval(() => {
  progress += 10;
  progressBar.style.width = `${progress}%`;
  if (progress >= 100) {
    clearInterval(interval);
  }
}, 1000);
