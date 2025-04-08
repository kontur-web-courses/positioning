const modalOverlay = document.getElementById('modalOverlay');
const progressFill = document.getElementById('progressFill');
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
