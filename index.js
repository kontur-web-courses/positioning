/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/


const element = document.querySelector('.progress-fill');
const progressBar = document.querySelector('.progress-bar');
const whiteText = document.querySelector('.progress-text-white');

function updateWhiteText() {
    const progressWidth = element.offsetWidth / progressBar.offsetWidth * 100;
    whiteText.style.clipPath = `inset(0 ${100 - progressWidth}% 0 0)`;
    
    if (progressWidth < 100) {
        requestAnimationFrame(updateWhiteText);
    }
}

element.style.width = '100%';

updateWhiteText();

const closeButton = document.querySelector('.modal-close');
closeButton.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.modal-overlay');

    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});


const logos = document.querySelectorAll('.logo');
logos.forEach(logo => {
    logo.addEventListener('click', () => {
        const modal = document.querySelector('.modal');
        const overlay = document.querySelector('.modal-overlay');

        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
});