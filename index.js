/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/


document.querySelector('.modal_close').addEventListener('click',  () => {
    document.querySelector('.modal-container').classList.toggle('hidden');
});

let progressCount = 0;
let progress = setInterval(() => {
    document.querySelector('.progressbar_foreground').style.width = `${progressCount++}%`;
    if (progressCount > 100) {
        clearInterval(progress);
    }
}, 100);