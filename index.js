/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')


function closeWindow(){
    modal.style.display = 'none';
    // overlay.style.backgroundColor = 'transparent';
    overlay.style.display = 'none';
}

function openWindow(){
    modal.style.display = 'inline-block';
    // overlay.style.backgroundColor = 'rgba(59, 67, 76, 0.9)';
    overlay.style.display = 'block';
}

const closeWindowBtn = document.querySelector('.closeWindowBtn');
closeWindowBtn.addEventListener('click', closeWindow)

const openWindowBtn = document.querySelector('.openWindowBtn');
openWindowBtn.addEventListener('click', openWindow)


function update() { 
    var element = document.getElementById("myprogressBar");   
    var width = 1; 
    var identity = setInterval(scene, 30); 
    function scene() { 
      if (width >= 100) { 
        clearInterval(identity); 
      } else { 
        width++;  
        element.style.width = width + '%';  
      }
      if  (width==37) {
        document.getElementById("svg_2").style.fill = "#FFFFFF";
      }
      if  (width==40) {
        document.getElementById("svg_3").style.fill = "#FFFFFF";
      }
      if  (width==46) {
        document.getElementById("svg_4").style.fill = "#FFFFFF";
      }
      if  (width==49) {
        document.getElementById("svg_5").style.fill = "#FFFFFF";
      }
      if  (width==51) {
        document.getElementById("svg_6").style.fill = "#FFFFFF";
      }
      if  (width==55) {
        document.getElementById("svg_7").style.fill = "#FFFFFF";
      }
      if  (width==60) {
        document.getElementById("svg_8").style.fill = "#FFFFFF";
      }
      if  (width==65) {
        document.getElementById("svg_9").style.fill = "#FFFFFF";
      }
    } 
}

var acc = document.getElementsByClassName("accordion");
var i;
for ( i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");
  
      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling.nextElementSibling.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
      var br = this.nextElementSibling;
      if (br.style.display === "none") {
        br.style.display = "block";
      } else {
        br.style.display = "none";
      }
    });
  }
