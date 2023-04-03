/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
const element = document.querySelector('.red-bar');
element.style.transitionDuration = '0';
element.style.width = '0';
function progresbar(){
    element.style.transitionDuration = '3000ms';
    element.style.width = '94.1%';
}

document.querySelector('.close').addEventListener('click', function (){
    const wrapper = document.querySelector('.lightboxWrapper')
    wrapper.style.display = 'none';
})

progresbar();
