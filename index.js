let advanceProgress = ( percent ) => {
	document.querySelector('.progressBar').style.background = 'linear-gradient(90deg, #F00 ' + percent + '%, rgb( 163, 163, 163 ) ' + percent + '%)';
	document.querySelector('.progressText').style.backgroundImage = 'linear-gradient(90deg, #FFF ' + percent + '%, rgb( 0, 0, 0) ' + percent + '%)';
}

let percentage = 0;
let percentageInterval = setInterval(() => {
	percentage++;
	if( percentage <= 100 ){
		advanceProgress( percentage );
	}
}, 30 );