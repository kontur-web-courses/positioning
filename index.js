/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/


const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close");

closeBtn.onclick = function() {
    modal.style.display = "none";
}

const progressBar = document.querySelector('.progress');

function fillProgressBar(duration) {
    let startTime = null;

    function animate(timestamp) {
        if (!startTime) {
            startTime = timestamp;
        }
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration * 100, 100);
        progressBar.style.width = percentage + '%';

        if (progress < duration) {
            requestAnimationFrame(animate);
        }
    }
    requestAnimationFrame(animate);
}

fillProgressBar(3000);
