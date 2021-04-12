const modalContainer = document.querySelector(".modal-container")
const modal = document.querySelector(".modal")

const modelOpen = document.querySelector(".modal-open")
modelOpen.addEventListener("click", function () {
	modalContainer.style.display = "block"
	modalContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)"

	modal.style.display = "flex"
})

const modelClose = document.querySelector(".modal-close")
modelClose.addEventListener("click", function () {
	modalContainer.style.display = "none"
	modalContainer.style.backgroundColor = "none"

	modal.style.display = "none"
})

const barText = document.querySelectorAll(".progress span")
const progressBar = document.querySelectorAll(".progress")

let p = 0

setInterval(function () {
	p++
	if (p > 100) {
		p = 0
	}
	for (let i = 0; i < barText.length; i++) {
		barText[i].innerHTML = "Loading... " + p + " %"
	}
	for (let i = 0; i < progressBar.length; i++) {
		progressBar[i].lastChild.style.clip = "rect(0 " + p * 2 + "px 40px 0)"
	}
}, 100)
