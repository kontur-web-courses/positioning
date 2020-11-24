let closeButton = document.getElementById('closeButton')

closeButton.onclick = function () {
    let overlay = document.getElementById('overlay')
    let lightBox = closeButton.parentElement;
    let progressValue = document.querySelector('.progressBar .value')
    hideElements([closeButton], 0);
    showLoading(progressValue);
    hideElements([lightBox, overlay], 3000)
}

function showLoading(element) {
    element.style.width = '100%';
}

function hideElements(elements, delay) {
    setTimeout(() => {
        elements.forEach(element => {
            element.classList.add('hidden')
        })
    }, delay)
}
