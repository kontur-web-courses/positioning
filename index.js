/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');

function openModal() {
    overlay.style.display = 'block';
}

function closeModal() {
    overlay.style.display = 'none';
}

overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', function(event) {
    event.stopPropagation(); // предотвращаем закрытие окна при клике внутри него
});

const progressBarFill = document.querySelector('.progress-bar-fill');

function updateProgressBar(percent) {
    progressBarFill.style.width = percent + '%';
}

let percent = 0;
let intervalId = setInterval(function() {
    percent += 1;
    updateProgressBar(percent);
    if (percent >= 100) {
        clearInterval(intervalId);
    }
}, 30); // 100% за 3000 миллисекунд (30 * 100 = 3000)
