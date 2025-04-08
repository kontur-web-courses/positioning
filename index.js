/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

const modalOverlay = document.getElementById('modalOverlay');
const openModalButton = document.getElementById('openModal');
const closeButton = document.getElementById('closeButton');
const progressBar = document.querySelector('.bar');
const blackText = document.querySelector(".text-black");

function openModal() {
    modalOverlay.style.display = 'flex';
    progressBar.style.width = '0%';

    animateProgressBar();
}

function closeModal() {
    modalOverlay.style.display = 'none';
}

openModalButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', function(event) {
    if (event.target === modalOverlay) {
        closeModal();
    }
});

function animateProgressBar() {
    let width = 0;
    const baseWidth = 600
    const intervalId = setInterval(() => {
        if (width >= baseWidth) {
            clearInterval(intervalId);
        } else {
            width += 1;
            progressBar.style.width = `${width * 100 / baseWidth}%`;
            blackText.style.clipPath = `inset(0 0 0 ${width * 100 / baseWidth}%)`
        }
    }, 5);
}