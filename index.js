/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/  
const element = document.querySelector('.front');

let i = 0;
setInterval(()=>{if(i <= 100){
    element.style.clipPath = `inset(0 0 0 ${i}%)`
i = i + 4;  }},200);
