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
const progressBarText = document.querySelector('.progress-bar-text');

function updateProgressBar(percent) {
    progressBarFill.style.width = percent + '%';
    progressBarText.innerText = percent + '%';
}

// Пример использования:
updateProgressBar(50); // заполнить прогресс-бар на 50%
