function setProgress(progress) {
    const element = document.querySelector('.red_bar');
    element.style.clipPath = `inset(0 ${100 - progress}% 0 0)`;
}

function animateProgress(milliseconds) {
    const totalTime = 3000
    const progress = Math.min(100, Math.floor(milliseconds / totalTime * 100));
    setProgress(progress);
    if (progress >= 100) {
        return;
    }
    requestAnimationFrame(animateProgress);
}

requestAnimationFrame(animateProgress);
//
// function animateProgress2(totalMilliseconds, time=0){
//     setProgress(Math.floor(time / totalMilliseconds * 100));
//     const deltaTime = 1;
//     setTimeout(() => animateProgress2(totalMilliseconds, deltaTime + time), deltaTime);
// }
//
// animateProgress2(3000);