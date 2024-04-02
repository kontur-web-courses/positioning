

function func() {
    const overlay = document.getElementById('overlay');
    overlay.style.visibility = 'visible';
    const element = document.getElementById('modal');
    element.style.visibility = 'visible';
    progressTimer();
}

function func1() {
    const overlay = document.getElementById('overlay');
    overlay.style.visibility = 'hidden';
    const element = document.getElementById('modal');
    element.style.visibility = 'hidden';
    const elem2 = document.getElementById('red');
    elem2.style.clipPath = "clip-path: polygon(0 0, 0, 0, 0, 100%, 0% 100%)";
}

function progressTimer(){
    let width = 0;
    let progressBar = document.getElementById('red');
    let time = setInterval(progress, 30);

    function progress(){
        progressBar.style.clipPath = `polygon(0 0, ${width}% 0, ${width}% 100%, 0% 100%)`;
        width++;
        if (width == 101){
            clearInterval(time);
        }
    }
}

