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

function animateProgressBar(){
    document.querySelectorAll('.bar').forEach(progressbar => {
        let progress = 0

        const intervalId = setInterval(() => {
            if (progress < 100) {
                progress++
                let progressLine = progressbar.firstElementChild
                progressLine.style.width = `${progress}%`
            } else {
                clearInterval(intervalId)
            }
        }, 30)
    })
}

