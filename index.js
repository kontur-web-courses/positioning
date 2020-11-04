let _timer;
let _timer1;

function closeModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add('d-none');
    resetProgressWithoutPercent();
    resetProgressWithPercent();
}

function openModal() {
    const modal = document.querySelector('.modal');
    modal.classList.remove('d-none');
    startProgressWithoutPercent('#progress-1');
    startProgressWithPercent('#progress-2');
}

function startProgressWithoutPercent(id) {
    const progressbar = document.querySelector(id);
    const progress = progressbar.querySelector('.progressbar__progress');
    const time = 3;  // seconds
    let width = 0;
    progress.style.width = `${width}%`;
    cycle();

    function cycle() {
        _timer = setTimeout(() => {
            width++;
            progress.style.width = `${width}%`;
            if (width < 100) {
                cycle();
            }
        }, time * 1000 / 100);
    }
}

function startProgressWithPercent(id) {
    const progressbar = document.querySelector(id);
    const progressText = progressbar.querySelectorAll('[data-progressbar-id="2"]');
    const progress = progressbar.querySelector('.progressbar-2__progress');
    const time = 3;  // seconds
    let percent = 0;
    progress.style.width = `${percent}%`;
    progressText.forEach(el => {
        el.textContent=`${percent}%`;
    });
    cycle();

    function cycle() {
        _timer1 = setTimeout(() => {
            percent++;
            progress.style.width = `${percent}%`;
            progressText.forEach(el => {
                el.textContent=`${percent}%`;
            })
            if (percent < 100) {
                cycle();
            }
        }, time * 1000 / 100);
    }
}

function resetProgressWithoutPercent() {
    clearTimeout(_timer);
}

function resetProgressWithPercent() {
    clearTimeout(_timer1);
}