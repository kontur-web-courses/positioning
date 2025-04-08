const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');
const openModalBtn = document.querySelector('.open-modal-btn');

function openModal() {
    modal.style.display = 'block';
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden'; 
}

function closeModal() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = '';
}

openModalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

const progressFill = document.querySelector('.progress-fill');
const progressBar = document.querySelector('.progress-bar');

function animateProgressBar() {
    const duration = 3000;
    const startTime = performance.now();
    const framesPerSecond = 60;
    const totalFrames = duration / (1000 / framesPerSecond);
    let currentFrame = 0;
    const text = "Loading...";
    const textContainer = document.createElement('div');
    textContainer.className = 'text-container';
    textContainer.style.position = 'absolute';
    textContainer.style.width = '100%';
    textContainer.style.height = '100%';
    textContainer.style.display = 'flex';
    textContainer.style.justifyContent = 'center';
    textContainer.style.alignItems = 'center';

    const oldText = progressBar.querySelector('.text-container');
    if (oldText) progressBar.removeChild(oldText);

    for (let i = 0; i < text.length; i++) {
        const charSpan = document.createElement('span');
        charSpan.textContent = text[i];
        charSpan.style.transition = 'color 0.1s';
        charSpan.className = 'char';
        textContainer.appendChild(charSpan);
    }
    
    progressBar.appendChild(textContainer);
    const charSpans = progressBar.querySelectorAll('.char');

    function updateProgress() {
        currentFrame++;
        const progress = Math.min(currentFrame / totalFrames, 1);
        const percent = progress * 100;
        progressFill.style.width = `${percent}%`;
        
        const barRect = progressBar.getBoundingClientRect();
        const fillWidth = barRect.width * progress;
        

        charSpans.forEach((span, index) => {
            const spanRect = span.getBoundingClientRect();
            const spanPosition = spanRect.left + spanRect.width/2 - barRect.left;
            
            if (spanPosition < fillWidth) {
                span.style.color = 'white';
            } else {
                span.style.color = 'black';
            }
        });
        
        if (progress < 1) {
            requestAnimationFrame(updateProgress);
        } else {
            charSpans.forEach(span => {
                span.style.color = 'white';
            });
        }
    }

    requestAnimationFrame(updateProgress);
}

document.querySelector('.open-modal-btn').addEventListener('click', function() {
    progressFill.style.width = '0%';
    setTimeout(animateProgressBar, 100);
});