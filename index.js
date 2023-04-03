function close() {
    let lightbox = document.querySelector('.overlay')
    lightbox.style.display = 'none';
    let modal = document.querySelector('.modal')
    modal.style.display = 'none';
}

let progress = document.querySelector(".progress_inner");
let dur = 3000;
let value = 0;
let progress_bar = setInterval(()=>{
    value += 1/3;
    progress.style.width = String(value +"%");
    if (value > 100)
        clearInterval(progress_bar);
},10);