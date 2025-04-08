const modalOverlay = document.getElementById('modalOverlay');
const progressFill = document.getElementById('progressFill');
const pp = document.getElementById('white-text');
const crossBtn = document.getElementById('cross');
const moduleScreen = document.getElementsByClassName('module-screen')[0];
const openBtn = document.getElementById('openModuleBtn');

crossBtn.addEventListener('click', () => {
    moduleScreen.classList.add('hide');
})

openBtn.addEventListener('click', () => {
    moduleScreen.classList.remove('hide');
    animateProgress();
});

let percentage = 0;
let step = 0.1;

function lol() {
    percentage += step;
    progressFill.style.setProperty('width', percentage + '%');
    pp.style.setProperty("clip-path", "inset(0 0 0 " + percentage +"%)")
    if (percentage < 100){
        setTimeout(() => {  
            lol();
         }, 10);
    }
}


lol();
