document.getElementById('closeModal').onclick = () => {
    document.getElementById('modalOverlay').style.display = 'none';
};
document.getElementById('closeButton').onclick = () => {
    document.getElementById('modalOverlay').style.display = 'none';
};

window.onclick = (e) => {
    const overlay = document.getElementById('modalOverlay');
    if (e.target === overlay) overlay.style.display = 'none';
};

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById('modalOverlay').style.display = 'none';
    }
});
