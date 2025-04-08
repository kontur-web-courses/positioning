document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.querySelector('.open-btn');
    const closeBtn = document.querySelector('.close-btn');
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
document.addEventListener('DOMContentLoaded', function() {
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    const duration = 3000;
    const startTime = Date.now();

    // Открытие модального окна
    openBtn.addEventListener('click', function() {
        modal.style.display = 'block';
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    function animateProgress() {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration * 100, 100);

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    });
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