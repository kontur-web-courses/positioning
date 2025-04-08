/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

document
    .querySelector('.close-button')
    .addEventListener(
        'click',
        function () {
            document.querySelector('.overlay').style.display = 'none';
        })