/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
const modalWindow = document.getElementById('modalWindow');
const closeModalWindow = document.querySelector('.closeModalWindow');

closeModalWindow.addEventListener('click', function () {
    console.log('hide pls')
    modalWindow.hidden = true;
})
