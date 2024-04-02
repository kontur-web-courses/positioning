/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/


function close(){
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
}

const fps = 50;
const animationDuration = 2;
const cadrLength = 1000/fps;
const cadrs = fps * animationDuration;

const interval = setInterval(() => {
    const progress = document.querySelector('progress');
    progress.value += 100/cadrs;
    if (progress.value === 100)
    {
        clearInterval(interval);
    }
}, cadrLength);