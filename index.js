/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

function closeModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add('display-none');
    resetProgressbar();
}

function openModal() {
    const modal = document.querySelector('.modal');
    modal.classList.remove('display-none');
    startProgressbar('#progress');
}

let timer;

function startProgressbar(id) {
    const progressbar = document.querySelector(id);
    const progress = progressbar.querySelector('.progressbar-progress');
    const progressbarText = progressbar.querySelectorAll('.progressbar-text');
    
    const time = 3.5; 
    let percent = 0;

    cycleAnimation();

    function cycleAnimation() {
        timer = setTimeout(() => {
            percent++;
            progress.style.width = `${percent}%`;
            progressbarText.forEach (element => {
                element.textContent=`${percent}%`;
            })

            if (percent < 100) {
                cycleAnimation();
            }
            
        }, time * 1000 / 100);
    }
}

function resetProgressbar () {
    clearTimeout(timer);
}