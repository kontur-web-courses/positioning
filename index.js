
function Close() {
    console.log('hide pls')
    const modalElements = document.getElementsByClassName("modal");
    for (let i = 0; i < modalElements.length; i++) {
        modalElements[i].style.display = "none";
    }
}
