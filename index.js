/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
var lightbox = document.querySelector(".dark_background");
var span = document.querySelector("#close");

span.onclick = function() {
    lightbox.style.display = "none";

  }

let i = 0;
function move() {
    if (i === 0) {
        i = 1;
        const elem = document.querySelector(".progression");
        let width = 0;
        let id = setInterval(frame, 60);
        function frame() {
            if (width >= 600) {
                clearInterval(id);
                i = 0;
            } else {
                width+=12;
                elem.style.width = width + "px";
            }
        }
    }
}

move()