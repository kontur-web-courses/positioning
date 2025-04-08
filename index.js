/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const openBtn = document.querySelector('.open-modal-btn');

// Функции для открытия/закрытия
function openModal() {
    overlay.style.display = 'block';
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Запрещаем прокрутку страницы
}

function closeModal() {
    overlay.style.display = 'none';
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Возвращаем прокрутку
}

// Навешиваем обработчики событий
openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Закрытие по ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});