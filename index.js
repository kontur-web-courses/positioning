const modal = document.querySelector('.modal-wrapper');
const modalProgressbar = document.querySelector('#bar-modal');

function toggleModal(isVisible) {
    modal.style.display = isVisible ? "block" : "none";
    if (isVisible)
        animateProgressbar();
}

function animateProgressbar() {
    let progress = 0;
    const intervalId = setInterval(() => {
        if (progress < 100)
            modalProgressbar.firstElementChild.style.width = `${++progress}%`;
        else
            clearInterval(intervalId);
    }, 25);
}

function setupAccordions() {
    document.querySelectorAll(".accordion").forEach(accordion => {
        accordion.addEventListener("click", function () {
            this.classList.toggle("active");
            let item = this.nextElementSibling;
            item.style.display = item.style.display !== "block" ? "block" : "none";
        });
    });
}

document.querySelector('#close-modal').addEventListener('click', () => toggleModal(false));
document.querySelector('#open-modal').addEventListener('click', () => toggleModal(true));
setupAccordions();