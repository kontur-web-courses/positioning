function move() {
    let elem = document.getElementById("redBar");
    let width = 10;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {   width++;
        elem.style.width = width + '%';
      }
    }
  }