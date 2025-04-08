document.getElementById('openModalBtn').addEventListener('click', function() {
    document.getElementById('modalOverlay').style.display = 'flex';
});

document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('modalOverlay').style.display = 'none';
});

document.getElementById('modalOverlay').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});

document.getElementById('okButton').addEventListener('click', function() {
    document.getElementById('modalOverlay').style.display = 'none';
});


function startProgressAnimation() {
    const progressBar = document.querySelector('.progress-bar');

    const duration = 3000;
    const startTime = Date.now();

    function animateProgress() {
        const currentTime = Date.now();
        const progress = Math.min(1, (currentTime - startTime) / duration);

        progressBar.style.width = `${progress * 100}%`;
        progressBar.style.backgroundColor = `rgb(${Math.floor(progress * 255)}, 0, 0)`;

        if (progress < 1) {
            requestAnimationFrame(animateProgress);
        }
    }

    animateProgress();
}

document.getElementById('openModalBtn').addEventListener('click', function() {
    document.getElementById('modalOverlay').style.display = 'flex';
    startProgressAnimation();
});
