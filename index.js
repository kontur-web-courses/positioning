document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
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


document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('closeBtn');
    const openBtn = document.getElementById('openModal'); 

    function openModal() {
        overlay.style.display = 'block';
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; 
    }

    function closeModal() {
        overlay.style.display = 'none';
        modal.style.display = 'none';
        document.body.style.overflow = ''; 
    }

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    modal.addEventListener('click', function (e) {
        e.stopPropagation();
    });
});