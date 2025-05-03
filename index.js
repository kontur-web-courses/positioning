const closeButton = document.getElementById('close-lightbox');
closeButton.addEventListener('click', () => {
    const otherPage = document.getElementById('other-page');
    otherPage.style.display = "none";
})


const strip = document.getElementById('strip');
let perc = 0;

function timePass() {
    setTimeout(() => {
        perc++;
        strip.style.clipPath = `inset(0 ${100 - perc}% 0 0)`;
        if (perc < 100) {
            timePass();
        }
    }, 10)
}


timePass();