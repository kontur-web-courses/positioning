/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
function mem() {
    console.log("mem")
    let count = 0;
    let progress = setInterval(() =>
    {
        console.log("интервал")
        document.querySelector('.red-line').style.width = `${count++}%`;
        if (count > 100)
            clearInterval(progress);
    }, 30);
}

mem();
