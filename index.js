/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

document.querySelector('.action-btn').addEventListener('click', function() {
    document.querySelector('.overlay').style.display = 'none';
});

document.querySelector('.overlay').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});