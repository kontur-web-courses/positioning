/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

let advanceProgress = ( percent ) => {
	document.querySelector('.progress').style.background = 'linear-gradient(90deg, #F00 ' + percent + '%, rgb( 163, 163, 163 ) ' + percent + '%)';
	document.querySelector('.value').style.backgroundImage = 'linear-gradient(90deg, #FFF ' + percent + '%, rgb( 0, 0, 0) ' + percent + '%)';
}

let percentage = 0;
let percentageInterval = setInterval(() => {
	percentage++;
	if( percentage <= 100 ){
		advanceProgress( percentage );
	}
}, 30 ); 