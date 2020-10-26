/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

function closeAd()
{
    const modalDiv = document.getElementById('modal');
    const overlayDiv = document.getElementById('overlay');
    modalDiv.style.display = 'none';
    overlayDiv.style.display = 'none';
}



