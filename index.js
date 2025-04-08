const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalOverlay = document.getElementById('modalOverlay');
const progressFill = document.getElementById('progressFill');

openModalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('show');
    animateProgress();
});

closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('show');
    progressFill.style.width = '0%';
});

