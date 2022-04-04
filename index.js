function overlay_on() {
    const overlay = document.querySelector('.overlay');
    const lightbox = document.querySelector('.lightbox');
    overlay.style.display = 'flex';
    lightbox.style.display = 'block';
}

function overlay_off() {
    const overlay = document.querySelector('.overlay');
    const lightbox = document.querySelector('.lightbox');
    overlay.style.display = 'none';
    lightbox.style.display = 'none';
}