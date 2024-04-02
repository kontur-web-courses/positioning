/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

function move() {
    let elem = document.querySelector(".progress-bar");
    let width = 0;
    let id = setInterval(frame, 33);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        }
        else {
            width++;
            elem.style.width = width + "%";
        }
    }
}

document.querySelector('.modal_window_close').onclick = function () {
    document.querySelector('.modal_window').style.display = 'none';
    document.querySelector('.modal_window').style.display = 'none';
}