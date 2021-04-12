function openModal() {
    document.getElementById("modal_window").style.display = "block";
    document.getElementById("overlay_window").style.display = "block";
}

function closeModal() {
    document.getElementById("modal_window").style.display = "none";
    document.getElementById("overlay_window").style.display = "none";
}

function move() {
    let elem = document.getElementById("bar");
    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}