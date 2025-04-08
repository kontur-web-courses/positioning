/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.overlay').style.display = 'flex';
    
    function closeModal() {
        document.querySelector('.overlay').style.display = 'none';
    }
    
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', closeModal);
    });
    
    document.querySelector('.overlay').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
});