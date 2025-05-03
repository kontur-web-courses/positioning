document.querySelector('.close-button').addEventListener('click', function() {
    document.querySelector('.overlay').style.display = 'none';
});

function moveProgressRed() {
    const progressRed = document.querySelector('.red-progress');
    let i = 0;
    function animate() {
        if (i <= 300) {
            progressRed.style.width = `${i}px`;
            i++;
            setTimeout(animate, 10);
        }
    }
    animate();
}

moveProgressRed();