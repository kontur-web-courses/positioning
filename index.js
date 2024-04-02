/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
for (const logo of document.querySelectorAll('.logo')) {
    logo.style.width < logo.style.height ? logo.style.height = '100px' : logo.style.width = '100px';
}

const modalElement = document.getElementById('modal');
modalElement.showModal();

const closeButton = document.getElementById('close');
closeButton.addEventListener('click', () => modalElement.close());

let progress = 0;
const bar = document.querySelector('.progress');
let timerId = setInterval(() => { 
    progress += 1;
    bar.style.width = `${progress}%`;
}, 30);
setTimeout(() => { clearInterval(timerId); }, 3000);