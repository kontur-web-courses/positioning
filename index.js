// Закрытие по кнопке
document.getElementById('closeModal').onclick = () => {
    document.getElementById('modalOverlay').style.display = 'none';
};
document.getElementById('closeButton').onclick = () => {
    document.getElementById('modalOverlay').style.display = 'none';
};

// Закрытие по клику вне окна
window.onclick = (e) => {
    const overlay = document.getElementById('modalOverlay');
    if (e.target === overlay) overlay.style.display = 'none';
};

// ESC
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById('modalOverlay').style.display = 'none';
    }
});
