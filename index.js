const overlay = document.getElementById('lightboxOverlay');
const openBtn = document.getElementById('openLightbox');
const closeBtn = document.getElementById('closeLightbox');

openBtn.addEventListener('click', () => {
    overlay.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        overlay.style.display = 'none';
    }
});
