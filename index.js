document.querySelector('.action-btn').addEventListener('click', function () {
    document.querySelector('.overlay').style.display = 'none';
});

document.querySelector('.overlay').addEventListener('click', function (e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});

const progressBar = document.querySelector('.progress-fill');

const duration = 3000;
let startTime = null;

function animate(timestamp) {
    if (!startTime)
        startTime = timestamp;

    const elapsed = timestamp - startTime;
    const progressPercent = Math.min((elapsed / duration) * 100, 100);
    progressBar.style.width = progressPercent + '%';

    if (elapsed < duration) {
        window.requestAnimationFrame(animate);
    }
}

window.requestAnimationFrame(animate);
