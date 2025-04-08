const closeButton = document.getElementById('close-lightbox');
closeButton.addEventListener('click', () => {
    const otherPage = document.getElementById('other-page');
    otherPage.style.display = "none";
})