document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('close-modal').addEventListener('click', function() {
        document.getElementById('modal-overlay').classList.add('hidden');
        document.getElementById('modal-window').classList.add('hidden');
    });

    document.getElementById('open-modal').addEventListener('click', function() {
        document.getElementById('modal-overlay').classList.remove('hidden');
        document.getElementById('modal-window').classList.remove('hidden');

        var progressBar = document.querySelector('.progress-bar');
        var width = 0;
        var increment = 1;
        var intervalTime = 30;
        progressBar.style.width = '0%'

        var interval = setInterval(function() {
            if (width >= 100)
                clearInterval(interval);
            else {
                width += increment;
                progressBar.style.width = width + '%';
            }
        }, intervalTime);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var progressBar = document.querySelector('.progress-bar');
    var width = 0;
    var increment = 1;
    var intervalTime = 30;
    progressBar.style.width = '0%'

    var interval = setInterval(function() {
        if (width >= 100)
            clearInterval(interval);
        else {
            width += increment;
            progressBar.style.width = width + '%';
        }
    }, intervalTime);
});