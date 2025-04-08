document.getElementById("crossButton").addEventListener("click", () => {
    document.getElementById("overlay").style.display = "none"
})

document.getElementById("closeButton").addEventListener("click", () => {
    document.getElementById("overlay").style.display = "none"
})

document.getElementById("overlay").addEventListener("click", (e) => {
    if (e.target.id === "overlay") {
        document.getElementById("overlay").style.display = "none"
    }
})

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        document.getElementById("overlay").style.display = "none"
    }
})

function animateProgressBar() {
    const progressFill = document.querySelector(".progress-fill")
    const progressText = document.querySelector(".progress-text")
    const duration = 3000
    const startTime = performance.now()

    progressFill.style.width = "0%"

    function updateProgress(currentTime) {
        const elapsedTime = currentTime - startTime

        if (elapsedTime < duration) {
            const progressPercent = (elapsedTime / duration) * 100

            progressFill.style.width = `${progressPercent}%`

            requestAnimationFrame(updateProgress)
        } else {
            progressFill.style.width = "100%"
            progressText.textContent = "Loaded✅"
        }
    }

    requestAnimationFrame(updateProgress)
}

document.addEventListener("DOMContentLoaded", animateProgressBar)

