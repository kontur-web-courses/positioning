function move() {
    let elem = document.querySelector('.positive');
    let elemneg = document.querySelector(".negative");
    let width = 0;
    let widthneg = 100;
    let id = setInterval(frame, 1);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width += 0.16;
        widthneg -= 0.16;
        elem.style.width = width + "%";
        elemneg.style.width = widthneg + "%";
      }
    }
  }
  
  move()