/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

let startWidth = 0;
let maxWidth = 200;
let intervalId;
intervalId = setInterval(() => {
        document.querySelector(".progress_finished").style.width = startWidth + "px";
        if (startWidth === maxWidth) {
            clearInterval(intervalId);
        }
        startWidth += 1;
    }, 25
);

