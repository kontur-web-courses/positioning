/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.querySelector('.close-btn');
    const overlay = document.querySelector('.overlay');
    const modal = document.querySelector('.modal');

    closeBtn.addEventListener('click', function() {
        overlay.style.display = 'none';
        modal.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.querySelector('.progress');
    const text = document.querySelector('.text');

    let width = 0;
    const interval = setInterval(function() {
        width += 10;
        if (width > 100) {
            clearInterval(interval);
        } else {
            progressBar.style.width = width + '%';
            if (width >= 100) {
                text.innerText = 'Complete!';
                progressBar.classList.add('done');
            }
        }
    }, 300);
});