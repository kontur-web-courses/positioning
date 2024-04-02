// Изменить элементу цвет и ширину можно вот так:

// const element = document.querySelector('.myElement');
// element.style.color = 'red';
// element.style.width = '300px';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.modal-overlay');
const closeButton = document.querySelector('.close-btn');

// const openModalButton = document.getElementById('openModal');
const progressModal = document.getElementById('progressModal');

const progressBar = document.getElementById('progress-bar')

// const progressBar = document.querySelector('.progress-bar')

document.addEventListener('DOMContentLoaded', function() {
    // progressModal.style.display = 'block';

    progressBar.style.width = '0px';

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    });

    let width = 0;
    const interval = setInterval(() => {
        if (width >= 200) {
            clearInterval(interval);
            // progressModal.style.display = 'none';
        } else {
            width += 20;
            progressBar.style.width = `${width}px`;
        }
    }, 300);
});
