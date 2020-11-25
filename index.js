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
    overlay.style.display = 'block';
    loadingScale.style.width = '40%'
    beginAnimation()
}

function beginAnimation(){
    let width = 40;
    animationStep(width)
}

function animationStep(width){
    if (width < 100){
        width++;
        loadingScale.style.width = `${width}%`
        setTimeout(()=> animationStep(width), 50)
    }
    else{
        closeWindow()
        loadingScale.style.width = '100%'
    }
}

const closeWindowBtn = document.querySelector('.closeWindowBtn');
closeWindowBtn.addEventListener('click', closeWindow)

const openWindowBtn = document.querySelector('.openWindowBtn');
openWindowBtn.addEventListener('click', openWindow)

const loadingScale = document.querySelector('.loading');
beginAnimation()
