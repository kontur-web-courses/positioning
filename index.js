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
