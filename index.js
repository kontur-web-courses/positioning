function move() {
    let bar = document.getElementById("myBar");
    let barText = document.getElementById("myText");
    let width = 1;
    let id = setInterval(frame, 10);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        }
        else {
            width++;
            bar.style.width = width + '%';
            barText.style.clipPath = `polygon(0 0, ${width}% 0, ${width}% 100%, 0% 100%)`
        }
    }
}

move();