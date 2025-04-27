const openModal = document.getElementById('openModalWindow');
const modalOverlay = document.getElementById('setModalOverlay');
const closeModal = document.getElementById('closeModalWindow');
const progressFill = document.getElementById('progressFilled');
const progressText = document.getElementById('progressText');

openModal.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
    startProgressBar();
});

closeModal.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
    progressFill.style.width = '0%';
    progressText.textContent = 'Loading...';
});

function startProgressBar() {
    let width = 0;
    const interval = setInterval(() => {
        width++;
        progressFill.style.width = `${width}%`;
        progressText.style.setProperty('--progress', `${width}%`);
        progressText.textContent = 'Loading...';

        if (width >= 100) {
            clearInterval(interval);
            progressText.textContent = 'Complete!';
        }
    }, 30);
}
