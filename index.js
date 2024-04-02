/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
const modalTrigger = document.querySelector('.trigger');

const windowInnerWidth = document.documentElement.clientWidth;
const scrollbarWidth = parseInt(window.innerWidth) - parseInt(document.documentElement.clientWidth);

const bodyElementHTML = document.getElementsByTagName("body")[0];
const modalBackground = document.getElementsByClassName("modalBackground")[0];
const modalClose = document.getElementsByClassName("modalClose")[0];
const modalActive = document.getElementsByClassName("modalActive")[0];
function bodyMargin() {
    bodyElementHTML.style.marginRight = "-" + scrollbarWidth + "px";
}

bodyMargin();
console.log(modalTrigger)
modalTrigger.addEventListener("click", function () {
    modalBackground.style.display = "block";

    if (windowInnerWidth >= 1366) {
        bodyMargin();
    }

    modalActive.style.left = "calc(50% - " + (175 - scrollbarWidth / 2) + "px)";
    startProgressBar();
});

modalClose.addEventListener("click", function () {
    modalBackground.style.display = "none";
    if (windowInnerWidth >= 1366) {
        bodyMargin();
    }
});

modalBackground.addEventListener("click", function (event) {
    if (event.target === modalBackground) {
        modalBackground.style.display = "none";
        if (windowInnerWidth >= 1366) {
            bodyMargin();
        }
    }
});
function startProgressBar() {
    const pbar = document.querySelector('.progress-bar .stena');
    pbar.style.width = '100%';
    const iterations = 100;
    const interval = 3000 / iterations;
    let i = 0;

    const progressBarInterval = setInterval(() => {
        pbar.style.width = `${++i}%`;
        if (i === iterations) {
            clearInterval(progressBarInterval);
        }
    }, interval);
}

