/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

function move() {
    let elem = document.getElementById("myBar");
    let width = 0;
    let id = setInterval(frame, 10);
    document.getElementById("moveButton").disabled = true;

    function frame() {
        if (width >= 100) {
            document.getElementById("moveButton").disabled = false;
            clearInterval(id);
        } else {
            width += 0.5;
            elem.style.width = Math.round(width) + '%';
            elem.innerHTML = '12314'
        }
    }
}