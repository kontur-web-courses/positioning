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


const bar = document.querySelector('.progress .bar');
let progress = 0;
let iter = () => {
    if (progress !== 100) {
        progress += 1;
        bar.style.width = `${progress}%`;
        let timerId = setTimeout(iter, 30);
    } 
}
setTimeout(iter, 30)

const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}