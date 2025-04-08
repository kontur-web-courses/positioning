/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');
const openModalBtn = document.querySelector('.open-modal-btn');

function openModal() {
    modal.style.display = 'block';
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden'; 
}

function closeModal() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = '';
}

openModalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);