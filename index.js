/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/


const bar = document.querySelector('.progress-bar .bg2');
bar.style.width = '0%';
let counter = 0;
let timer = setInterval(() => {
	counter += 1;
	if (counter >= 100)
		clearInterval(timer);
	bar.style.width = counter + "%";
}, 30);
