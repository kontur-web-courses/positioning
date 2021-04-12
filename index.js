/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
function onLoad() {
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("myBtn");
    const span = document.getElementsByClassName("close")[0];


    let prWidth = 0;
    const element = document.querySelector('.progress .fill');
    const prId = setInterval(function() {
        element.style.width = ++prWidth + "%";
        if (prWidth >= 100) {
            clearInterval(prId);
        }
    }, 10);

    btn.onclick = function() {

        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}