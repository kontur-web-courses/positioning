/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')


function closeWindow(){
    modal.style.display = 'none';
    overlay.style.display = 'none';
}

function openWindow(){
    modal.style.display = 'inline-block';
    overlay.style.display = 'block';
}

const closeWindowBtn = document.querySelector('.closeWindowBtn');
closeWindowBtn.addEventListener('click', closeWindow)

const openWindowBtn = document.querySelector('.openWindowBtn');
openWindowBtn.addEventListener('click', openWindow);

function animateProgressBar(){
    document.querySelectorAll('.bar').forEach(progressbar => {
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
}

function expandAccordionItem(){
    let acc = document.getElementsByClassName("accordion");
    let i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let item = this.nextElementSibling;
            if (item.style.display === "block") {
                item.style.display = "none";
            } else {
                item.style.display = "block";
            }
        });
    }
}

animateProgressBar()
expandAccordionItem()


