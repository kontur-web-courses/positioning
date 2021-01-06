function animateProgressBar () {
    const uploaded = document.querySelector('.uploaded');
    let progress = 0; 
    
    setInterval(() => {
        uploaded.style.clip = `rect(0 ${progress += 10}px 20px 0)`;
    }, 30);
}

animateProgressBar();