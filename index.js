document.addEventListener("DOMContentLoaded", () => {
    let red = document.getElementById("red");
    let p = 0;
    let interval = setInterval(() => {
        if (p > 100) {
            clearInterval(interval);
        } else {
            red.style.width = p + "%";
            p++;
        }
    }, 10);
});
