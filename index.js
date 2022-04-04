/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

function closeModal(){
    const element = document.querySelector('.overlay');
    element.classList.add('hidden');
}

function openModal(){
    const element = document.querySelector('.overlay');
    element.classList.remove('hidden');
}