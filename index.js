document.getElementById('openOverlayButton').addEventListener('click', function() {
    document.querySelector('.overlay').style.display = 'block';
});

document.querySelector('.closeButton').addEventListener('click', function() {
    document.querySelector('.overlay').style.display = 'none';
});