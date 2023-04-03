/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
function hide() {
    const lightbox = document.querySelector('.lightbox');
    const lightboxContent = document.querySelector('.lightbox-content');
    const blur = document.querySelector('.blur')
    lightbox.style.display = 'none';
    lightboxContent.style.display = 'none';
    blur.style.display = 'none';
}