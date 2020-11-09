var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var progress = document.getElementById('progress'),
    percent = document.getElementById('percent')

function changeProgress() {
    if (progress.value >= progress.max) {
        return;
    }
    progress.value++;
    percent.innerHTML = "Counting voices " + Math.floor(progress.value / progress.max * 10);
    setTimeout(changeProgress, 100);
}
changeProgress();
