document.addEventListener('DOMContentLoaded', function() {
    let modal = document.getElementById('modal');
    let btn = document.getElementById("openModal");
    let span = document.getElementById("closeModal");

    btn.onclick = function() {
        modal.style.display = "block";
        startProgressBar();
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});

function startProgressBar() {
    const pbar = document.querySelector('.progress-bar .stena');
    pbar.style.width = '100%';
    const iterations = 100;
    const interval = 3000 / iterations;
    let i = 0;

    const progressBarInterval = setInterval(() => {
        pbar.style.width = `${++i}%`;
        if (i === iterations) {
            clearInterval(progressBarInterval);
        }
    }, interval);
}