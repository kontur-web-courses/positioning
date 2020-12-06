/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
const openModalWindowLinkElement = document.querySelector('#changeModalState');
const text = 'модальное окно';
openModalWindowLinkElement.textContent = `Открыть ${text}`;
const lightbox = document.querySelector('.lightbox');
const progress_bar = document.querySelector('#progress-bar');
const squares = document.querySelectorAll('.square');

let modalWindowOpened = false;
function changeModalWindowState(){
    const blinded = '0.6'
    const notBlinded = '1';
    if (!modalWindowOpened){
        lightbox.style.display = 'block';
        progress_bar.style.opacity = blinded;
        [...squares].forEach(square => {
            square.style.opacity = blinded;
        })
        modalWindowOpened = true;
        openModalWindowLinkElement.textContent = `Закрыть ${text}`;
        return
    }

    openModalWindowLinkElement.textContent = `Открыть ${text}`;
    lightbox.style.display = 'none';
    [...squares].forEach(square => {
        square.style.opacity = notBlinded;
    })
    progress_bar.style.opacity = notBlinded;
    modalWindowOpened = false
}

function fillProgressBar(){
    let styleElem = document.head.appendChild(document.createElement("style"));
    let percent = 0;
    const interval = setInterval(()=>{
        styleElem.innerHTML = `#progress-bar:after {width: ${percent}%}`
        percent += 25;
    }, 750)
    setTimeout(()=>clearInterval(interval),4000)
}
fillProgressBar()