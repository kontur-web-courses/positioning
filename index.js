document.getElementsByClassName("lightbox-close")[0].onclick = () => {
    document.getElementsByClassName("lightbox")[0].classList.add("hidden");
    document.getElementsByClassName("overlay")[0].classList.add("hidden");
}

let progressValue = 0;

let progressBarInterval = setInterval(()=>{
    let progressBar = document.getElementsByClassName("progress")[0];
    progressValue++;
    if (progressValue >= 100){
        clearInterval(progressBarInterval);
    }
    progressBar.style.width = progressValue + "%";
}, 30);