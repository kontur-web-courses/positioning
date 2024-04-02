document.querySelectorAll(".pb").forEach(progressbar => {
    let progress = 0;
    const intervalId = setInterval(() => {
        if (progress < 100) {
            progress++;
            let progressLine = progressbar.firstElementChild;
            progressLine.style.width = `${progress}%`;
        } else {
            clearInterval(intervalId);
        }
    }, 30);
});
document.querySelectorAll(".modal_close").forEach(closeButton => {
    closeButton
        .addEventListener("click", () => closeModal());
});


document.querySelectorAll(".modal_button").forEach(closeButton => {
    closeButton
        .addEventListener("click", () => closeModal());
});

function closeModal() {
    document
        .querySelectorAll(".modal_container")
        .forEach(overlay => overlay.style.display = "none");
}
