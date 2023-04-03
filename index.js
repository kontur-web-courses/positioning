function load() {
    const elem = document.getElementById("bar");
    const btn = document.getElementById("btn");
    let width = 0;
    const id = setInterval(frame, 10);
    btn.disabled = true;

    function frame() {
        if (width >= 100) {
            btn.disabled = false;
            clearInterval(id);
        } else {
            width += 0.5;
            elem.style.width = Math.round(width) + '%';
            elem.innerHTML = ' ';
        }
    }
}
