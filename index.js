const progressBar = document.querySelector('.red');
const overlay = document.getElementById('overlay');
const lightbox = document.getElementById('lightbox');

function openModal() {
    overlay.hidden = false;
    lightbox.hidden = false;
    setTimeout(() => {
        let i = 0;
        let stop = setInterval(() => {
            if (i <= 1000 && !lightbox.hidden)
                progressBar.style.width = i++ / 10 + '%';
            else clearInterval(stop);
        }, 3);
    }, 250);
}

function closeModal() {
    overlay.hidden = true;
    lightbox.hidden = true;
    progressBar.style.width = '0';
}