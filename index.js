function move() {
    const elem = document.querySelector(".progress-bar");
    let width = 1;
    const id = setInterval(frame, 1);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}