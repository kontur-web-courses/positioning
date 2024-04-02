// Изменить элементу цвет и ширину можно вот так:

// const element = document.querySelector('.myElement');
// element.style.color = 'red';
// element.style.width = '300px';

const openModalButton = document.getElementById('openModal');
const progressModal = document.getElementById('progressModal');

const progressBar = document.getElementById('progress-bar')

// const progressBar = document.querySelector('.progress-bar')

openModalButton.addEventListener('click', () => {
    progressModal.style.display = 'block';

    progressBar.style.width = '0px';

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