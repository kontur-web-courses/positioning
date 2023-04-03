

const element = document.querySelector('.inner-progress');

let progressBarId = setInterval(() => {
    let width = element.style.width;
    if(width == "100%") {
        clearInterval(progressBarId);
        return;
    }
    element.style.width = width == '' ? "1%" : parseInt(width) + 1 + "%";
}, 50);