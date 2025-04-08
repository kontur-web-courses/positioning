const progress = document.querySelector('.progress-fill');
const progress_text = document.querySelector('.progress-text-fill');
let width = 0;

const interval = setInterval(() => {
    width += 1;
    progress.style.width = width + '%';
    if (width >= 100) {
        clearInterval(interval);
    }
}, 30);

function modifyModalWindow(visibility){
    const window = document.querySelector(".lightbox");
    window.style.visibility = visibility;
    const overlay = document.querySelector(".lightbox-overlay");
    overlay.style.visibility = visibility;
}

function closeModalWindow(){
    modifyModalWindow("hidden");
}

function openModalWindow(){
    modifyModalWindow("visible");
}
