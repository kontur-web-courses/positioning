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
const loadingText = document.querySelector('.loading-text');

function openModal() {
    modalOverlay.style.display = 'flex';
    progressBar.style.width = '0%';
    loadingText.style.color = '#000';

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
            if (width >= baseWidth / 2) {
                loadingText.style.color = '#fff';
            }
            width += 1;
            progressBar.style.width = `${width * 100 / baseWidth}%`;
        }
    }, 5);
}