const bar = document.getElementById('bar');
var width = 0;
incrementWidth();

function incrementWidth() {
    width++;
    bar.style.width = width + '%';
    if (width < 100) {
        setTimeout(incrementWidth, 50);
    }
}

const cross = document.getElementById('cross-icon-container');
cross.addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
});
