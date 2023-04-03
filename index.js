const lightbox = document.querySelector('.lightbox');
const overlay = document.querySelector('.overlay')

function closeWindow(){
    lightbox.style.display = 'none';
    overlay.style.display = 'none';
}

function openWindow(){
    lightbox.style.display = 'inline-block';
    overlay.style.display = 'flex';
}

const closeLightbox = document.querySelector('.closeLightbox');
closeLightbox.addEventListener('click', closeWindow)

const openLightbox = document.querySelector('.openLightbox');
openLightbox.addEventListener('click', openWindow);

function progressBar(){
    document.querySelectorAll('.bar').forEach(progressbar => {
        let p = 0;
        const time = setInterval(() => {
            if (p < 100) {
                p++;
                let progressLine = progressbar.firstElementChild;
                progressLine.style.width = `${p}%`;
            } else
                clearInterval(time)
        }, 30);
    })
}