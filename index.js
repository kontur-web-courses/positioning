
/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/


const progressBar = document.querySelector('.progress-fill');

function updateProgressBar(value) {
progressBar.style["clip-path"] = `inset(0 ${100 - value}% 0 0)`;
}

// Пример использования функции updateProgressBar():
let i = 0;
var interval = setInterval(function() {
    if (i < 100) {
      i += 1;
      updateProgressBar(i);
    }
  }, 50);