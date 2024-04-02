const modal = document.getElementById("modalWindow");
const modalButton = document.getElementById("openModal");
const span = document.getElementsByClassName("closeButton")[0];

modalButton.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.querySelector(".progress");
    const loadingText = document.querySelector(".loading-text");

    let progress = 0;
    progressBar.style.width = progress + "%";

    function animateProgress() {
        const interval = setInterval(function() {
            progress++;
            progressBar.style.width = progress + "%";
            loadingText.textContent = "Loading... " + progress + "%";

            if (progress >= 100) {
                clearInterval(interval);
                loadingText.textContent = "complete";
            }
        }, 30);
    }

    animateProgress();
});

/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/