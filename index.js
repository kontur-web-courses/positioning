const closeLightboxBtn = document.getElementById('closeLightboxBtn');
const lightBox = document.getElementById('lightbox');
const hiddenBox = document.getElementById('hidden');
const progressValueStyle = document.getElementById('progress-value').style;

fillProgress(3000);

function fillProgress(duration){
    progressValueStyle.transition = `width ${duration}ms ease-in-out`;
    progressValueStyle.width = "100%";
}

closeLightboxBtn.onclick = () => {
    lightBox.style.display = 'none';
    hiddenBox.style.display = 'none';
}

/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/