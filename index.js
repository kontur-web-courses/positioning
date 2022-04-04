/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

const bar = document.querySelector('.bar');
let i = 0;

function update() {
    bar.style.width = i.toString() + 'px';
    i+=2;
    if(i < 201)
        setTimeout(update, 30);
}

update();