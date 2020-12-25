document.querySelector(".lightboxClose").addEventListener('click', () => {
    document.querySelector('.modalWindow').style.visibility = 'hidden';
})
document.querySelector(".lightboxOpen").addEventListener('click', () => {
    document.querySelector('.modalWindow').style.visibility = 'visible';

})

let width = 0;
setInterval(() => {
    showProgress()
}, 10)

function showProgress() {
    let redProgressBar = document.querySelector('.redColorProgressBar')
    redProgressBar.style.clip = `rect(0 ${width+=5}px 40px 0)`
}