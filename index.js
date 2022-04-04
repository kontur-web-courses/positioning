/*
    Изменить элементу цвет и ширину можно вот так:

    const element =
    ;
    element.style.color = 'red';
    element.style.width = '300px';
*/
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let openButton = document.querySelector('.open-modal');
openButton.onclick = function() {
    modal.style.display = "block";
    overlay.style.display = "block";
}

let closeButton = document.querySelector('.close_window');
closeButton.onclick = function() {
    modal.style.display = "none";
    overlay.style.display = "none";
}




let progressbar = document.querySelector('#progressbar'),
    max = progressbar.attr('max'),
    time = (1000/max)*5,
    value = progressbar.val();

let loading = function() {
    value += 1;
    addValue = progressbar.val(value);

    document.querySelector('.progress-value').html(value + '%');

    if (value === max) {
        clearInterval(animate);
    }
};
let animate = setInterval(function() {
    loading();
}, time);