/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
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
animateProgressBar()

