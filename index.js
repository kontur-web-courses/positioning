function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function extendBar() {
    let currentWidth = 0;
    setInterval(addWidth, 30);
    function addWidth() {
        if (currentWidth >= 100) {
            clearInterval(extendBar);
            document.querySelector('.lb-b').style.display = 'inline-block';
        } else {
            currentWidth++;
            document.querySelector('.progressBar').style.width = currentWidth + '%';
        }
    }
}

extendBar();