/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')


function closeWindow(){
    modal.style.display = 'none';
    // overlay.style.backgroundColor = 'transparent';
    overlay.style.display = 'none';
}

function openWindow(){
    modal.style.display = 'inline-block';
    // overlay.style.backgroundColor = 'rgba(59, 67, 76, 0.9)';
    overlay.style.display = 'block';
}

const closeWindowBtn = document.querySelector('.closeWindowBtn');
closeWindowBtn.addEventListener('click', closeWindow)

const openWindowBtn = document.querySelector('.openWindowBtn');
openWindowBtn.addEventListener('click', openWindow)


function setProgress(){
    const redLine = document.querySelector(".progress-bar-red");
    for (let i = 0; i<=3000; i=i+50){
        setTimeout(()=>redLine.style.width=i/10+'px', i);
    }
};
setProgress();

