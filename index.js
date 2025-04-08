
document.addEventListener("DOMContentLoaded", () => {
    let red = document.getElementById("red");
    let p = 0;
    while (p < 100) {
        setTimeout(() => red.style.width = p + "%", 100);
        p++;
    }
})