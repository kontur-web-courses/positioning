const progressContainer = document.querySelector('.progress-container');
const updateProgress = (progress) => {
    progressContainer.style.setProperty('--progress', progress);
    document.querySelector('.progress-bar').style.width = progress + '%';
};
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.overlay');
    const openBtn = document.querySelector('.open-modal-btn');
    
    function openModal() {
        overlay.style.display = 'flex';
    }
    
    function closeModal() {
        overlay.style.display = 'none';
    }
    
    openBtn.addEventListener('click', openModal);
    
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', closeModal);
    });
});