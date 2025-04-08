// Получаем элементы
const progressFill = document.querySelector('.progress-fill');
const whiteText = document.querySelector('.progress-text .white');
const blackText = document.querySelector('.progress-text .black');

// Начальные значения
let progress = 0;
const duration = 3000; // 3 секунды
const fps = 60; // кадров в секунду
const step = 100 / (duration / (1000 / fps)); // сколько % добавлять за кадр

const interval = setInterval(() => {
    progress += step;

    if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
    }

    // Обновляем ширину красного заполнения
    progressFill.style.width = progress + '%';

    // Пример адаптации текста: меняем длину белой части "Lo" в зависимости от ширины
    const totalLength = "Loading...".length;
    const letters = "Loading...".split("");

    // Находим, сколько символов попали на красный фон
    const progressContainer = document.querySelector('.progress-bar');
    const totalWidth = progressContainer.offsetWidth;
    const redWidth = progressFill.offsetWidth;
    const percentRed = redWidth / totalWidth;

    const redChars = Math.round(letters.length * percentRed);
    const redText = letters.slice(0, redChars).join('');
    const blackTextPart = letters.slice(redChars).join('');

    whiteText.textContent = redText;
    blackText.textContent = blackTextPart;

}, 1000 / fps);
