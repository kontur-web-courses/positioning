const overlay = document.getElementById('lightboxOverlay');
const openBtn = document.getElementById('openLightbox');
const closeBtn = document.getElementById('closeLightbox');

// Show modal
openBtn.addEventListener('click', () => {
    overlay.style.display = 'flex';
});

// Close modal by button
closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// Close modal by clicking outside modal box
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.style.display = 'none';
    }
});

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        overlay.style.display = 'none';
    }
});
