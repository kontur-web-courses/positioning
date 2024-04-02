/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

var i = 0;
function move() {
    if (i == 0) {
        i = 1;
        const elem = document.querySelector('.progressBar');
        var width = 1;
        var id = setInterval(frame, 30);
        function frame() {
            console.log(width)
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.clipPath = `inset(0 0 0 ${width}%)`;
            }
        }   
    }
}