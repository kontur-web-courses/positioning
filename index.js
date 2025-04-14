const openModalButton = document.getElementById('open-modal-button');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const closeButton = document.querySelector('.close-button');
const progressBar = document.querySelector('.progress');
const progressText = document.querySelector('.progress-text');

openModalButton.addEventListener('click', () => {
    modal.classList.add('active');
    overlay.classList.add('active');
    animateProgressBar();
});

closeButton.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
    resetProgressBar();
});

overlay.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
    resetProgressBar();
});

modal.addEventListener('click', (event) => {
    event.stopPropagation();
});


function animateProgressBar() {
    let width = 0;
    const intervalTime = 3000;
    const frameRate = 30;
    const increment = 100 / (intervalTime * frameRate / 1000);
    const interval = setInterval(frame, 1000 / frameRate);

    function frame() {
        if (width >= 100) {
            clearInterval(interval);
            progressText.textContent = "Complete!";
            progressText.style.color = 'white';
        } else {
            width += increment;
            progressText.style.color = 'black';
            progressBar.style.width = width + '%';
        }
    }
}

function resetProgressBar() {
    progressBar.style.width = '0%';
    progressText.textContent = "Loading...";
    progressText.style.color = 'black';
}
