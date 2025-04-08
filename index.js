/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/


const close_button = document.querySelector('.close-button');
const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');

close_button.addEventListener('click', () => {
    modalWindow.style.display = 'none';
    overlay.style.display = 'none';
})

document.addEventListener('DOMContentLoaded', function () {
    const progressFill = document.querySelector('.loading-bar');
    const progressText = document.querySelector('.loading-text');
    const duration = 3000;
    const startTime = Date.now();

    function animate() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(100 * elapsed / duration, 100);
        progressFill.style.width = `${progress}%`;
        updateColor(progress);

        if (progress < 100) {
            requestAnimationFrame(animate);
        }
    }

    function updateColor(progress) {
        const text = 'Loading...';
        let html = '';

        for (let i = 0; i < text.length; i++) {
            const charPos = 45 + i;
            const color = charPos < progress ? 'text-white' : 'text-black';
            html += `<span class="${color}">${text[i]}</span>`;
        }

        progressText.innerHTML = html;
    }

    requestAnimationFrame(animate);
});

