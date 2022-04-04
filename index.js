var width = 0;
window.onload = function(e){
    setInterval(function () {
        width = width >= 100 ? 0 : width + 1;
        document.getElementById('progress-bar').style.width = width + '%';
        }, 30);
}