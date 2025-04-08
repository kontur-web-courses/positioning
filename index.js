const openModal = document.getElementById('openModal');
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');

openModal.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
    startProgressBar();
});


