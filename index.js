var overlay = document.querySelector(".overlay");
var modal = document.querySelector(".modal");
var closeModalBtn = document.querySelector(".close");

openModalBtn.onclick = function() {
    modal.style.display = "block";
    overlay.style.display = "block";
}

closeModalBtn.onclick = function() {
    modal.style.display = "none";
    overlay.style.display = "none";
}

function mem() {
    console.log("mem")
    let count = 0;
    let progress = setInterval(() =>
    {
        document.querySelector('.red-line').style.width = `${count++}%`;
        if (count > 100)
            clearInterval(progress);
    }, 30);
}

mem();