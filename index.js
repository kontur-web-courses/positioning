document.querySelectorAll('.progressbar').forEach(progressbar => {
    let progress = 0

    const intervalId = setInterval(() => {
        if (progress < 100) {
            progress++
            let progressLine = progressbar.firstElementChild
            progressLine.style.width = `${progress}%`
        } else {
            clearInterval(intervalId)
        }
    }, 30)
})

document.querySelectorAll('.modal__close').forEach(closeButton => {
    closeButton.addEventListener('click', () => closeModal())
})


document.querySelectorAll('.modal__button').forEach(closeButton => {
    closeButton.addEventListener('click', () => closeModal())
})

document.querySelectorAll('.open_modal__button').forEach(openButton => {
    openButton.addEventListener('click', () => openModal())
})

function closeModal() {
    document.querySelectorAll('.modal__container').forEach(overlay => overlay.style.display = 'none')
}

function openModal() {
    document.querySelectorAll('.modal__container').forEach(overlay => overlay.style.display = 'block')
}