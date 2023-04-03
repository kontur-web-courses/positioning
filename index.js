/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

$(document).ready(function(){
	$('.btn-open').click(function(){
		$('.modal_overlay').css({'visibility': 'visible'});
		$('.modal').css({'visibility': 'visible'});
	});
	$('.btn-close').click(function(){
		$('.modal_overlay').css({'visibility': 'hidden'});
		$('.modal').css({'visibility': 'hidden'});
	});
});
