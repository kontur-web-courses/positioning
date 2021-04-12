
const element = document.querySelector('.progress_c');

let id = setInterval(frame, 10);
function frame() {
    let width = 0;
    if (width >= 100) {
        clearInterval(id)
    }
    else {
        width += 10;
        element.style.width = width + "%";
    }
}

/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

