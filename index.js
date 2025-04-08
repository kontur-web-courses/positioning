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

const openBtn = document.querySelector('.open-modal-btn');

openBtn.addEventListener("click", function(){
    const progressContainer = document.querySelector('.progress-container');
    const progressBar = document.querySelector('.progress-bar');
    let progress = 0;

    const totalTime = 3000;
    const intervalTime = 10;
    const steps = totalTime / intervalTime;
    const stepIncrease = 100 / steps;

    const intervalId = setInterval(() => {
        progress += stepIncrease;
        if (progress >= 100) {
            progress = 100;
            clearInterval(intervalId);
        }
        progressBar.style.width = progress + '%';
        progressContainer.style.setProperty('--progress', progress);
    }, intervalTime);
});