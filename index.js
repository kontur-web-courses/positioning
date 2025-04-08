document.getElementById('openModalBtn').addEventListener('click', function() {
    document.getElementById('modalOverlay').style.display = 'flex';
});

document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('modalOverlay').style.display = 'none';
});

document.getElementById('modalOverlay').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});

document.getElementById('okButton').addEventListener('click', function() {
    document.getElementById('modalOverlay').style.display = 'none';
});
