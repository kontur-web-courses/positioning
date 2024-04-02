function closeLightbox() {
    let lightbox = document.querySelector('.modal-content')
    lightbox.style.display = 'none';
    let modal = document.querySelector('.modal')
    modal.style.display = 'none';
}

let progress = document.querySelector(".progress");
let speed = 300;
let max = 600;
let value = 0;
let progress_bar = setInterval(() => {
    if (value < 590) {
        value += max / speed;
        speed += 3;
        progress.style.width = String(value + "px");
    }
}, 3000 / speed);