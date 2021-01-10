const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')
const progressBar = document.querySelector('.progressValue')
startProgressBar();

function startProgressBar() {
    const maxValue = 100;
    let value = 0;
    const time = 3000/maxValue;
    const loading = function () {
        value += 1;
        progressBar.style.width = `${value}%`;
        if (value >= maxValue) {
            clearInterval(animate);
        }
    }
    const animate = setInterval(loading, time);
}

function resetProgressBar() {
     progressBar.style.width = "0";
}

function closeWindow(){
    modal.style.display = 'none';
    overlay.style.display = 'none';
    resetProgressBar();
}

function openWindow(){
    modal.style.display = 'inline-block';
    overlay.style.display = 'block';
    startProgressBar();
}

const closeWindowBtn = document.querySelector('.closeWindowBtn');
closeWindowBtn.addEventListener('click', closeWindow)

const openWindowBtn = document.querySelector('.openWindowBtn');
openWindowBtn.addEventListener('click', openWindow)