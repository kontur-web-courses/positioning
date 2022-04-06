const progressButton = document.getElementById("progressButton");
const progressBar = document.getElementById("progressBar");
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];


progressButton.onclick = function () {
    function increaseProgressValue() {
        progressBar.style.width = counter + '%';
        if (counter === 100) {
            clearInterval(intervalId);
        }
        counter++;
    }

    let counter = 0;
    let intervalId = setInterval(increaseProgressValue, 50);

}

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}