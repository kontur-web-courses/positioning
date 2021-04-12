let prWidth = 0;
const element = document.querySelector('.progress .fill');
const prId = setInterval(function() {
    element.style.width = ++prWidth + "%";
    if (prWidth >= 100) {
        clearInterval(prId);
    }
}, 10);