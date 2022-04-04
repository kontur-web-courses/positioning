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

function run_progress_bar(delta) {
    const framesCount = 8;
    const progress_bar = document.querySelector('.progress .bar');

    for (let i = 0; i < framesCount + 1; i++) {
        setTimeout(function(j) {
            progress_bar.style.width = `${100 * j / framesCount}%`;
        }, i * delta / framesCount, i);
    }
}

run_progress_bar(500);