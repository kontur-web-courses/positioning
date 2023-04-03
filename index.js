/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
<<<<<<< Updated upstream

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
=======
var progressbar = $('#progressbar'),
max = progressbar.attr('max'),
value = progressbar.val(),
time = (1000/max)*5;

var loading = function() {
    value += 1;
    addValue = progressbar.val(value);
    if (value == max) {
        clearInterval(animate);
      }
$('.progress-value').html(value + '%');

}
$('.progress-value').html(value + '%');

setInterval(function() {
    loading();
  }, time);

  var animate = setInterval(function() {
    loading();
  }, time);

  
>>>>>>> Stashed changes
