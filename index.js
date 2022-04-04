let startWidth = 0;
let maxWidth = 200;
let intervalId;
function close_modal(){
    const element = document.querySelector('.lb-container');
    element.style.display = 'None';
    startWidth = 0;
    clearInterval(intervalId)
}
function open_modal(){
    const element = document.querySelector('.lb-container');
    element.style.display = "flex";
    intervalId = setInterval(() => {
        document.querySelector(".progress_finished").style.width = startWidth + "px";
        if (startWidth >= maxWidth) {
            clearInterval(intervalId);
        }
        startWidth += 1;
    }, 10
    );
}