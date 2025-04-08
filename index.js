// Закрытие по кнопке "крестик"
document.getElementById('closeModal').onclick = function () {
    document.getElementById('modalOverlay').style.display = 'none';
};

// Закрытие по кнопке "Close"
document.getElementById('closeButton').onclick = function () {
    document.getElementById('modalOverlay').style.display = 'none';
};

// Закрытие при клике вне модального окна
window.onclick = function(event) {
    const overlay = document.getElementById('modalOverlay');
    if (event.target === overlay) {
        overlay.style.display = 'none';
    }
};

// Закрытие по нажатию ESC
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        document.getElementById('modalOverlay').style.display = 'none';
    }
});

// Показ по кнопке (если добавишь кнопку в HTML)
/*
document.getElementById('showModalBtn').onclick = function () {
    document.getElementById('modalOverlay').style.display = 'flex';
};
*/
/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/