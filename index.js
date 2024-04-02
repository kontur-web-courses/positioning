/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
for (const logo of document.querySelectorAll('.logo')) {
    logo.style.width < logo.style.height ? logo.style.height = '100px' : logo.style.width = '100px';
}
