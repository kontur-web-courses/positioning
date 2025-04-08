document.addEventListener('DOMContentLoaded', function () {
    const closeBtn = document.querySelector('.close-btn');
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    });

});

document.addEventListener('DOMContentLoaded', function () {
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    const duration = 3000;

    const startTime = Date.now();

    function animateProgress() {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration * 100, 100);

        progressFill.style.width = `${progress}%`;
        updateTextColors(progress);

        if (progress < 100) {
            requestAnimationFrame(animateProgress);
        }
    }

    function updateTextColors(progress) {
        const text = 'Loading...';
        let html = '';

        for (let i = 0; i < text.length; i++) {
            const charPos = 45 + i;
            const colorClass = charPos < progress ? 'text-white' : 'text-black';
            html += `<span class="${colorClass}">${text[i]}</span>`;
        }

        progressText.innerHTML = html;
    }

    requestAnimationFrame(animateProgress);
});